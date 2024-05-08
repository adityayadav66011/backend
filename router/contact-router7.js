const express = require("express");
const router = express.Router();
const Contact1 = require("../models/contact-model1");
const Contact3 = require("../models/contact-model3");
const Contact6 = require("../models/contact-model6");
const Contact7 = require("../models/contact-model7");

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

// Route for fetching city codes based on the chosen state code from Contact6 model
router.route("/cityCodes/:stateCode").get(async (req, res) => {
    const stateCode = req.params.stateCode;
    try {
        const cityCodes = await Contact6.find({ State_Code: stateCode }, { City_Code: 1, _id: 0 });
        res.json(cityCodes);
    } catch (error) {
        console.error("Error fetching city codes:", error);
        res.status(500).json({ message: "Error fetching city codes" });
    }
});

// Route for submitting Contact7 form
router.route("/Contact7").post(async (req, res) => {
    try {
        const { Company_Code, Company_Name, Company_Address_Line1, Company_Address_Line2, Street, Area_Village, City_Code, State_Code, Country_Code, Pincode, GST_No } = req.body;
        await Contact7.create({ Company_Code, Company_Name, Company_Address_Line1, Company_Address_Line2, Street, Area_Village, City_Code, State_Code, Country_Code, Pincode, GST_No });
        return res.status(200).json({ message: "Message sent successfully" });
    } catch (error) {
        console.error("Error submitting Contact7 form:", error);
        return res.status(500).json({ message: "Message not delivered" });
    }
});

module.exports = router;
