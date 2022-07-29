import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAf9diEQM-8yF2PXbO934dBB0HqRZcuGnQ",
  authDomain: "chat-realtime-doctor.firebaseapp.com",
  projectId: "chat-realtime-doctor",
  storageBucket: "chat-realtime-doctor.appspot.com",
  messagingSenderId: "1009382485768",
  appId: "1:1009382485768:web:86b96ec5d0ee7ab45346bd",
});

const db = firebaseApp.firestore();
export { db };
