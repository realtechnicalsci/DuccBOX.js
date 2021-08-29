import "./firebase/firebase-app.js";
import "./firebase/firebase-auth.js";
import "./firebase/firebase-analytics.js";
import "./jquery.js";
$(document).ready(function () {
  $(document).on("submit", "form", function () {
    return false;
  });
});

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
const Name = document.getElementById("input");
const Pass = document.getElementById("pass");
const NameLogin = document.getElementById("inputLogin");
const PassLogin = document.getElementById("passLogin");
const formLogin = document.getElementById("ducc");
const form = document.getElementById("form");
const auth = firebase.auth();
const Status = document.getElementById("status");
const CodeErr = document.getElementById("code");
document.getElementById("login").onclick = () => {
  auth
    .signInWithEmailAndPassword(NameLogin.value, PassLogin.value)
    .then(() => {
      auth.onAuthStateChanged(user => { if (user) {
        document.getElementById('welcome-msg').innerHTML = `Welcome ${user.displayName}`;
        document.getElementById('ch-userN').onclick = ()=>{
document.getElementById('ch-name').style.display = 'block'
        }
        document.getElementById('set-new-name').onclick = ()=>{
          user.updateProfile({
            displayName: `${document.getElementById('input-name-box').value}`
          })
        }
      }
    })

    document.getElementById('mgr').style.display = 'block'
}).catch((error) => {
document.getElementById('status').innerHTML = error;
  });  
  
};