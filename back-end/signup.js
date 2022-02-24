console.disableYellowBox = true;
firebaseConfig = {
    apiKey: "AIzaSyCK8UYbVGTsBf6y55f6iitsQNlKVlFc3h0",
    authDomain: "projects-in-existing-code.firebaseapp.com",
    projectId: "projects-in-existing-code",
    storageBucket: "projects-in-existing-code.appspot.com",
    messagingSenderId: "407952246807",
    appId: "1:407952246807:web:bb3e486e1349053558f452",
    measurementId: "G-KCE3GKLX2"
};

  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

function signUp(){
    var email = document.getElementById('signUpEmail');
    var password = document.getElementById('signUpPassword');
    const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
    promise.catch(e => alert(e.message));

    alert("Signed up!");

}

function signIn(){
    var email = document.getElementById('signUpEmail');
    var password = document.getElementById('signUpPassword');
    const promise = auth.signInWithEmailAndPassword(email.value, password.value);
    promise.catch(e => alert(e.message));

   // alert("Signed In " + email);
}

function signOut(){
    auth.signOut();
    alert("Signed Out.");

}

auth.onAuthStateChanged(function(user){
    if(user){
        var email = user.email;
        alert("Active User" + email);
    } else {
       // alert("No Active User");
    }
});