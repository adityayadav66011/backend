const express = require("express");
const router = express.Router();
const Contact21 = require("../models/contact-model21"); // Import Contact21 model for contact form 21

// Route for submitting Contact21 form
router.route("/contact21").post(async (req, res) => {
    try {
        const { Season_Name } = req.body;
        const Season_Code = await generateSeasonCode(); // Generate the Season Code
        
        // Create a new Contact21 document with the received data and generated Season Code
        await Contact21.create({ Season_Code, Season_Name });
        
        // Send a success response
        return res.status(200).json({ message: "Contact form 21 created successfully" });
    } catch (error) {
        // Handle errors and send an error response
        console.error("Error submitting Contact21 form:", error);
        return res.status(500).json({ message: "Failed to create contact form 21" });
    }
});

// Route to fetch the previous submission's Season Code
router.route("/previousSeasonCode").get(async (req, res) => {
    try {
        // Fetch the last entry from the database to get the previous Season Code
        const lastEntry = await Contact21.findOne({}, {}, { sort: { 'createdAt': -1 } });
        const previousSeasonCode = lastEntry ? lastEntry.Season_Code : "SeasC001"; // Default to SeasC001 if there are no entries

        res.status(200).json({ previousSeasonCode });
    } catch (error) {
        console.error("Error fetching previous Season Code:", error);
        res.status(500).json({ message: "Failed to fetch previous Season Code" });
    }
});

// Function to generate a new Season Code (SeasC001 format) ensuring uniqueness
const generateSeasonCode = async () => {
    try {
        let newSeasonCode = "SeasC001"; // Default value if no prior submissions
        
        // Fetch the last entry from the database to determine the next Season Code
        const lastEntry = await Contact21.findOne({}, {}, { sort: { 'createdAt': -1 } });

        if (lastEntry && lastEntry.Season_Code) {
            // Extract the numeric part from the last Season Code and increment it
            const lastCode = parseInt(lastEntry.Season_Code.replace(/\D/g, ''), 10);
            let nextNumber = lastCode + 1;

            // Generate the new Season Code in the format SeasC00X
            newSeasonCode = "SeasC" + nextNumber.toString().padStart(3, "0");

            // Check if the new Season Code already exists, if so, increment until unique
            while (await Contact21.exists({ Season_Code: newSeasonCode })) {
                nextNumber++;
                newSeasonCode = "SeasC" + nextNumber.toString().padStart(3, "0");
            }
        }

        return newSeasonCode;
    } catch (error) {
        console.error("Error generating Season Code:", error);
        throw error;
    }
};

module.exports = router;
