const express = require("express");
const router = express.Router();
const Contact1 = require("../models/contact-model1");
const Contact2 = require("../models/contact-model2");

// Route for fetching country codes with names
router.route("/countryCodes").get(async (req, res) => {
    try {
        const countryCodesWithNames = await Contact1.find({}, { Country_Code: 1, Country_Name: 1, _id: 0 });
        res.json(countryCodesWithNames);
    } catch (error) {
        console.error("Error fetching country codes with names:", error);
        res.status(500).json({ message: "Error fetching country codes with names" });
    }
});

// Route for submitting Contact2 form
router.route("/Contact2").post(async (req, res) => {
    try {
        const response = req.body;
        await Contact2.create(response);
        return res.status(200).json({ message: "Message sent successfully" });
    } catch (error) {
        return res.status(500).json({ message: "Message not delivered" });
    }
});

module.exports = router;
