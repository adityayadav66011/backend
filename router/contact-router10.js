const express = require("express");
const router = express.Router();
const Contact7 = require("../models/contact-model7");
const Contact8 = require("../models/contact-model8");
const Contact10 = require("../models/contact-model10");

// Route for fetching Company_Code dropdown options from Contact7 model
router.route("/companyCodes").get(async (req, res) => {
    try {
        const companyCodes = await Contact7.find({}, { Company_Code: 1, _id: 0 });
        res.json(companyCodes);
    } catch (error) {
        console.error("Error fetching company codes:", error);
        res.status(500).json({ message: "Error fetching company codes" });
    }
});

// Route for fetching Branch_Code dropdown options from Contact8 model
router.route("/branchCodes").get(async (req, res) => {
    try {
        const branchCodes = await Contact8.find({}, { Branch_Code: 1, _id: 0 });
        res.json(branchCodes);
    } catch (error) {
        console.error("Error fetching branch codes:", error);
        res.status(500).json({ message: "Error fetching branch codes" });
    }
});

// Route for submitting Contact10 form
router.route("/Contact10").post(async (req, res) => {
    try {
        const { Company_Code, Branch_Code, Function_Code, Function_Name } = req.body;
        await Contact10.create({ Company_Code, Branch_Code, Function_Code, Function_Name });
        return res.status(200).json({ message: "Message sent successfully" });
    } catch (error) {
        console.error("Error submitting Contact10 form:", error);
        return res.status(500).json({ message: "Message not delivered" });
    }
});

module.exports = router;
