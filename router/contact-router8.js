const express = require("express");
const router = express.Router();
const Contact7 = require("../models/contact-model7"); // Import the Contact7 model
const Contact8 = require("../models/contact-model8"); // Import the Contact8 model
const Contact6 = require("../models/contact-model6"); // Import the Contact6 model
const Contact3 = require("../models/contact-model3"); // Import the Contact3 model
const Contact1 = require("../models/contact-model1"); // Import the Contact1 model

// Route for fetching company codes from Contact7 model
router.route("/companyCodes").get(async (req, res) => {
    try {
        const companyCodes = await Contact7.find({}, { Company_Code: 1, _id: 0 });
        res.json(companyCodes);
    } catch (error) {
        console.error("Error fetching company codes:", error);
        res.status(500).json({ message: "Error fetching company codes" });
    }
});

// Route for fetching branch codes from Contact8 model
router.route("/branchCodes").get(async (req, res) => {
    try {
        const branchCodes = await Contact8.find({}, { Branch_Code: 1, _id: 0 });
        res.json(branchCodes);
    } catch (error) {
        console.error("Error fetching branch codes:", error);
        res.status(500).json({ message: "Error fetching branch codes" });
    }
});

// Route for fetching city codes from Contact6 model
router.route("/cityCodes").get(async (req, res) => {
    try {
        const cityCodes = await Contact6.find({}, {State_Code:4,Country_Code:3,City_Name:2, City_Code: 1, _id: 0 });
        res.json(cityCodes);
    } catch (error) {
        console.error("Error fetching city codes:", error);
        res.status(500).json({ message: "Error fetching city codes" });
    }
});

// Route for fetching state codes from Contact3 model
router.route("/stateCodes").get(async (req, res) => {
    try {
        const stateCodes = await Contact3.find({}, { State_Code: 1, _id: 0 });
        res.json(stateCodes);
    } catch (error) {
        console.error("Error fetching state codes:", error);
        res.status(500).json({ message: "Error fetching state codes" });
    }
});

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

// Route for submitting Contact8 form
router.route("/Contact8").post(async (req, res) => {
    try {
        const { Company_Code, Reporting_Branch, Branch_Code, Branch_Name, Branch_Address_Line1, Branch_Address_Line2, Street, Area_Village, City_Code, State_Code, Country_Code, Pincode, GST_No } = req.body;
        await Contact8.create({ Company_Code, Reporting_Branch, Branch_Code, Branch_Name, Branch_Address_Line1, Branch_Address_Line2, Street, Area_Village, City_Code, State_Code, Country_Code, Pincode, GST_No });
        return res.status(200).json({ message: "Message sent successfully" });
    } catch (error) {
        console.error("Error submitting Contact8 form:", error);
        return res.status(500).json({ message: "Message not delivered" });
    }
});

module.exports = router;
