// auth-service.js
// Modular student authentication service for MyTertiary ZA.
// Reuses the shared Firebase app exported by firebase-config.js — no duplicate config.

import { auth, db } from "./firebase-config.js";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateProfile
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import {
  doc, setDoc, getDoc, updateDoc, serverTimestamp
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

/**
 * Register a new student.
 * Creates a Firebase Auth user AND a Firestore users/{uid} profile.
 * The password is NEVER stored in Firestore.
 */
export async function registerStudent({ firstName, lastName, email, password }) {
  const cleanEmail = String(email || "").trim().toLowerCase();
  const cleanFirst = String(firstName || "").trim();
  const cleanLast  = String(lastName  || "").trim();

  const cred = await createUserWithEmailAndPassword(auth, cleanEmail, password);
  const user = cred.user;

  await setDoc(doc(db, "users", user.uid), {
    firstName: cleanFirst,
    lastName:  cleanLast,
    email:     cleanEmail,
    role:      "student",
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp()
  });

  // Optional: set displayName on the Auth record (cosmetic)
  try { await updateProfile(user, { displayName: `${cleanFirst} ${cleanLast}`.trim() }); } catch (_) {}

  return user;
}

/** Sign in an existing student. */
export async function loginStudent(email, password) {
  const cred = await signInWithEmailAndPassword(auth, String(email).trim().toLowerCase(), password);
  return cred.user;
}

/** Sign out the current user (student or admin — same Auth pool). */
export async function logoutStudent() {
  await signOut(auth);
}

/** Subscribe to auth state changes. Returns the unsubscribe function. */
export function watchAuth(callback) {
  return onAuthStateChanged(auth, callback);
}

/** Get the current user's Firestore profile, or null if not signed in. */
export async function getCurrentStudentProfile() {
  const user = auth.currentUser;
  if (!user) return null;
  const snap = await getDoc(doc(db, "users", user.uid));
  return snap.exists() ? { uid: user.uid, ...snap.data() } : null;
}

/** Update permitted fields on the current student's own profile. */
export async function updateStudentProfile(uid, { firstName, lastName }) {
  const patch = { updatedAt: serverTimestamp() };
  if (typeof firstName === "string") patch.firstName = firstName.trim();
  if (typeof lastName  === "string") patch.lastName  = lastName.trim();
  await updateDoc(doc(db, "users", uid), patch);
}