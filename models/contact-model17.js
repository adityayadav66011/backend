const { Schema, model } = require("mongoose");

const contactSchema17 = new Schema({
    GST_Code: { type: String, required: true }, // GST code
    GST_Name: { type: String, required: true }, // GST name
});

const Contact17 = model("Contact17", contactSchema17);
module.exports = Contact17;
