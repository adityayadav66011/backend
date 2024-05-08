const express = require("express");
const router= express.Router();
const contactForm1=require("../controllers/contact-controller1");

router.route("/Contact1").post(contactForm1); 

module.exports = router;
