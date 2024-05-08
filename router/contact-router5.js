const express = require("express");
const router = express.Router();
const Contact4 = require("../models/contact-model4"); // Import the Contact4 model
const Contact5 = require("../models/contact-model5"); // Import the Contact5 model

// Route for fetching pool codes from Contact4 model
router.route("/poolCodes").get(async (req, res) => {
    try {
        const poolCodes = await Contact4.find({}, { Pool_Code: 1, _id: 0 });
        res.json(poolCodes);
    } catch (error) {
        console.error("Error fetching pool codes:", error);
        res.status(500).json({ message: "Error fetching pool codes" });
    }
});

// Route for submitting Contact5 form
router.route("/Contact5").post(async (req, res) => {
    try {
        const { Station_Code, Station_Name, Pool_Code } = req.body;
        await Contact5.create({ Station_Code, Station_Name, Pool_Code });
        return res.status(200).json({ message: "Message sent successfully" });
    } catch (error) {
        console.error("Error submitting Contact5 form:", error);
        return res.status(500).json({ message: "Message not delivered" });
    }
});

module.exports = router;
