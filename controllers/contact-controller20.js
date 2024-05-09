const Contact20 = require("../models/contact-model20");

const createContact20 = async (req, res) => {
    try {
        const { Soil_Name } = req.body;
        const Soil_Code = await generateSoilCode(); // Generate the Soil Code
        
        // Create a new Contact20 document with the received data and generated Soil Code
        await Contact20.create({ Soil_Code, Soil_Name });
        
        // Send a success response
        return res.status(200).json({ message: "Contact form 20 created successfully" });
    } catch (error) {
        // Handle errors and send an error response
        console.error("Error creating contact form 20:", error);
        return res.status(500).json({ message: "Failed to create contact form 20" });
    }
};

// Function to generate a new Soil Code (SC001 format)
const generateSoilCode = async () => {
    try {
        // Fetch the last used Soil Code from the database
        const lastSoil = await Contact20.findOne({}, {}, { sort: { 'createdAt': -1 } });
        let lastSoilCode = "SC001";

        if (lastSoil && lastSoil.Soil_Code) {
            lastSoilCode = lastSoil.Soil_Code;
        }

        // Extract the numeric part of the last Soil Code and increment it
        const lastNumber = parseInt(lastSoilCode.replace("SC", ""), 10);
        const nextNumber = lastNumber + 1;

        // Generate the new Soil Code in the format SC00X
        const newSoilCode = "SC" + nextNumber.toString().padStart(3, "0");

        return newSoilCode;
    } catch (error) {
        console.error("Error generating Soil Code:", error);
        throw error;
    }
};

module.exports = { createContact20 };
