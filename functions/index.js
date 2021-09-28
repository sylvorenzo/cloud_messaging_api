const functions = require("firebase-functions");
const express = require("express");


const app = express();
const admin = require("firebase-admin");
admin.initializeApp();
// const db = admin.database();
const cloud = admin.messaging();
const cors = require("cors");
app.use(cors({origin: "true"}));

app.get("/", (req, res)=>{
  res.status(201).send();
});

app.post("/", (req, res)=>{
  const user = req.body;
  cloud.sendMulticast(user);
  res.status(201).send(user);
});
exports.user = functions.https.onRequest(app);
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
