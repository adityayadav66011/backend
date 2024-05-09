const express = require("express");
const router = express.Router();
const Contact20 = require("../models/contact-model20"); // Import Contact20 model for contact form 20

// Route to fetch the previous submission's Soil Code
router.route("/previousSoilCode").get(async (req, res) => {
    try {
        // Fetch the last entry from the database to get the previous Soil Code
        const lastEntry = await Contact20.findOne({}, {}, { sort: { 'createdAt': -1 } });
        const previousSoilCode = lastEntry ? lastEntry.Soil_Code : "SC001"; // Default to SC001 if there are no entries

        res.status(200).json({ previousSoilCode });
    } catch (error) {
        console.error("Error fetching previous Soil Code:", error);
        res.status(500).json({ message: "Failed to fetch previous Soil Code" });
    }
});

// Route for submitting Contact20 form
router.route("/Contact20").post(async (req, res) => {
    try {
        const { Soil_Name } = req.body;
        const Soil_Code = await generateSoilCode(); // Generate the Soil Code
        
        // Create a new Contact20 document with the received data and generated Soil Code
        await Contact20.create({ Soil_Code, Soil_Name });
        
        // Send a success response
        return res.status(200).json({ message: "Contact form 20 created successfully" });
    } catch (error) {
        // Handle errors and send an error response
        console.error("Error submitting Contact20 form:", error);
        return res.status(500).json({ message: "Failed to create contact form 20" });
    }
});

// Function to generate a new Soil Code (SC001 format) ensuring uniqueness
const generateSoilCode = async () => {
    try {
        let newSoilCode = "SC001"; // Default value if no prior submissions
        
        // Fetch the last entry from the database to determine the next Soil Code
        const lastEntry = await Contact20.findOne({}, {}, { sort: { 'createdAt': -1 } });

        if (lastEntry && lastEntry.Soil_Code) {
            // Extract the numeric part from the last Soil Code and increment it
            const lastCode = parseInt(lastEntry.Soil_Code.replace(/\D/g, ''), 10);
            let nextNumber = lastCode + 1;

            // Generate the new Soil Code in the format SC00X
            newSoilCode = "SC" + nextNumber.toString().padStart(3, "0");

            // Check if the new Soil Code already exists, if so, increment until unique
            while (await Contact20.exists({ Soil_Code: newSoilCode })) {
                nextNumber++;
                newSoilCode = "SC" + nextNumber.toString().padStart(3, "0");
            }
        }

        return newSoilCode;
    } catch (error) {
        console.error("Error generating Soil Code:", error);
        throw error;
    }
};

module.exports = router;
