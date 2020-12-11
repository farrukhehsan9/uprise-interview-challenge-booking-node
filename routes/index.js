const express = require("express");
const router = express.Router();

// root for events
router.use("/createEvent", require("./createEvent"));

module.exports = router; 