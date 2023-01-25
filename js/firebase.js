import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.11/firebase-app.js";
import { getDatabase, ref, set, get, child } from "https://www.gstatic.com/firebasejs/9.6.11/firebase-database.js";
const firebaseConfig = {
  apiKey: "AIzaSyBSOB0zMXgqb9XOzrWckFvh_OjuhkiTT5M",
  authDomain: "contributionanddonationform.firebaseapp.com",
  databaseURL: "https://contributionanddonationform-default-rtdb.firebaseio.com",
  projectId: "contributionanddonationform",
  storageBucket: "contributionanddonationform.appspot.com",
  messagingSenderId: "965432599487",
  appId: "1:965432599487:web:41c5c59bd1e5dc608f770a"
};
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    set(ref(db, 'donators/' + document.getElementById('name').value), {
        name: document.getElementById('name').value,
        phoneNB: document.getElementById('phonenb').value,
        donation: document.getElementById('donation').value,
        location: document.getElementById('location').value
      });
    document.getElementById('contactForm').reset();
    alert('تم إرسال معلوماتك التي أدخلتها إلى قاعدة البيانات الخاصة بتجمّع شباب الحوش. سوف يتم التّواصل معك بأقرب وقت، شكراً لوقتك. ملاحظة : اذا اردت التبرع بشيء اخر الرجاء انتظار تواصلنا معك.');
});