// user-service.js
// Student-data helpers: saved universities, application events, referrals.
// Everything here is scoped to the signed-in student (enforced by Firestore Rules).

import { db } from "./firebase-config.js";
import {
  collection, doc, addDoc, deleteDoc, getDocs,
  query, where, serverTimestamp
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

/* ---------- SAVED UNIVERSITIES ---------- */

export async function saveUniversity(userId, university) {
  return addDoc(collection(db, "savedUniversities"), {
    userId,
    universityId:   university._id || university.id || "",
    universityName: university.name || "",
    createdAt: serverTimestamp()
  });
}

export async function unsaveUniversity(savedDocId) {
  return deleteDoc(doc(db, "savedUniversities", savedDocId));
}

export async function listSavedUniversities(userId) {
  const q = query(collection(db, "savedUniversities"), where("userId", "==", userId));
  const snap = await getDocs(q);
  return snap.docs.map(d => ({ _id: d.id, ...d.data() }));
}

/* ---------- APPLICATIONS (future "Apply Now" flow) ---------- */

/**
 * Records an application intent event. Called when a signed-in student
 * clicks "Apply Now". Does NOT fake any affiliate/referral data —
 * it just stores which university was clicked and when.
 */
export async function recordApplicationEvent(userId, university) {
  return addDoc(collection(db, "applications"), {
    userId,
    universityId:   university._id || university.id || "",
    universityName: university.name || "",
    officialApplicationUrl: university.appUrl || "",
    status: "started",
    createdAt: serverTimestamp()
  });
}

export async function listApplications(userId) {
  const q = query(collection(db, "applications"), where("userId", "==", userId));
  const snap = await getDocs(q);
  return snap.docs.map(d => ({ _id: d.id, ...d.data() }));
}

/* ---------- REFERRALS (future, admin-controlled) ---------- */

export async function listReferrals(userId) {
  const q = query(collection(db, "referrals"), where("userId", "==", userId));
  const snap = await getDocs(q);
  return snap.docs.map(d => ({ _id: d.id, ...d.data() }));
}