const bodyParser = require("body-parser");
const expressSession = require("express-session");
const express = require("express");
const app = express();

console.disableYellowBox = true;
const firebaseConfig = {
    apiKey: "AIzaSyBd7CxArmWjhAlNur3BKOgSI0Y2rmoxvtU",
    authDomain: "fashionplus-e21de.firebaseapp.com",
    projectId: "fashionplus-e21de",
    storageBucket: "fashionplus-e21de.appspot.com",
    messagingSenderId: "553564910554",
    appId: "1:553564910554:web:76252698401c4dbfe206e3",
    measurementId: "G-JBEPECTEL6"
  };

  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

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
  console.log(`Winner's email: ${req.email}, with a total Win: ${req.win}`);
});

const port = 8080;
app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
