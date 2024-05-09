const { Schema, model } = require("mongoose");

const contactSchema18 = new Schema({
    Crop_Code: { type: String, required: true, unique: true }, // Crop Code (Auto-populated and uneditable)
    Crop_Name: { type: String, required: true }, // Crop Name
    Crop_Type1: { type: String, required: true }, // Crop Type 1
    Crop_Type2: { type: String, required: true }, // Crop Type 2
    Crop_Type3: { type: String, required: true }, // Crop Type 3
    Crop_Grade: { type: String, required: true }, // Crop Grade
    Crop_Quality: { type: String, required: true }, // Crop Quality
});

const Contact18 = model("Contact18", contactSchema18);
module.exports = Contact18;
