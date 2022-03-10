const bodyParser = require("body-parser");
const expressSession = require("express-session");
const express = require("express");
const app = express();
const { getAuth, updateProfile } = require("firebase/auth");
const firebase = require("firebase");

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

const auth = getAuth();
const user = auth.currentUser;

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, x-client-key, x-client-token, x-client-secret, Authorization"
  );
  next();
});

var urlencodedParser = bodyParser.urlencoded({
  extended: true,
});

app.use(
  expressSession({
    secret: "It'sFreeRealEstate",
    saveUninitialized: false,
    resave: false,
  })
);

app.get("/home", (req, res) => {
  console.log("the call has been made");
  res.send({ name: "Ernesto" });
});
// app.post("/signup");
// app.get("/login");
app.post("/updateScore", (req, res) => {
  console.log(`current user: ${user}`);
  console.log(`Win count: ${req.win}`);
  console.log(`Lose count: ${req.lose}`);
  // if (playerWon == 1) {
  //   let winCount = 0;
  //   if (user !== null) {
  //     user.providerData.forEach((profile) => {
  //       console.log(profile.wins);
  //       winCount = profile.wins + 1;
  //     });
  //   }
  //   updateProfile(user, {
  //     wins: winCount,
  //   })
  //     .then(() => {
  //       console.log("score has been updated");
  //     })
  //     .catch((e) => {
  //       console.log(e);
  //     });
  // } else {
  //   let loseCount = 0;
  //   if (user !== null) {
  //     user.providerData.forEach((profile) => {
  //       console.log(profile.losses);
  //       loseCount = profile.losses + 1;
  //     });
  //   }
  //   updateProfile(user, {
  //     losses: loseCount,
  //   })
  //     .then(() => {
  //       console.log("score has been updated");
  //     })
  //     .catch((e) => {
  //       console.log(e);
  //     });
  // }
});

const port = 8080;
app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
