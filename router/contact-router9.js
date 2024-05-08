const express = require("express");
const router = express.Router();
const Contact9 = require("../models/contact-model9"); // Import the Contact9 model

// Route for submitting Contact9 form
router.route("/Contact9").post(async (req, res) => {
    try {
        const { Functional_Level_Code, Functional_Level_Name } = req.body;
        await Contact9.create({ Functional_Level_Code, Functional_Level_Name });
        return res.status(200).json({ message: "Message sent successfully" });
    } catch (error) {
        console.error("Error creating contact:", error);
        return res.status(500).json({ message: "Message not delivered" });
    }
});

module.exports = router;
