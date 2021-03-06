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

function delay(n){
    return new Promise(function(resolve){
        setTimeout(resolve,n*1000);
    });
}

async function signUp(){
    var email = document.getElementById('signUpEmail');
    var password = document.getElementById('signUpPassword');
    const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
    promise.catch(e => alert(e.message));

    alert("Signed up!");


    await delay(3);
    
    window.location.href = "home.html";
}

function signIn(){
    var email = document.getElementById('signUpEmail');
    var password = document.getElementById('signUpPassword');
    const promise = auth.signInWithEmailAndPassword(email.value, password.value);
    promise.then((e) => {
        localStorage.setItem("email", email);
    }).catch(e => alert(e.message));

    

   // alert("Signed In " + email);
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
auth.onAuthStateChanged(function(user){
    if(user){
        var email = user.email;
        console.log("Active User: " + email);
        var signIn = document.getElementById('sign-in');
        var userStats = document.getElementById('signed-in');
        signIn.style.display = 'none';
        userStats.style.display = "block";
        var username = document.getElementById('username');
        username.innerHTML = `${email}`;
        var settings = document.getElementById('settings');
        settings.style.display = 'block';
        var body = document.body;
        console.log()
        var backgroundColor = localStorage.getItem('backgroundColor');
        body.style.backgroundColor = backgroundColor;
        //alert("Active User: " + email);
    } else {
       // alert("No Active User");
    }
});

function settingsChange(){
    var e = document.getElementById("backgroundColor");
    var strUser = e.options[e.selectedIndex].text;
    localStorage.setItem("backgroundColor", strUser);
    
    
    
}
