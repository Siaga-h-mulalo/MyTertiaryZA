// student-auth-bridge.js
// Bridges Firebase Auth state into window.MyTertiaryAuth.
// Guests can browse the public site freely.
// Gated interactions (Save / Compare / Dashboard) show a sign-in prompt.

import { auth, db } from "./firebase-config.js";
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { doc, getDoc } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";
import { loginStudent, logoutStudent } from "./auth-service.js";

window.MyTertiaryAuth = {
  user: null,
  profile: null,
  loginStudent,
  logoutStudent,

  isSignedIn() { return !!auth.currentUser; },

  goToLogin() {
    const here = window.location.pathname + window.location.search;
    sessionStorage.setItem("mytertiary_returnTo", here);
    window.location.href = "student-login.html";
  },

  showSignInPrompt() {
    const modal = document.getElementById("signInPromptModal");
    if (modal) {
      modal.classList.add("show");
      modal.setAttribute("aria-hidden", "false");
    } else {
      // Fallback if the modal isn't present on this page
      this.goToLogin();
    }
  },

  hideSignInPrompt() {
    const modal = document.getElementById("signInPromptModal");
    if (modal) {
      modal.classList.remove("show");
      modal.setAttribute("aria-hidden", "true");
    }
  }
};

function revealSite() {
  document.body.classList.add("auth-ready");
  const overlay = document.getElementById("authLoadingOverlay");
  if (overlay) {
    overlay.classList.add("hide");
    setTimeout(() => overlay.remove(), 300);
  }
}

onAuthStateChanged(auth, async (user) => {
  window.MyTertiaryAuth.user = user || null;

  if (user) {
    try {
      const snap = await getDoc(doc(db, "users", user.uid));
      window.MyTertiaryAuth.profile = snap.exists() ? { uid: user.uid, ...snap.data() } : null;
    } catch {
      window.MyTertiaryAuth.profile = null;
    }
  } else {
    window.MyTertiaryAuth.profile = null;
  }

  /* ---------- Top-bar sign-in / sign-out button ---------- */
  const btn = document.getElementById("studentAuthBtn");
  if (btn) {
    if (user) {
      btn.title = "Sign out";
      btn.setAttribute("aria-label", "Sign out");
      btn.setAttribute("href", "#");
      btn.onclick = (e) => { e.preventDefault(); logoutStudent(); };
      btn.innerHTML = `<i class="fas fa-right-from-bracket"></i>`;
    } else {
      btn.title = "Sign in";
      btn.setAttribute("aria-label", "Sign in");
      btn.setAttribute("href", "student-login.html");
      btn.onclick = null;
      btn.innerHTML = `<i class="fas fa-user"></i>`;
    }
  }

  // Body state classes (useful for styling guests vs members)
  document.body.classList.toggle("is-signed-in", !!user);
  document.body.classList.toggle("is-guest", !user);

  wirePromptModal();
  revealSite();

  window.dispatchEvent(new CustomEvent("mytertiary:auth-changed", {
    detail: { user, profile: window.MyTertiaryAuth.profile }
  }));
});

/* ============================================================
   GATED INTERACTIONS
   Guests are blocked from: Save, Compare, Dashboard, My Applications.
   Uses capture-phase so it runs BEFORE script.js's own handlers.
   ============================================================ */
const GATED_SELECTOR = [
  ".save-btn",
  ".compare-btn",
  "#dashboardIconBtn",
  "#dashboardSidebarLink",
  "#compareSidebarLink",
  "#mobileDashboardBtn",
  "#mobileCompareBtn",
  "#myApplicationsLink"
].join(",");

document.addEventListener("click", (e) => {
  if (window.MyTertiaryAuth?.user) return;    // signed in → let it through
  const gated = e.target.closest(GATED_SELECTOR);
  if (!gated) return;
  e.preventDefault();
  e.stopImmediatePropagation();
  window.MyTertiaryAuth.showSignInPrompt();
}, true /* capture phase */);

/* ============================================================
   SIGN-IN PROMPT MODAL — wire its buttons once DOM is ready
   ============================================================ */
function wirePromptModal() {
  const modal = document.getElementById("signInPromptModal");
  if (!modal || modal.dataset.wired === "1") return;
  modal.dataset.wired = "1";

  const closeEls = modal.querySelectorAll("[data-prompt-close]");
  const signInBtn = modal.querySelector("[data-prompt-signin]");

  closeEls.forEach(el => el.addEventListener("click", () => window.MyTertiaryAuth.hideSignInPrompt()));
  signInBtn?.addEventListener("click", () => window.MyTertiaryAuth.goToLogin());

  modal.addEventListener("click", (e) => {
    if (e.target === modal) window.MyTertiaryAuth.hideSignInPrompt();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("show")) window.MyTertiaryAuth.hideSignInPrompt();
  });
}

wirePromptModal();