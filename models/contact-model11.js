const { Schema, model } = require("mongoose");

const contactSchema11 = new Schema({
    Industry_Code: { type: String, required: true }, // Industry code
    Industry_Name: { type: String, required: true }, // Industry name
});

const Contact11 = model("Contact11", contactSchema11);
module.exports = Contact11;
