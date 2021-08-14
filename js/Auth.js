import "./firebase/firebase-app.js";
import "./firebase/firebase-firestore.js";
import "./firebase/firebase-auth.js";
import './firebase/firebase-analytics.js'
import "./socket.io.js";
import "./jquery.js";
$(document).ready(function () {
  $(document).on("submit", "form", function () {
    return false;
  });
});

/*Bad ducc no look at firebase config*/
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCk1yrVh0zTC8BBu-mirrHaqhaMGcg-6Xo",
  authDomain: "duccboxjs-281f7.firebaseapp.com",
  databaseURL: "https://duccboxjs-default-rtdb.firebaseio.com",
  projectId: "duccboxjs",
  storageBucket: "duccboxjs.appspot.com",
  messagingSenderId: "1070773113218",
  appId: "1:1070773113218:web:578d79b68a8e7d1727ff9b",
  measurementId: "G-7WDEN5SZJ6",
});
firebase.analytics();
function uuidv4() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    var r = (Math.random() * 16) | 0,
      v = c == "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}
const uuid = uuidv4();
const app = firebaseApp;
const db = firebase.firestore();
const Name = document.getElementById("input");
const Pass = document.getElementById("pass");
const NameLogin = document.getElementById("inputLogin");
const PassLogin = document.getElementById("passLogin");
const formLogin = document.getElementById("ducc");
const form = document.getElementById("form");
const Status = document.getElementById("status");
const CodeErr = document.getElementById('code');
formLogin.addEventListener("click", function (e) {
  firebase.auth().signInWithEmailAndPassword(NameLogin.value, PassLogin.value)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    Status.style.color = "green";
    Status.innerHTML = 'Logged in!';
    setTimeout(() => {  CodeErr.innerHTML = ""; Status.innerHTML = ""; }, 3000);
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    Status.style.color = 'red';
    Status.innerHTML = `${errorMessage}`;
    CodeErr.style.color = 'red';
CodeErr.innerHTML = errorCode;
setTimeout(() => {  CodeErr.innerHTML = ""; Status.innerHTML = ""; }, 3000);
  });

});
$(document).ready(function () {
  $(document).on("submit", "form", function () {
    return false;
  });
});
/*New Account Deploy Code*/
document.getElementById('duc').addEventListener("click", function (e) {
  if (Name.value == 'email@example.com', Pass.value == 'password123') {
    Status.style.color = 'red';
     Status.innerHTML = 'Please fill in a Username and Password';
     setTimeout(() => {  CodeErr.innerHTML = ""; Status.innerHTML = ""; }, 3000);
  } else {
    firebase
    .auth()
    .createUserWithEmailAndPassword(Name.value, Pass.value)
    .then((userCredential) => {
      var user = userCredential.user;
      Status.style.color = "green";
      Status.innerHTML = "Success: account made";
      setTimeout(() => {  CodeErr.innerHTML = ""; Status.innerHTML = ""; }, 3000);
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      Status.style.color = "red";
      Status.innerHTML = error;
CodeErr.style.color = 'red';
CodeErr.innerHTML = errorCode;
setTimeout(() => {  CodeErr.innerHTML = ""; Status.innerHTML = ""; }, 3000);
      // ..
    });
  }

});