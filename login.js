import { auth, db } from "./firebase-config.js";
import {
  signInWithEmailAndPassword, onAuthStateChanged, signOut
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { doc, getDoc } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const $ = id => document.getElementById(id);
const msg = $("msg");
const form = $("loginForm");
const btn = $("loginBtn");

function setMsg(text, ok = false) {
  msg.textContent = text;
  msg.className = "msg " + (ok ? "ok" : "error");
}

onAuthStateChanged(auth, async (user) => {
  if (!user) return;
  const snap = await getDoc(doc(db, "admins", user.uid));
  if (snap.exists()) window.location.href = "admin.html";
});

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  btn.disabled = true;
  btn.innerHTML = `<i class="fas fa-spinner fa-spin"></i> Signing in…`;
  msg.className = "msg";
  try {
    const cred = await signInWithEmailAndPassword(auth, $("email").value.trim(), $("password").value);
    const adminDoc = await getDoc(doc(db, "admins", cred.user.uid));
    if (!adminDoc.exists()) {
      await signOut(auth);
      setMsg("Access denied. This account is not an authorised administrator.");
      return;
    }
    setMsg("Access granted. Redirecting…", true);
    setTimeout(() => window.location.href = "admin.html", 400);
  } catch (err) {
    const friendly = {
      "auth/invalid-credential": "Incorrect email or password.",
      "auth/user-not-found":     "No account found with this email.",
      "auth/wrong-password":     "Incorrect password.",
      "auth/too-many-requests":  "Too many attempts. Try again later.",
      "auth/invalid-email":      "Please enter a valid email."
    }[err.code] || err.message;
    setMsg(friendly);
  } finally {
    btn.disabled = false;
    btn.innerHTML = `<i class="fas fa-right-to-bracket"></i> Sign In`;
  }
});