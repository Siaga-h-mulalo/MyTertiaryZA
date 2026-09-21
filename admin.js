import { auth, db } from "./firebase-config.js";
import { onAuthStateChanged, signOut }
  from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import {
  collection, doc, getDoc, getDocs, addDoc, updateDoc, deleteDoc,
  serverTimestamp
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

let currentAdmin = null;
let cache = { universities: [], colleges: [], courses: [], announcements: [], settings: {} };

const $ = id => document.getElementById(id);
const viewRoot = $("viewRoot");
const viewTitle = $("viewTitle");

const STATUS_OPTIONS = [
  { v: "open",        l: "🟢 Applications Open" },
  { v: "closing-soon",l: "🟠 Closing Soon" },
  { v: "closed",      l: "🔴 Applications Closed" },
  { v: "not-yet-open",l: "⚪ Not Yet Open" },
  { v: "coming-soon", l: "🔵 Information Coming Soon" }
];
const STATUS_MAP = Object.fromEntries(STATUS_OPTIONS.map(s => [s.v, s.l]));

onAuthStateChanged(auth, async (user) => {
  if (!user) { window.location.href = "login.html"; return; }
  const snap = await getDoc(doc(db, "admins", user.uid));
  if (!snap.exists()) { await signOut(auth); window.location.href = "login.html"; return; }
  currentAdmin = { uid: user.uid, email: user.email, ...snap.data() };
  $("adminEmail").textContent = user.email;
  await refreshAll();
  renderView("dashboard");
});

$("logoutBtn").addEventListener("click", async () => { await signOut(auth); window.location.href = "login.html"; });
$("hamburger").addEventListener("click", () => $("adminSidebar").classList.toggle("open"));

document.querySelectorAll(".anav").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".anav").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    renderView(btn.dataset.view);
    if (window.innerWidth <= 900) $("adminSidebar").classList.remove("open");
  });
});

async function load(name) {
  const snap = await getDocs(collection(db, name));
  return snap.docs.map(d => ({ _id: d.id, ...d.data() }));
}
async function refreshAll() {
  const [universities, colleges, courses, announcements, settingsArr] = await Promise.all([
    load("universities"), load("colleges"), load("courses"), load("announcements"), load("settings")
  ]);
  cache.universities  = universities;
  cache.colleges      = colleges;
  cache.courses       = courses;
  cache.announcements = announcements;
  cache.settings      = settingsArr[0] || {};
}

function toast(msg) {
  const t = $("adminToast");
  t.textContent = msg;
  t.classList.add("show");
  setTimeout(() => t.classList.remove("show"), 2500);
}

function confirmDialog(title, message) {
  return new Promise(resolve => {
    $("confirmTitle").textContent = title;
    $("confirmMessage").textContent = message;
    const modal = $("confirmModal");
    modal.classList.add("show");
    const done = (val) => {
      modal.classList.remove("show");
      $("confirmOk").onclick = null;
      $("confirmCancel").onclick = null;
      resolve(val);
    };
    $("confirmOk").onclick = () => done(true);
    $("confirmCancel").onclick = () => done(false);
  });
}

function openModal(html) { $("modalBody").innerHTML = html; $("adminModal").classList.add("show"); }
function closeModal() { $("adminModal").classList.remove("show"); }
$("modalClose").addEventListener("click", closeModal);
$("adminModal").addEventListener("click", e => { if (e.target === $("adminModal")) closeModal(); });

function renderView(view) {
  const titles = {
    dashboard: "Dashboard", universities: "Manage Universities", colleges: "Manage Colleges",
    courses: "Manage Courses", announcements: "Announcements", featured: "Featured Content",
    settings: "Website Settings", profile: "Admin Profile"
  };
  viewTitle.textContent = titles[view] || "Admin";
  const renderers = {
    dashboard: renderDashboard, universities: () => renderInstitutions("universities"),
    colleges: () => renderInstitutions("colleges"), courses: renderCourses,
    announcements: renderAnnouncements, featured: renderFeatured,
    settings: renderSettings, profile: renderProfile
  };
  (renderers[view] || renderDashboard)();
}

function renderDashboard() {
  const u = cache.universities, c = cache.colleges, a = cache.announcements;
  const all = [...u, ...c];
  const open     = all.filter(i => i.applicationStatus === "open").length;
  const closing  = all.filter(i => i.applicationStatus === "closing-soon").length;
  const closed   = all.filter(i => i.applicationStatus === "closed").length;
  const activeA  = a.filter(x => x.active !== false).length;
  const featured = all.filter(i => i.featured).length;
  const recent   = all.filter(i => i.lastUpdated)
    .sort((x,y) => (y.lastUpdated?.seconds||0) - (x.lastUpdated?.seconds||0)).slice(0, 6);

  viewRoot.innerHTML = `
    <div class="stat-grid">
      <div class="stat-card"><div class="num">${u.length}</div><div class="lbl"><i class="fas fa-university"></i> Universities</div></div>
      <div class="stat-card"><div class="num">${c.length}</div><div class="lbl"><i class="fas fa-school"></i> Colleges</div></div>
      <div class="stat-card green"><div class="num">${open}</div><div class="lbl">🟢 Applications Open</div></div>
      <div class="stat-card amber"><div class="num">${closing}</div><div class="lbl">🟠 Closing Soon</div></div>
      <div class="stat-card red"><div class="num">${closed}</div><div class="lbl">🔴 Closed</div></div>
      <div class="stat-card blue"><div class="num">${activeA}</div><div class="lbl"><i class="fas fa-bullhorn"></i> Active Announcements</div></div>
      <div class="stat-card"><div class="num">${featured}</div><div class="lbl"><i class="fas fa-star"></i> Featured Institutions</div></div>
      <div class="stat-card"><div class="num">${cache.courses.length}</div><div class="lbl"><i class="fas fa-graduation-cap"></i> Courses</div></div>
    </div>
    <div class="card">
      <h3 style="margin-bottom:14px;"><i class="fas fa-clock-rotate-left" style="color:var(--gold-dark);"></i> Recently Updated Institutions</h3>
      ${recent.length === 0 ? `<p style="color:var(--gray-500);">No recent updates yet.</p>` :
        recent.map(i => `
          <div style="display:flex;justify-content:space-between;align-items:center;padding:10px 0;border-bottom:1px solid var(--gray-100);">
            <div><strong>${escapeHTML(i.name || i.abbreviation || "Unnamed")}</strong>
              <div style="font-size:.75rem;color:var(--gray-500);">${i.province || ""} · Status: ${STATUS_MAP[i.applicationStatus] || "—"}</div></div>
            <div style="font-size:.75rem;color:var(--gray-500);">${i.lastUpdated ? "Last updated " + formatDate(i.lastUpdated) : ""}</div>
          </div>`).join("")}
    </div>`;
}

function formatDate(ts) {
  const d = ts.seconds ? new Date(ts.seconds * 1000) : new Date(ts);
  return d.toLocaleDateString("en-ZA", { day: "2-digit", month: "long", year: "numeric" });
}

function renderInstitutions(kind) {
  const data = cache[kind];
  const label = kind === "universities" ? "University" : "College";

  viewRoot.innerHTML = `
    <div class="toolbar">
      <input id="searchInput" placeholder="Search by name or province…" />
      <select id="statusFilter">
        <option value="">All Statuses</option>
        ${STATUS_OPTIONS.map(s => `<option value="${s.v}">${s.l}</option>`).join("")}
      </select>
      <div class="spacer"></div>
      <button class="btn btn-primary" id="addBtn"><i class="fas fa-plus"></i> Add ${label}</button>
    </div>
    <div class="card" style="padding:0;overflow:hidden;">
      <table class="data-table">
        <thead><tr><th>Name</th><th>Province</th><th>Status</th><th>Featured</th><th>Last Updated</th><th style="width:130px;">Actions</th></tr></thead>
        <tbody id="tbody"></tbody>
      </table>
    </div>`;

  const tbody = $("tbody");
  const draw = () => {
    const q = $("searchInput").value.toLowerCase().trim();
    const s = $("statusFilter").value;
    const rows = data.filter(i => {
      const hay = `${i.name||""} ${i.abbreviation||""} ${i.province||""}`.toLowerCase();
      return (!q || hay.includes(q)) && (!s || i.applicationStatus === s);
    });
    tbody.innerHTML = rows.length === 0
      ? `<tr><td colspan="6" style="text-align:center;padding:30px;color:var(--gray-500);">No records found.</td></tr>`
      : rows.map(i => `
        <tr>
          <td><strong>${escapeHTML(i.name||i.abbreviation||"Untitled")}</strong>
            <div style="font-size:.72rem;color:var(--gray-500);">${escapeHTML(i.abbreviation||"")}</div></td>
          <td>${escapeHTML(i.province||"—")}</td>
          <td><span class="pill ${statusClass(i.applicationStatus)}">${STATUS_MAP[i.applicationStatus] || "—"}</span></td>
          <td>${i.featured ? `<span class="pill featured"><i class="fas fa-star"></i> Featured</span>` : "—"}</td>
          <td style="font-size:.72rem;color:var(--gray-500);">${i.lastUpdated ? formatDate(i.lastUpdated) : "—"}</td>
          <td class="actions">
            <button class="btn-icon" data-edit="${i._id}" title="Edit"><i class="fas fa-pen"></i></button>
            <button class="btn-icon danger" data-del="${i._id}" title="Delete"><i class="fas fa-trash"></i></button>
          </td>
        </tr>`).join("");
    tbody.querySelectorAll("[data-edit]").forEach(b => b.onclick = () => editInstitution(kind, b.dataset.edit));
    tbody.querySelectorAll("[data-del]").forEach(b => b.onclick = () => deleteInstitution(kind, b.dataset.del));
  };
  $("searchInput").addEventListener("input", draw);
  $("statusFilter").addEventListener("change", draw);
  $("addBtn").addEventListener("click", () => editInstitution(kind, null));
  draw();
}

function statusClass(s) {
  return { open:"open","closing-soon":"closing",closed:"closed","not-yet-open":"notopen","coming-soon":"coming" }[s] || "notopen";
}

function editInstitution(kind, id) {
  const isNew = !id;
  const data = isNew ? {} : cache[kind].find(i => i._id === id);
  const label = kind === "universities" ? "University" : "College";

  openModal(`
    <h2 style="margin-bottom:16px;">${isNew ? "Add" : "Edit"} ${label}</h2>
    <form id="instForm" class="form-grid">
      <div class="field"><label>Name *</label><input name="name" required value="${escapeAttr(data.name||"")}" /></div>
      <div class="field"><label>Abbreviation</label><input name="abbreviation" value="${escapeAttr(data.abbreviation||"")}" /></div>
      <div class="field"><label>Type</label>
        <select name="type">
          <option ${data.type==="University"?"selected":""}>University</option>
          <option ${data.type==="University of Technology"?"selected":""}>University of Technology</option>
          <option ${data.type==="College"?"selected":""}>College</option>
          <option ${data.type==="TVET College"?"selected":""}>TVET College</option>
          <option ${data.type==="Private College"?"selected":""}>Private College</option>
        </select>
      </div>
      <div class="field"><label>Province</label>
        <select name="province">
          ${["Eastern Cape","Free State","Gauteng","KwaZulu-Natal","Limpopo","Mpumalanga","Northern Cape","North West","Western Cape"]
            .map(p => `<option ${data.province===p?"selected":""}>${p}</option>`).join("")}
        </select>
      </div>
      <div class="field"><label>City</label><input name="city" value="${escapeAttr(data.city||"")}" /></div>
      <div class="field"><label>Logo URL</label><input name="logo" value="${escapeAttr(data.logo||"")}" /></div>
      <div class="field full"><label>Description</label><textarea name="description">${escapeHTML(data.description||"")}</textarea></div>
      <div class="field"><label>Website URL</label><input name="websiteUrl" value="${escapeAttr(data.websiteUrl||"")}" /></div>
      <div class="field"><label>Application URL</label><input name="applicationUrl" value="${escapeAttr(data.applicationUrl||"")}" /></div>
      <div class="field"><label>Prospectus URL</label><input name="prospectusUrl" value="${escapeAttr(data.prospectusUrl||"")}" /></div>
      <div class="field"><label>Application Fee</label><input name="applicationFee" value="${escapeAttr(data.applicationFee||"")}" placeholder="e.g. R100" /></div>
      <div class="field"><label>Application Status</label>
        <select name="applicationStatus">
          ${STATUS_OPTIONS.map(s => `<option value="${s.v}" ${data.applicationStatus===s.v?"selected":""}>${s.l}</option>`).join("")}
        </select>
        <div class="hint">This is what appears on the public website.</div>
      </div>
      <div class="field"><label>Featured</label>
        <label class="checkbox-line"><input type="checkbox" name="featured" ${data.featured?"checked":""}/> Mark as featured</label>
      </div>
      <div class="field"><label>Application Opening Date</label>
        <input name="applicationOpeningDate" value="${escapeAttr(data.applicationOpeningDate||"")}" placeholder="e.g. 01 September 2026" />
      </div>
      <div class="field"><label>Application Closing Date</label>
        <input name="applicationClosingDate" value="${escapeAttr(data.applicationClosingDate||"")}" placeholder="e.g. 30 September 2026" />
      </div>
      <div class="field full"><label>Minimum Requirements</label>
        <textarea name="minimumRequirements">${escapeHTML(data.minimumRequirements||"")}</textarea>
      </div>
      <div class="field full" style="display:flex;gap:10px;justify-content:flex-end;margin-top:8px;">
        <button type="button" class="btn btn-ghost" id="cancelBtn">Cancel</button>
        <button type="submit" class="btn btn-primary"><i class="fas fa-floppy-disk"></i> Save Changes</button>
      </div>
    </form>
  `);

  $("cancelBtn").onclick = closeModal;
  $("instForm").addEventListener("submit", async (e) => {
    e.preventDefault();
    const fd = new FormData(e.target);
    const payload = {
      name: fd.get("name"), abbreviation: fd.get("abbreviation"), type: fd.get("type"),
      province: fd.get("province"), city: fd.get("city"), logo: fd.get("logo"),
      description: fd.get("description"), websiteUrl: fd.get("websiteUrl"),
      applicationUrl: fd.get("applicationUrl"), prospectusUrl: fd.get("prospectusUrl"),
      applicationFee: fd.get("applicationFee"), applicationStatus: fd.get("applicationStatus"),
      featured: fd.get("featured") === "on",
      applicationOpeningDate: fd.get("applicationOpeningDate"),
      applicationClosingDate: fd.get("applicationClosingDate"),
      minimumRequirements: fd.get("minimumRequirements"),
      lastUpdated: serverTimestamp(), updatedBy: currentAdmin.uid
    };
    try {
      if (isNew) { await addDoc(collection(db, kind), { ...payload, createdAt: serverTimestamp() }); toast(`${label} added`); }
      else { await updateDoc(doc(db, kind, id), payload); toast(`${label} updated`); }
      closeModal(); await refreshAll(); renderInstitutions(kind);
    } catch (err) { toast("Error: " + err.message); }
  });
}

async function deleteInstitution(kind, id) {
  const label = kind === "universities" ? "university" : "college";
  const ok = await confirmDialog(`Delete ${label}?`, `This will permanently remove the ${label} from Firestore and the public site.`);
  if (!ok) return;
  try { await deleteDoc(doc(db, kind, id)); toast(`${label} deleted`); await refreshAll(); renderInstitutions(kind); }
  catch (err) { toast("Error: " + err.message); }
}

function renderCourses() {
  viewRoot.innerHTML = `
    <div class="toolbar">
      <input id="searchInput" placeholder="Search courses…" />
      <div class="spacer"></div>
      <button class="btn btn-primary" id="addBtn"><i class="fas fa-plus"></i> Add Course</button>
    </div>
    <div class="card" style="padding:0;overflow:hidden;">
      <table class="data-table">
        <thead><tr><th>Course</th><th>Institution</th><th>Faculty</th><th>Duration</th><th style="width:130px;">Actions</th></tr></thead>
        <tbody id="tbody"></tbody>
      </table>
    </div>`;
  const draw = () => {
    const q = $("searchInput").value.toLowerCase().trim();
    const rows = cache.courses.filter(c => !q || `${c.name||""} ${c.institutionName||""} ${c.faculty||""}`.toLowerCase().includes(q));
    $("tbody").innerHTML = rows.length === 0
      ? `<tr><td colspan="5" style="text-align:center;padding:30px;color:var(--gray-500);">No courses yet.</td></tr>`
      : rows.map(c => `
        <tr>
          <td><strong>${escapeHTML(c.name||"")}</strong></td>
          <td>${escapeHTML(c.institutionName||"")}</td>
          <td>${escapeHTML(c.faculty||"—")}</td>
          <td>${escapeHTML(c.duration||"—")}</td>
          <td class="actions">
            <button class="btn-icon" data-edit="${c._id}"><i class="fas fa-pen"></i></button>
            <button class="btn-icon danger" data-del="${c._id}"><i class="fas fa-trash"></i></button>
          </td>
        </tr>`).join("");
    $("tbody").querySelectorAll("[data-edit]").forEach(b => b.onclick = () => editCourse(b.dataset.edit));
    $("tbody").querySelectorAll("[data-del]").forEach(b => b.onclick = () => deleteCourse(b.dataset.del));
  };
  $("searchInput").addEventListener("input", draw);
  $("addBtn").addEventListener("click", () => editCourse(null));
  draw();
}

function editCourse(id) {
  const isNew = !id;
  const data = isNew ? {} : cache.courses.find(c => c._id === id);
  const institutionOpts = [...cache.universities, ...cache.colleges]
    .map(i => `<option value="${i._id}" ${data.institutionId===i._id?"selected":""}>${escapeHTML(i.name||"")}</option>`).join("");
  openModal(`
    <h2 style="margin-bottom:16px;">${isNew?"Add":"Edit"} Course</h2>
    <form id="courseForm" class="form-grid">
      <div class="field full"><label>Course Name *</label><input name="name" required value="${escapeAttr(data.name||"")}" /></div>
      <div class="field"><label>Institution</label><select name="institutionId">${institutionOpts}</select></div>
      <div class="field"><label>Faculty</label><input name="faculty" value="${escapeAttr(data.faculty||"")}" /></div>
      <div class="field"><label>Duration</label><input name="duration" value="${escapeAttr(data.duration||"")}" placeholder="e.g. 3 years" /></div>
      <div class="field"><label>APS Requirement</label><input name="aps" value="${escapeAttr(data.aps||"")}" /></div>
      <div class="field full"><label>Requirements</label><textarea name="requirements">${escapeHTML(data.requirements||"")}</textarea></div>
      <div class="field full" style="display:flex;gap:10px;justify-content:flex-end;">
        <button type="button" class="btn btn-ghost" id="cancelBtn">Cancel</button>
        <button type="submit" class="btn btn-primary"><i class="fas fa-floppy-disk"></i> Save</button>
      </div>
    </form>`);
  $("cancelBtn").onclick = closeModal;
  $("courseForm").addEventListener("submit", async (e) => {
    e.preventDefault();
    const fd = new FormData(e.target);
    const instId = fd.get("institutionId");
    const inst = [...cache.universities, ...cache.colleges].find(i => i._id === instId);
    const payload = { name: fd.get("name"), institutionId: instId, institutionName: inst ? inst.name : "",
      faculty: fd.get("faculty"), duration: fd.get("duration"), aps: fd.get("aps"),
      requirements: fd.get("requirements"), lastUpdated: serverTimestamp() };
    try {
      if (isNew) await addDoc(collection(db, "courses"), { ...payload, createdAt: serverTimestamp() });
      else await updateDoc(doc(db, "courses", id), payload);
      toast("Course saved"); closeModal(); await refreshAll(); renderCourses();
    } catch (err) { toast("Error: " + err.message); }
  });
}

async function deleteCourse(id) {
  if (!await confirmDialog("Delete course?", "This will remove the course permanently.")) return;
  await deleteDoc(doc(db, "courses", id));
  toast("Course deleted"); await refreshAll(); renderCourses();
}

function renderAnnouncements() {
  viewRoot.innerHTML = `
    <div class="toolbar"><div class="spacer"></div><button class="btn btn-primary" id="addBtn"><i class="fas fa-plus"></i> New Announcement</button></div>
    <div class="card" style="padding:0;overflow:hidden;">
      <table class="data-table">
        <thead><tr><th>Title</th><th>Date</th><th>Status</th><th>Featured</th><th style="width:130px;">Actions</th></tr></thead>
        <tbody id="tbody"></tbody>
      </table>
    </div>`;
  const draw = () => {
    $("tbody").innerHTML = cache.announcements.length === 0
      ? `<tr><td colspan="5" style="text-align:center;padding:30px;color:var(--gray-500);">No announcements yet.</td></tr>`
      : cache.announcements.map(a => `
        <tr>
          <td><strong>${escapeHTML(a.title||"")}</strong>
            <div style="font-size:.72rem;color:var(--gray-500);">${escapeHTML((a.description||"").slice(0,80))}…</div></td>
          <td>${escapeHTML(a.date||"—")}</td>
          <td>${a.active!==false ? `<span class="pill open">Active</span>` : `<span class="pill notopen">Inactive</span>`}</td>
          <td>${a.featured ? `<span class="pill featured"><i class="fas fa-star"></i></span>` : "—"}</td>
          <td class="actions">
            <button class="btn-icon" data-edit="${a._id}"><i class="fas fa-pen"></i></button>
            <button class="btn-icon danger" data-del="${a._id}"><i class="fas fa-trash"></i></button>
          </td>
        </tr>`).join("");
    $("tbody").querySelectorAll("[data-edit]").forEach(b => b.onclick = () => editAnnouncement(b.dataset.edit));
    $("tbody").querySelectorAll("[data-del]").forEach(b => b.onclick = () => deleteAnnouncement(b.dataset.del));
  };
  $("addBtn").addEventListener("click", () => editAnnouncement(null));
  draw();
}

function editAnnouncement(id) {
  const isNew = !id;
  const data = isNew ? {} : cache.announcements.find(a => a._id === id);
  openModal(`
    <h2 style="margin-bottom:16px;">${isNew?"New":"Edit"} Announcement</h2>
    <form id="annForm" class="form-grid">
      <div class="field full"><label>Title *</label><input name="title" required value="${escapeAttr(data.title||"")}" /></div>
      <div class="field full"><label>Description</label><textarea name="description">${escapeHTML(data.description||"")}</textarea></div>
      <div class="field"><label>Date</label><input name="date" value="${escapeAttr(data.date||"")}" placeholder="e.g. 21 September 2026" /></div>
      <div class="field"><label>Expiry Date</label><input name="expiryDate" value="${escapeAttr(data.expiryDate||"")}" /></div>
      <div class="field"><label>Active</label>
        <label class="checkbox-line"><input type="checkbox" name="active" ${data.active!==false?"checked":""}/> Show on public site</label>
      </div>
      <div class="field"><label>Featured</label>
        <label class="checkbox-line"><input type="checkbox" name="featured" ${data.featured?"checked":""}/> Highlight this</label>
      </div>
      <div class="field full" style="display:flex;gap:10px;justify-content:flex-end;">
        <button type="button" class="btn btn-ghost" id="cancelBtn">Cancel</button>
        <button type="submit" class="btn btn-primary"><i class="fas fa-floppy-disk"></i> Save</button>
      </div>
    </form>`);
  $("cancelBtn").onclick = closeModal;
  $("annForm").addEventListener("submit", async (e) => {
    e.preventDefault();
    const fd = new FormData(e.target);
    const payload = { title: fd.get("title"), description: fd.get("description"),
      date: fd.get("date"), expiryDate: fd.get("expiryDate"),
      active: fd.get("active") === "on", featured: fd.get("featured") === "on",
      lastUpdated: serverTimestamp() };
    try {
      if (isNew) await addDoc(collection(db, "announcements"), { ...payload, createdAt: serverTimestamp() });
      else await updateDoc(doc(db, "announcements", id), payload);
      toast("Announcement saved"); closeModal(); await refreshAll(); renderAnnouncements();
    } catch (err) { toast("Error: " + err.message); }
  });
}

async function deleteAnnouncement(id) {
  if (!await confirmDialog("Delete announcement?", "This will remove it from the public site.")) return;
  await deleteDoc(doc(db, "announcements", id));
  toast("Announcement deleted"); await refreshAll(); renderAnnouncements();
}

function renderFeatured() {
  const featured = [...cache.universities, ...cache.colleges].filter(i => i.featured);
  viewRoot.innerHTML = `
    <div class="card">
      <h3 style="margin-bottom:14px;"><i class="fas fa-star" style="color:var(--gold-dark);"></i> Featured Institutions</h3>
      ${featured.length === 0 ? `<p style="color:var(--gray-500);">No featured institutions. Edit a university or college and tick "Featured".</p>` :
        featured.map(i => `
          <div style="display:flex;justify-content:space-between;padding:10px 0;border-bottom:1px solid var(--gray-100);">
            <div><strong>${escapeHTML(i.name||"")}</strong>
              <div style="font-size:.75rem;color:var(--gray-500);">${escapeHTML(i.province||"")}</div></div>
            <button class="btn btn-ghost" data-unfeature="${i._id}" data-kind="${cache.universities.includes(i)?"universities":"colleges"}">
              <i class="fas fa-star-half-stroke"></i> Unfeature
            </button>
          </div>`).join("")}
    </div>`;
  viewRoot.querySelectorAll("[data-unfeature]").forEach(b => b.onclick = async () => {
    await updateDoc(doc(db, b.dataset.kind, b.dataset.unfeature), { featured: false, lastUpdated: serverTimestamp() });
    toast("Removed from featured"); await refreshAll(); renderFeatured();
  });
}

function renderSettings() {
  const s = cache.settings || {};
  viewRoot.innerHTML = `
    <div class="card">
      <h3 style="margin-bottom:16px;"><i class="fas fa-sliders"></i> Global Website Settings</h3>
      <form id="settingsForm" class="form-grid">
        <div class="field full"><label>Website Announcement</label><input name="websiteAnnouncement" value="${escapeAttr(s.websiteAnnouncement||"")}" /></div>
        <div class="field full"><label>Homepage Featured Message</label><textarea name="homepageMessage">${escapeHTML(s.homepageMessage||"")}</textarea></div>
        <div class="field"><label>Contact Email</label><input name="contactEmail" value="${escapeAttr(s.contactEmail||"")}" /></div>
        <div class="field"><label>Current Application Cycle</label><input name="currentCycle" value="${escapeAttr(s.currentCycle||"")}" placeholder="e.g. 2027 Applications" /></div>
        <div class="field"><label>TikTok</label><input name="tiktok" value="${escapeAttr(s.tiktok||"")}" /></div>
        <div class="field"><label>Instagram</label><input name="instagram" value="${escapeAttr(s.instagram||"")}" /></div>
        <div class="field"><label>Facebook</label><input name="facebook" value="${escapeAttr(s.facebook||"")}" /></div>
        <div class="field"><label>X / Twitter</label><input name="twitter" value="${escapeAttr(s.twitter||"")}" /></div>
        <div class="field full"><label>Important Notice</label><textarea name="importantNotice">${escapeHTML(s.importantNotice||"")}</textarea></div>
        <div class="field full" style="display:flex;justify-content:flex-end;">
          <button type="submit" class="btn btn-primary"><i class="fas fa-floppy-disk"></i> Save Settings</button>
        </div>
      </form>
    </div>`;
  $("settingsForm").addEventListener("submit", async (e) => {
    e.preventDefault();
    const fd = new FormData(e.target);
    const payload = Object.fromEntries(fd.entries());
    payload.lastUpdated = serverTimestamp();
    payload.updatedBy = currentAdmin.uid;
    try {
      const ref = doc(db, "settings", "global");
      const existing = await getDoc(ref);
      if (existing.exists()) await updateDoc(ref, payload);
      else await addDoc(collection(db, "settings"), { ...payload, docId: "global" });
      toast("Settings saved"); await refreshAll();
    } catch (err) { toast("Error: " + err.message); }
  });
}

function renderProfile() {
  viewRoot.innerHTML = `
    <div class="card">
      <h3 style="margin-bottom:8px;"><i class="fas fa-user-shield" style="color:var(--gold-dark);"></i> Admin Profile</h3>
      <p style="color:var(--gray-500);font-size:.85rem;">Signed in as an authorised MyTertiary ZA administrator.</p>
      <div style="margin-top:16px;display:grid;grid-template-columns:1fr 1fr;gap:14px;">
        <div><label style="font-size:.72rem;font-weight:800;color:var(--gray-500);">EMAIL</label>
          <div style="font-weight:600;">${escapeHTML(currentAdmin.email||"—")}</div></div>
        <div><label style="font-size:.72rem;font-weight:800;color:var(--gray-500);">UID</label>
          <div style="font-weight:600;font-size:.75rem;word-break:break-all;">${currentAdmin.uid}</div></div>
        <div><label style="font-size:.72rem;font-weight:800;color:var(--gray-500);">NAME</label>
          <div style="font-weight:600;">${escapeHTML(currentAdmin.name||"—")}</div></div>
        <div><label style="font-size:.72rem;font-weight:800;color:var(--gray-500);">ROLE</label>
          <div style="font-weight:600;">${escapeHTML(currentAdmin.role||"admin")}</div></div>
      </div>
    </div>`;
}

function escapeHTML(s) { return String(s||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;"); }
function escapeAttr(s) { return escapeHTML(s); }