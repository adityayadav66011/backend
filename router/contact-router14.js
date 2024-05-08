const express = require("express");
const router = express.Router();
const Contact13 = require("../models/contact-model13"); // Import Contact13 model for role codes and names dropdown
const Contact14 = require("../models/contact-model14");

// Route for fetching Role_Code dropdown options from Contact13 model
router.route("/roleCodes").get(async (req, res) => {
    try {
        const roleCodes = await Contact13.find({}, { Role_Code: 1, _id: 0 });
        res.json(roleCodes);
    } catch (error) {
        console.error("Error fetching role codes:", error);
        res.status(500).json({ message: "Error fetching role codes" });
    }
});

// Route for fetching Role_Name dropdown options from Contact13 model
router.route("/roleNames").get(async (req, res) => {
    try {
        const roleNames = await Contact13.find({}, { Role_Name: 1, _id: 0 });
        res.json(roleNames);
    } catch (error) {
        console.error("Error fetching role names:", error);
        res.status(500).json({ message: "Error fetching role names" });
    }
});

// Route for submitting Contact14 form
router.route("/Contact14").post(async (req, res) => {
    try {
        const { Employee_Code, Employee_Name, Company_Code, Branch_Code, Function_Code, Role_Code, Role_Name } = req.body;
        await Contact14.create({ Employee_Code, Employee_Name, Company_Code, Branch_Code, Function_Code, Role_Code, Role_Name });
        return res.status(200).json({ message: "Message sent successfully" });
    } catch (error) {
        console.error("Error submitting Contact14 form:", error);
        return res.status(500).json({ message: "Message not delivered" });
    }
});

module.exports = router;
