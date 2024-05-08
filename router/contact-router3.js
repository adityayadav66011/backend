const express = require("express");
const router = express.Router();
const Contact2 = require("../models/contact-model2");
const Contact3 = require("../models/contact-model3");

// Route for fetching zone codes from Contact2 model
router.route("/zoneCodes").get(async (req, res) => {
    try {
        const zoneCodes = await Contact2.find({}, { Zone_Code: 1, _id: 0 });
        res.json(zoneCodes);
    } catch (error) {
        console.error("Error fetching zone codes:", error);
        res.status(500).json({ message: "Error fetching zone codes" });
    }
});

// Route for submitting Contact3 form
router.route("/Contact3").post(async (req, res) => {
    try {
        const { State_Code, State_Name, Zone_Code, Ext_Code } = req.body;
        await Contact3.create({ State_Code, State_Name, Zone_Code, Ext_Code });
        return res.status(200).json({ message: "Message sent successfully" });
    } catch (error) {
        console.error("Error submitting Contact3 form:", error);
        return res.status(500).json({ message: "Message not delivered" });
    }
});

module.exports = router;
