const bodyParser = require("body-parser");
const expressSession = require("express-session");
const express = require("express");
const app = express();

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
app.post("/signup");
app.get("/login");
app.post("/updateScore");

const port = 8080;
app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
