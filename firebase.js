import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc,
  serverTimestamp
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDulNyUchsCTBAw0Smuc5nK7wzJIE_Cz2A",
  authDomain: "sage-connect-2d2e0.firebaseapp.com",
  projectId: "sage-connect-2d2e0",
  storageBucket: "sage-connect-2d2e0.firebasestorage.app",
  messagingSenderId: "831286879311",
  appId: "1:831286879311:web:4938aca6bece033c4fb63a"
};

window.saveInquiry = async function(data) {
  console.log("Saving inquiry...", data);

  try {
    // 1. Isolate the collection reference
    const targetCollection = collection(db, "inquiries");
    
    // 2. Isolate the payload
    const payload = {
      ...data,
      createdAt: serverTimestamp()
    };
    
    // 3. Execute the addition explicitly
    const docRef = await addDoc(targetCollection, payload);
    console.log("Document written with ID: ", docRef.id);

    return true;
  } catch (err) {
    console.error("Error caught in saveInquiry:", err);
    return false;
  }
};
