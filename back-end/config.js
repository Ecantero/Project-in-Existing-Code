'use strict';
const dotenv = require('dotenv');
const assert = require('assert');

dotenv.config();


const{
    POST,
    HOST,
    HOST_URL,
    API_KEY,
    AUTH_DOMAIN,
    STORAGE_BUCKET,
    MESSAGING_SENDER_ID,
    APP_ID
} = process.dotenv;

assert(PORT, 'PORT is required');
assert(HOST, 'HOST is required');

module.exports = {
    port: PORT,
    host: HOST,
    url: HOST_URL,
    firebaseConfig: {
        apiKey: "AIzaSyCK8UYbVGTsBf6y55f6iitsQNlKVlFc3h0",
        authDomain: "projects-in-existing-code.firebaseapp.com",
        projectId: "projects-in-existing-code",
        storageBucket: "projects-in-existing-code.appspot.com",
        messagingSenderId: "407952246807",
        appId: "1:407952246807:web:bb3e486e1349053558f452",
        measurementId: "G-KCE3GKLX2"
    }
}


// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyCK8UYbVGTsBf6y55f6iitsQNlKVlFc3h0",
//   authDomain: "projects-in-existing-code.firebaseapp.com",
//   projectId: "projects-in-existing-code",
//   storageBucket: "projects-in-existing-code.appspot.com",
//   messagingSenderId: "407952246807",
//   appId: "1:407952246807:web:bb3e486e1349053558f452",
//   measurementId: "G-KCE3GKLX2S"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// <script type="module">
//   // Import the functions you need from the SDKs you need
//   import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.7/firebase-app.js";
//   import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.7/firebase-analytics.js";
//   // TODO: Add SDKs for Firebase products that you want to use
//   // https://firebase.google.com/docs/web/setup#available-libraries

//   // Your web app's Firebase configuration
//   // For Firebase JS SDK v7.20.0 and later, measurementId is optional
//   const firebaseConfig = {
//     apiKey: "AIzaSyCK8UYbVGTsBf6y55f6iitsQNlKVlFc3h0",
//     authDomain: "projects-in-existing-code.firebaseapp.com",
//     projectId: "projects-in-existing-code",
//     storageBucket: "projects-in-existing-code.appspot.com",
//     messagingSenderId: "407952246807",
//     appId: "1:407952246807:web:bb3e486e1349053558f452",
//     measurementId: "G-KCE3GKLX2S"
//   };

//   // Initialize Firebase
//   const app = initializeApp(firebaseConfig);
//   const analytics = getAnalytics(app);
// </script>