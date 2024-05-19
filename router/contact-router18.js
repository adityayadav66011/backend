const express = require("express");
const router = express.Router();
const Contact18 = require("../models/contact-model18"); // Import the Contact18 model

// Route for fetching crop codes from Contact18 model
router.route("/cropCodes").get(async (req, res) => {
    try {
        const cropCodes = await Contact18.find({});
        res.json(cropCodes);
    } catch (error) {
        console.error("Error fetching crop codes:", error);
        res.status(500).json({ message: "Error fetching crop codes" });
    }
});
// Route for submitting Contact18 form
router.route("/Contact18").post(async (req, res) => {
    try {
        const { Crop_Name, Crop_Type1, Crop_Type2, Crop_Type3, Crop_Grade, Crop_Quality } = req.body;
        const Crop_Code = await generateCropCode(); // Generate the Crop Code
        
        // Create a new Contact18 document with the received data and generated Crop Code
        await Contact18.create({ Crop_Code, Crop_Name, Crop_Type1, Crop_Type2, Crop_Type3, Crop_Grade, Crop_Quality });
        
        // Send a success response
        return res.status(200).json({ message: "Message sent successfully" });
    } catch (error) {
        // Handle errors and send an error response
        console.error("Error submitting Contact18 form:", error);
        return res.status(500).json({ message: "Message not delivered" });
    }
});

// Function to generate a new Crop Code (CR0000 format)
const generateCropCode = async () => {
    try {
        // Fetch the last useSOIL d Crop Code from the database
        const lastCrop = await Contact18.findOne({}, {}, { sort: { 'createdAt' : -1 } });
        let lastCropCode = "CR0000";

        if (lastCrop) {
            lastCropCode = lastCrop.Crop_Code;
        }

        // Extract the numeric part of the last Crop Code and increment it
        const lastNumber = parseInt(lastCropCode.replace("CR", ""), 10);
        let nextNumber = lastNumber + 1;

        // Generate the new Crop Code in the format CR000X
        let newCropCode = "CR" + nextNumber.toString().padStart(4, "0");

        // Check if the newCropCode already exists in the database, if so, increment until unique
        while (await Contact18.exists({ Crop_Code: newCropCode })) {
            nextNumber++;
            newCropCode = "CR" + nextNumber.toString().padStart(4, "0");
        }

        return newCropCode;
    } catch (error) {
        console.error("Error generating Crop Code:", error);
        throw error;
    }
};


module.exports = router;
