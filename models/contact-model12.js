const { Schema, model } = require("mongoose");
const Contact7 = require("./contact-model7");
const Contact8 = require("./contact-model8");
const Contact9 = require("./contact-model9");
const Contact10 = require("./contact-model10");

const contactSchema12 = new Schema({
  User_Id: { type: String, required: true }, // User ID
  Company_Code: {
    type: String,
    required: true,
    enum: Contact7.schema.path("Company_Code").enumValues, // Dropdown populated from Contact7
  },
  Branch_Code: {
    type: String,
    required: true,
    enum: Contact8.schema.path("Branch_Code").enumValues, // Dropdown populated from Contact8
  },
  Function_Codes: {
    type: [String], // Array of strings for multiple checkboxes
    enum: Contact10.schema.path("Function_Code").enumValues, // Function codes dropdown from Contact10
  },
  Employee_Code: { type: String, required: true }, // Employee Code
  Employee_Name: { type: String, required: true }, // Employee Name
  Emp_Mobile_No: { type: String }, // Employee Mobile Number
  Emp_Mail_Id: { type: String }, // Employee Email ID
  Functional_Level_Code: {
    type: String,
    required: true,
    enum: Contact9.schema.path("Functional_Level_Code").enumValues, // Dropdown populated from Contact9
  },
  Admin_Rpt_Manager_Code: { type: String }, // Admin Reporting Manager Code
  Function_Rpt_Manager_Code: { type: String }, // Function Reporting Manager Code
});

const Contact12 = model("Contact12", contactSchema12);
module.exports = Contact12;
