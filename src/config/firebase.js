require("dotenv").config();
const firebase = require("firebase/app");
const admin = require("firebase-admin");
const { getFirestore } = require('firebase-admin/firestore');
const {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  sendEmailVerification,
  sendPasswordResetEmail,
} = require("firebase/auth");

const serviceAccount = require("../firebaseService.json");

try {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: process.env.FIREBASE_DATABASE_URL,
  });
  console.log("Firebase Admin SDK initialized successfully");
} catch (error) {
  console.error("Failed to connect to Firebase Admin SDK:", error);
  process.exit(1);
}

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
};

// Initialize Firebase Client SDK
try {
  firebase.initializeApp(firebaseConfig);
  console.log("Firebase Client SDK initialized successfully");
} catch (error) {
  console.error("Failed to initialize Firebase Client SDK:", error);
  process.exit(1);
}

const db = getFirestore(); // Initialize Firestore

module.exports = {
  db,
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  sendEmailVerification,
  sendPasswordResetEmail,
  admin,
};
