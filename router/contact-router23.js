const express = require("express");
const router = express.Router();
const submitContactForm23 = require("../controllers/contact-controller23");

router.route("/Contact23").post(submitContactForm23);

module.exports = router;
