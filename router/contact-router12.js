const express = require("express");
const router = express.Router();
const Contact7 = require("../models/contact-model7");
const Contact8 = require("../models/contact-model8");
const Contact9 = require("../models/contact-model9");
const Contact10 = require("../models/contact-model10");
const Contact12 = require("../models/contact-model12");

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

// Route for fetching Functional_Level_Code dropdown options from Contact9 model
router.route("/functionalLevelCodes").get(async (req, res) => {
    try {
        const functionalLevelCodes = await Contact9.find({}, { Functional_Level_Code: 1, _id: 0 });
        res.json(functionalLevelCodes);
    } catch (error) {
        console.error("Error fetching functional level codes:", error);
        res.status(500).json({ message: "Error fetching functional level codes" });
    }
});

// Route for fetching Function_Codes options from Contact10 model
router.route("/functionCodes").get(async (req, res) => {
    try {
        const functionCodes = await Contact10.find({}, { Function_Code: 1, _id: 0 });
        res.json(functionCodes);
    } catch (error) {
        console.error("Error fetching function codes:", error);
        res.status(500).json({ message: "Error fetching function codes" });
    }
});

// Route for submitting Contact12 form
router.route("/Contact12").post(async (req, res) => {
    try {
        const { User_Id, Company_Code, Branch_Code, Function_Codes, Employee_Code, Employee_Name, Emp_Mobile_No, Emp_Mail_Id, Functional_Level_Code, Admin_Rpt_Manager_Code, Function_Rpt_Manager_Code } = req.body;
        await Contact12.create({ User_Id, Company_Code, Branch_Code, Function_Codes, Employee_Code, Employee_Name, Emp_Mobile_No, Emp_Mail_Id, Functional_Level_Code, Admin_Rpt_Manager_Code, Function_Rpt_Manager_Code });
        return res.status(200).json({ message: "Message sent successfully" });
    } catch (error) {
        console.error("Error submitting Contact12 form:", error);
        return res.status(500).json({ message: "Message not delivered" });
    }
});

module.exports = router;
