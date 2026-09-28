// student-login.js
import { registerStudent, loginStudent, watchAuth, getCurrentStudentProfile }
  from "./auth-service.js";

const $ = (id) => document.getElementById(id);

/* ----- Tab switching ----- */
document.querySelectorAll(".tab").forEach(tab => {
  tab.addEventListener("click", () => {
    document.querySelectorAll(".tab").forEach(t => t.classList.toggle("active", t === tab));
    document.querySelectorAll(".pane").forEach(p =>
      p.classList.toggle("active", p.dataset.pane === tab.dataset.pane));
  });
});

function showMsg(el, text, ok = false) {
  el.textContent = text;
  el.className = "msg " + (ok ? "ok" : "error");
}

function goToReturnTo(fallback = "index.html") {
  const returnTo = sessionStorage.getItem("mytertiary_returnTo") || fallback;
  sessionStorage.removeItem("mytertiary_returnTo");
  window.location.href = returnTo;
}

/* ----- If already signed in, redirect back to where they came from ----- */
watchAuth(async (user) => {
  if (!user) return;
  const profile = await getCurrentStudentProfile();
  if (profile) goToReturnTo("index.html");
});

/* ----- Sign In ----- */
$("loginForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  const btn = e.target.querySelector("button[type=submit]");
  btn.disabled = true;
  btn.innerHTML = `<i class="fas fa-spinner fa-spin"></i> Signing in…`;
  try {
    await loginStudent($("loginEmail").value, $("loginPassword").value);
    showMsg($("loginMsg"), "Signed in. Redirecting…", true);
    setTimeout(() => goToReturnTo("index.html"), 500);
  } catch (err) {
    showMsg($("loginMsg"), friendlyAuthError(err));
  } finally {
    btn.disabled = false;
    btn.innerHTML = `<i class="fas fa-right-to-bracket"></i> Sign In`;
  }
});

/* ----- Register ----- */
$("registerForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  const btn = e.target.querySelector("button[type=submit]");
  btn.disabled = true;
  btn.innerHTML = `<i class="fas fa-spinner fa-spin"></i> Creating…`;
  try {
    await registerStudent({
      firstName: $("regFirstName").value,
      lastName:  $("regLastName").value,
      email:     $("regEmail").value,
      password:  $("regPassword").value
    });
    showMsg($("registerMsg"), "Account created. Redirecting…", true);
    setTimeout(() => goToReturnTo("index.html"), 600);
  } catch (err) {
    showMsg($("registerMsg"), friendlyAuthError(err));
  } finally {
    btn.disabled = false;
    btn.innerHTML = `<i class="fas fa-user-plus"></i> Create Account`;
  }
});

function friendlyAuthError(err) {
  const map = {
    "auth/email-already-in-use":   "That email is already registered. Try signing in instead.",
    "auth/invalid-email":          "Please enter a valid email address.",
    "auth/weak-password":          "Password must be at least 6 characters.",
    "auth/invalid-credential":     "Incorrect email or password.",
    "auth/user-not-found":         "No account found with this email.",
    "auth/wrong-password":         "Incorrect password.",
    "auth/too-many-requests":      "Too many attempts. Please try again later.",
    "auth/network-request-failed": "Network error. Check your connection."
  };
  return map[err.code] || err.message;
}