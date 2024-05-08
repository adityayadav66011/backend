const express = require("express");
const router = express.Router();
const contactForm17 = require("../controllers/contact-controller17");

router.route("/Contact17").post(contactForm17);

module.exports = router;
