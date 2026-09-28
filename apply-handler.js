// apply-handler.js
// Intercepts "Apply Now" clicks on university cards / modals.
//  - Not signed in  → stash the intent and redirect to student-login.html
//  - Signed in      → log an application event, then open the official URL
// Does NOT modify university URLs, does NOT invent affiliate data.

import { recordApplicationEvent } from "./user-service.js";

const PENDING_KEY = "mytertiary_pendingApply";

// Only intercept Apply buttons that live inside university-related UI
// (cards, detail modal, qualification modal, compare modal).
// This deliberately excludes the NSFAS / student-services buttons.
const APPLY_SELECTOR = [
  ".institution-card .btn-apply[href^='http']",
  "#modalContent .btn-apply[href^='http']",
  "#qualModalContent .btn-apply[href^='http']",
  ".compare-table .btn-apply[href^='http']"
].join(",");

function findUniversityForLink(link) {
  // 1) Preferred — the card carries data-id
  const card = link.closest(".institution-card");
  const cardId = card?.dataset.id;
  const list = window.MyTertiaryInstitutions || [];
  if (cardId) {
    const byId = list.find(u => String(u.id) === String(cardId));
    if (byId) return byId;
  }
  // 2) Fallback — match the href against known URLs
  const href = link.getAttribute("href") || "";
  return list.find(u => u.appUrl === href || u.website === href) || null;
}

function stashPending(university, url) {
  sessionStorage.setItem(PENDING_KEY, JSON.stringify({
    universityId:   university?._id || university?.id || "",
    universityName: university?.name || "",
    url
  }));
}

async function logEvent(user, university) {
  if (!user || !university) return;
  try {
    await recordApplicationEvent(user.uid, university);
  } catch (err) {
    // Never block the student from applying just because logging failed.
    console.warn("[MyTertiary] Could not record application event:", err);
  }
}

export function initApplyHandler() {
  // ---- 1. Intercept clicks ----
  document.addEventListener("click", async (event) => {
    const link = event.target.closest(APPLY_SELECTOR);
    if (!link) return;

    const url = link.getAttribute("href");
    if (!url || !/^https?:\/\//i.test(url)) return; // safety guard

    const university = findUniversityForLink(link);
    const user = window.MyTertiaryAuth?.user;

    // Not signed in → remember and redirect
    if (!user) {
      event.preventDefault();
      stashPending(university, url);
      window.location.href = "student-login.html";
      return;
    }

    // Signed in → log first, then open
    event.preventDefault();
    await logEvent(user, university);
    window.open(url, "_blank", "noopener,noreferrer");
  });

  // ---- 2. Resume a pending apply after login ----
  const pendingRaw = sessionStorage.getItem(PENDING_KEY);
  if (!pendingRaw) return;

  const consumePending = async () => {
    const user = window.MyTertiaryAuth?.user;
    if (!user) return;                       // still not signed in — wait
    window.removeEventListener("mytertiary:auth-changed", onAuth);
    sessionStorage.removeItem(PENDING_KEY);

    let pending = null;
    try { pending = JSON.parse(pendingRaw); } catch { return; }
    if (!pending?.url) return;

    const university = (window.MyTertiaryInstitutions || []).find(u =>
      u._id === pending.universityId || String(u.id) === String(pending.universityId)
    );

    await logEvent(user, university);
    window.open(pending.url, "_blank", "noopener,noreferrer");
  };

  const onAuth = () => { if (window.MyTertiaryAuth?.user) consumePending(); };

  // If the bridge already resolved auth before this script ran…
  if (window.MyTertiaryAuth?.user) consumePending();
  // …otherwise listen for the first signed-in state.
  window.addEventListener("mytertiary:auth-changed", onAuth);

  // Kick it off.
  initApplyHandler._consumedPending = true;
}

initApplyHandler();