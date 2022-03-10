console.disableYellowBox = true;
const firebaseConfig = {
  apiKey: "AIzaSyBd7CxArmWjhAlNur3BKOgSI0Y2rmoxvtU",
  authDomain: "fashionplus-e21de.firebaseapp.com",
  projectId: "fashionplus-e21de",
  storageBucket: "fashionplus-e21de.appspot.com",
  messagingSenderId: "553564910554",
  appId: "1:553564910554:web:76252698401c4dbfe206e3",
  measurementId: "G-JBEPECTEL6",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

function signUp() {
  var email = document.getElementById("signUpEmail");
  var password = document.getElementById("signUpPassword");
  const promise = auth.createUserWithEmailAndPassword(
    email.value,
    password.value
  );
  promise.catch((e) => alert(e.message));

  alert("Signed up!");
}

function signIn() {
  var email = document.getElementById("signUpEmail");
  var password = document.getElementById("signUpPassword");
  const promise = auth.signInWithEmailAndPassword(email.value, password.value);
  promise.catch((e) => alert(e.message));
  alert("Signed In " + email);
}

function signOut() {
  auth.signOut();
  localStorage.clear();
  alert("Signed Out.");
}

auth.onAuthStateChanged(function (user) {
  if (user) {
    var email = user.email;
    let uid = user.uid;
    console.log("Active User: " + email);
    console.log("active user id: " + uid);
    localStorage.setItem("id", uid);
    //alert("Active User: " + email);
  } else {
    // alert("No Active User");
  }
});

// rules_version = '2';
// service cloud.firestore {
//   match /databases/{database}/documents {
//     match /{document=**} {
//       allow read, write: if
//           request.time < timestamp.date(2022, 1, 2);
//     }
//   }
// }
