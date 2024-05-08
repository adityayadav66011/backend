const { Schema, model } = require("mongoose");

const contactSchema9 = new Schema({
    Functional_Level_Code: { type: String, required: true }, // Functional level code, alpha numeric
    Functional_Level_Name: { type: String, required: true, maxlength: 50 }, // Functional level name, char (maximum length of 50 characters)
});

// Create a model or collection
const Contact9 = model("Contact9", contactSchema9);
module.exports = Contact9;
