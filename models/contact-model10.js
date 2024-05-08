const { Schema, model } = require("mongoose");
const Contact7 = require("./contact-model7");
const Contact8 = require("./contact-model8");

const contactSchema10 = new Schema({
    Company_Code: { 
        type: String, 
        required: true, 
        enum: Contact7.schema.path('Company_Code').enumValues, // Dropdown populated from Contact7
    },
    Branch_Code: { 
        type: String, 
        required: true, 
        enum: Contact8.schema.path('Branch_Code').enumValues, // Dropdown populated from Contact8
    },
    Function_Code: { type: String, required: true }, // Functional level code
    Function_Name: { type: String, required: true }, // Char function name
});

const Contact10 = model("Contact10", contactSchema10);
module.exports = Contact10;
