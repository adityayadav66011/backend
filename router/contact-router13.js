const express = require("express");
const router = express.Router();
const contactForm13 = require("../controllers/contact-controller13"); // Assuming you have a controller named contact-controller13 for Contact13 form

router.route("/Contact13").post(contactForm13);

module.exports = router;
