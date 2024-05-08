const { Schema, model } = require("mongoose");
const Contact7 = require("./contact-model7");
const Contact8 = require("./contact-model8");
const Contact10 = require("./contact-model10");

const contactSchema15 = new Schema({
    Company_Code: {
        type: String,
        required: true,
        enum: Contact7.schema.path("Company_Code").enumValues, // Dropdown populated from Contact7 for Company Code
    },
    Branch_Code: {
        type: String,
        required: true,
        enum: Contact8.schema.path("Branch_Code").enumValues, // Dropdown populated from Contact8 for Branch Code
    },
    Appl_Code: { type: String, required: true }, // Appl Code
    Appl_Name: { type: String, required: true }, // Appl Name
    Module_Code: { type: String, required: true }, // Module Code
    Module_Name: { type: String, required: true }, // Module Name
    Submodule_Code: { type: String, required: true }, // Submodule Code
    Submodule_Name: { type: String, required: true }, // Submodule Name
    Process_Code: { type: String, required: true }, // Process Code
    Process_Name: { type: String, required: true }, // Process Name
    Function_Codes: {
        type: [String], // Array of strings for multiple checkboxes
        enum: Contact10.schema.path("Function_Code").enumValues, // Function codes dropdown from Contact10
    },
    Function_Names: {
        type: [String], // Array of strings for multiple checkboxes
        enum: Contact10.schema.path("Function_Name").enumValues, // Function names dropdown from Contact10
    },
});

const Contact15 = model("Contact15", contactSchema15);
module.exports = Contact15;
