const { Schema, model } = require("mongoose");

const contactSchema16 = new Schema({
    Currency_Code: { type: String, required: true }, // Currency code
    Currency_Name: { type: String, required: true }, // Currency name
});

const Contact16 = model("Contact16", contactSchema16);
module.exports = Contact16;
