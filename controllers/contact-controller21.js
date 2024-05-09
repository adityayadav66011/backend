const Contact21 = require("../models/contact-model21");

const contactForm21 = async (req, res) => {
    try {
        const { Season_Name } = req.body;
        const Season_Code = await generateSeasonCode(); // Generate the Season Code
        
        // Create a new Contact21 document with the received data and generated Season Code
        await Contact21.create({ Season_Code, Season_Name });
        
        // Send a success response
        return res.status(200).json({ message: "Season form 21 created successfully" });
    } catch (error) {
        // Handle errors and send an error response
        console.error("Error creating season form 21:", error);
        return res.status(500).json({ message: "Failed to create season form 21" });
    }
};

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

module.exports = contactForm21;
