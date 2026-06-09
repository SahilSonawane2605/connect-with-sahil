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
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
console.log("Firebase Connected Successfully");
window.saveInquiry = async function (data) {
try {
console.log("Saving inquiry...", data);
const docRef = await addDoc(
  collection(db, "inquiries"),
  {
    ...data,
    createdAt: serverTimestamp()
  }
);
console.log("Saved successfully:", docRef.id);
return true;
} catch (error) {
console.error("Firestore Error:", error);

return false;
}
};
