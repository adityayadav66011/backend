const express = require("express");
const router = express.Router();
const contactForm16 = require("../controllers/contact-controller16");

router.route("/Contact16").post(contactForm16);

module.exports = router;
