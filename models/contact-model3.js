const { Schema, model } = require("mongoose");
const Contact2 = require("./contact-model2");

const contactSchema3 = new Schema({
    State_Code: { type: String, required: true, maxlength: 10 }, // Alpha-numeric state code
    State_Name: { type: String, required: true, maxlength: 100 }, // Char state name
    Zone_Code: { type: String, required: true, enum: Contact2.schema.path('Zone_Code').enumValues }, // Dropdown populated from Contact2
    Ext_Code: { type: Number, required: true } // Numeric ext code
});

const Contact3 = model("Contact3", contactSchema3);
module.exports = Contact3;
