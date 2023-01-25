import 'https://www.gstatic.com/firebasejs/7.21.1/firebase-app.js';
import 'https://www.gstatic.com/firebasejs/7.21.1/firebase-database.js';
import 'https://www.gstatic.com/firebasejs/7.21.1/firebase-auth.js';

document.addEventListener('contextmenu', function(e) {
  e.preventDefault();
}, false);

const firebaseConfig = {
  apiKey: "AIzaSyBSOB0zMXgqb9XOzrWckFvh_OjuhkiTT5M",
  authDomain: "contributionanddonationform.firebaseapp.com",
  databaseURL: "https://contributionanddonationform-default-rtdb.firebaseio.com",
  projectId: "contributionanddonationform",
  storageBucket: "contributionanddonationform.appspot.com",
  messagingSenderId: "965432599487",
  appId: "1:965432599487:web:41c5c59bd1e5dc608f770a"
};
firebase.initializeApp(firebaseConfig);
var loginForm = document.querySelector("#loginForm");
loginForm.addEventListener("submit", function(e) {
  e.preventDefault();
  var email = document.querySelector("#email").value;
  var password = document.querySelector("#password").value;
  firebase.auth().signInWithEmailAndPassword(email, password)
  .then(function(user) {
    document.querySelector('#loginF').style.display = "none";
    document.querySelector("#dataTable").style.display = "";
    var database = firebase.database();
    var tableBody = document.querySelector("tbody");
    database.ref('donators').on("child_added", function(snapshot) {
      var data = snapshot.val();
      var row = document.createElement("tr");
      var nameCell = document.createElement("td");
      nameCell.textContent = data.name;
      var locationCell = document.createElement('td');
      locationCell.textContent = data.location;
      var phoneNBCell = document.createElement("td");
      phoneNBCell.textContent = data.phoneNB;
      var donationTypeCell = document.createElement("td");
      donationTypeCell.textContent = data.donation;
      row.appendChild(locationCell);
      row.appendChild(donationTypeCell);
      row.appendChild(phoneNBCell);
      row.appendChild(nameCell);
      tableBody.appendChild(row);
    }); 
  })
  .catch(function(error) {
    alert(error.message);
  });
});