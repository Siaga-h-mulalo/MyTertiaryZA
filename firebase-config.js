// firebase-config.js
// Uses the Firebase modular SDK via CDN — works directly in the browser.

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth }      from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:            "AIzaSyD8lq1ORNf5_mp0IQLIzhnkN9vvkV4eu0Y",
  authDomain:        "mytertiary-za.firebaseapp.com",
  projectId:         "mytertiary-za",
  storageBucket:     "mytertiary-za.firebasestorage.app",
  messagingSenderId: "388307851667",
  appId:             "1:388307851667:web:99d5c0274c046ae6d77066",
  measurementId:     "G-JEG3SJ0QF6"
};

// Initialize Firebase
export const app  = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db   = getFirestore(app);