const express = require("express");
const router = express.Router();
const Contact7 = require("../models/contact-model7");
const Contact8 = require("../models/contact-model8");
const Contact10 = require("../models/contact-model10");
const Contact15 = require("../models/contact-model15");

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

// Route for fetching Function_Code dropdown options from Contact10 model
router.route("/functionCodes").get(async (req, res) => {
    try {
        const functionCodes = await Contact10.find({}, { Function_Code: 1, _id: 0 });
        res.json(functionCodes);
    } catch (error) {
        console.error("Error fetching function codes:", error);
        res.status(500).json({ message: "Error fetching function codes" });
    }
});

// Route for fetching Function_Name dropdown options from Contact10 model
router.route("/functionNames").get(async (req, res) => {
    try {
        const functionNames = await Contact10.find({}, { Function_Name: 1, _id: 0 });
        res.json(functionNames);
    } catch (error) {
        console.error("Error fetching function names:", error);
        res.status(500).json({ message: "Error fetching function names" });
    }
});

// Route for submitting Contact15 form
router.route("/Contact15").post(async (req, res) => {
    try {
        const { Company_Code, Branch_Code, Appl_Code, Appl_Name, Module_Code, Module_Name, Submodule_Code, Submodule_Name, Process_Code, Process_Name, Function_Code, Function_Name } = req.body;
        await Contact15.create({ Company_Code, Branch_Code, Appl_Code, Appl_Name, Module_Code, Module_Name, Submodule_Code, Submodule_Name, Process_Code, Process_Name, Function_Code, Function_Name });
        return res.status(200).json({ message: "Message sent successfully" });
    } catch (error) {
        console.error("Error submitting Contact15 form:", error);
        return res.status(500).json({ message: "Message not delivered" });
    }
});

module.exports = router;
