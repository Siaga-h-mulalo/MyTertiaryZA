import { db } from "./firebase-config.js";
import {
  collection, getDocs
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

async function loadCollection(name) {
  try {
    const snap = await getDocs(collection(db, name));
    return snap.docs.map(d => ({ _id: d.id, ...d.data() }));
  } catch (err) {
    console.warn(`[MyTertiary] Could not load ${name}:`, err.message);
    return [];
  }
}

async function loadSettings() {
  try {
    const snap = await getDocs(collection(db, "settings"));
    if (snap.empty) return {};
    return snap.docs[0].data();
  } catch { return {}; }
}

export async function loadPublicData() {
  const [universities, colleges, courses, announcements, settings] = await Promise.all([
    loadCollection("universities"),
    loadCollection("colleges"),
    loadCollection("courses"),
    loadCollection("announcements"),
    loadSettings()
  ]);

  const payload = {
    universities,
    colleges,
    courses,
    announcements: announcements.filter(a => a.active !== false),
    settings
  };

  window.MyTertiaryData = payload;
  window.dispatchEvent(new CustomEvent("mytertiary:data-ready", { detail: payload }));
  return payload;
}

loadPublicData();