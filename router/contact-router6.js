const express = require("express");
const router = express.Router();
const Contact1 = require("../models/contact-model1");
const Contact3 = require("../models/contact-model3");
const Contact6 = require("../models/contact-model6");

// Route for fetching country codes from Contact1 model
router.route("/countryCodes").get(async (req, res) => {
    try {
        const countryCodes = await Contact1.find({}, { Country_Code: 1, _id: 0 });
        res.json(countryCodes);
    } catch (error) {
        console.error("Error fetching country codes:", error);
        res.status(500).json({ message: "Error fetching country codes" });
    }
});

// Route for fetching state codes based on the chosen country code from Contact3 model
router.route("/stateCodes/:countryCode").get(async (req, res) => {
    const countryCode = req.params.countryCode;
    try {
        const stateCodes = await Contact3.find({ Country_Code: countryCode }, { State_Code: 1, _id: 0 });
        res.json(stateCodes);
    } catch (error) {
        console.error("Error fetching state codes:", error);
        res.status(500).json({ message: "Error fetching state codes" });
    }
});

// Route for submitting Contact6 form
router.route("/Contact6").post(async (req, res) => {
    try {
        const { City_Code, City_Name, Country_Code, State_Code } = req.body;
        await Contact6.create({ City_Code, City_Name, Country_Code, State_Code });
        return res.status(200).json({ message: "Message sent successfully" });
    } catch (error) {
        console.error("Error submitting Contact6 form:", error);
        return res.status(500).json({ message: "Message not delivered" });
    }
});

module.exports = router;
