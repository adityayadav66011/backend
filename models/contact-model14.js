const { Schema, model } = require("mongoose");
const Contact13 = require("./contact-model13"); // Import Contact13 model for role codes and names dropdown

const contactSchema14 = new Schema({
    Employee_Code: { type: String, required: true }, // Employee Code
    Employee_Name: { type: String, required: true }, // Employee Name
    Company_Code: { type: String, required: true }, // Company Code
    Branch_Code: { type: String, required: true }, // Branch Code
    Function_Code: { type: String, required: true }, // Function Code
    Role_Code: {
        type: String,
        required: true,
        enum: Contact13.schema.path("Role_Code").enumValues, // Dropdown populated from Contact13 for Role Code
    },
    Role_Name: {
        type: String,
        required: true,
        enum: Contact13.schema.path("Role_Name").enumValues, // Dropdown populated from Contact13 for Role Name
    },
});

const Contact14 = model("Contact14", contactSchema14);
module.exports = Contact14;
