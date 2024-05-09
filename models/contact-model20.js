const { Schema, model } = require("mongoose");

const contactSchema20 = new Schema({
    Soil_Code: { type: String, required: true, unique: true },
    Soil_Name: { type: String, required: true }, // Soil name
});



const Contact20 = model("Contact20", contactSchema20);
module.exports = Contact20;
