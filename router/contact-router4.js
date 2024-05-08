const express = require("express");
const router = express.Router();
const Contact3 = require("../models/contact-model3");
const Contact4 = require("../models/contact-model4");

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

// Route for submitting Contact4 form
router.route("/Contact4").post(async (req, res) => {
    try {
        const { Pool_Code, Pool_Name, State_Code } = req.body;
        await Contact4.create({ Pool_Code, Pool_Name, State_Code });
        return res.status(200).json({ message: "Message sent successfully" });
    } catch (error) {
        console.error("Error submitting Contact4 form:", error);
        return res.status(500).json({ message: "Message not delivered" });
    }
});

module.exports = router;
