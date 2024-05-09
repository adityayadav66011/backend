const { Schema, model } = require("mongoose");

const contactSchema21 = new Schema({
    Season_Code: { type: String, required: true, unique: true }, // Season Code, auto-generated and unique
    Season_Name: { type: String, required: true }, // Season Name
});

// Middleware to auto-generate Season Code before saving new entries
contactSchema21.pre("save", async function (next) {
    try {
        if (!this.Season_Code) {
            // Fetch the last entry from the database to determine the next Season Code
            const lastEntry = await Contact21.findOne({}, {}, { sort: { 'createdAt': -1 } });

            let newSeasonCode = "SeasC001"; // Default value if no prior submissions
            if (lastEntry && lastEntry.Season_Code) {
                // Extract the numeric part from the last Season Code and increment it
                const lastCode = parseInt(lastEntry.Season_Code.replace(/\D/g, ''), 10);
                const nextNumber = lastCode + 1;
                newSeasonCode = "SeasC" + nextNumber.toString().padStart(3, "0");
            }

            this.Season_Code = newSeasonCode;
        }
        next();
    } catch (error) {
        console.error("Error generating Season Code:", error);
        next(error);
    }
});

// Create a model or collection
const Contact21 = model("Contact21", contactSchema21);
module.exports = Contact21;
