const express = require("express");
const router = express.Router();
const admin = require("firebase-admin");
const serviceAccount = require("../config/firebase-admin-sdk.json");

// admin initialize
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://fir-with-node-js.firebaseio.com"
});

// geting firebase all events 
router.get("/get", async (req, res) => {
    const response = await admin.firestore().collection('events').get()
    const data = response.docs.map(doc => ({id: doc.id, ...doc.data()}))
    res.send(data)
})

// creating event in firebase 
router.post("/add", async (req, res) => {
    await admin
    .firestore()
    .collection("events").add(req.body)
    res.status(200)
    return
})

module.exports = router; 