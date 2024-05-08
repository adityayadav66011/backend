const express = require("express");
const router = express.Router();
const contactForm11 = require("../controllers/contact-controller11"); // Assuming you have a controller named contact-controller11 for Contact11 form

router.route("/Contact11").post(contactForm11);

module.exports = router;
