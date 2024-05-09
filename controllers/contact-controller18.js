const Contact18 = require("../models/contact-model18");

const contactForm18 = async (req, res) => {
    try {
        const { Crop_Name, Crop_Type1, Crop_Type2, Crop_Type3, Crop_Grade, Crop_Quality } = req.body;
        const Crop_Code = await generateCropCode(); // Generate the Crop Code
        
        // Create a new Contact18 document with the received data and generated Crop Code
        await Contact18.create({ Crop_Code, Crop_Name, Crop_Type1, Crop_Type2, Crop_Type3, Crop_Grade, Crop_Quality });
        
        // Send a success response
        return res.status(200).json({ message: "Message sent successfully" });
    } catch (error) {
        // Handle errors and send an error response
        console.error("Error creating contact (Form 18):", error);
        return res.status(500).json({ message: "Message not delivered" });
    }
};

// Function to generate a new Crop Code (CR0000 format)
const generateCropCode = async () => {
    try {
        // Fetch the last used Crop Code from the database
        const lastCrop = await Contact18.findOne({}, {}, { sort: { 'createdAt' : -1 } });
        let lastCropCode = "CR0000";

        if (lastCrop) {
            lastCropCode = lastCrop.Crop_Code;
        }

        // Extract the numeric part of the last Crop Code and increment it
        const lastNumber = parseInt(lastCropCode.replace("CR", ""), 10);
        const nextNumber = lastNumber + 1;

        // Generate the new Crop Code in the format CR000X
        const newCropCode = "CR" + nextNumber.toString().padStart(4, "0");

        return newCropCode;
    } catch (error) {
        console.error("Error generating Crop Code:", error);
        throw error;
    }
};

module.exports = contactForm18;
