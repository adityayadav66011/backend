const { Schema, model } = require("mongoose");
const Contact6 = require("./contact-model6");
const Contact1 = require("./contact-model1");
const Contact3 = require("./contact-model3");
const Contact7 = require("./contact-model7");

// Define the contact schema for Contact Form 8
const contactSchema8 = new Schema({
  Company_Code: {
    type: String,
    required: true,
    enum: Contact7.schema.path("Company_Code").enumValues, // Dropdown populated from Contact7
  },
  Reporting_Branch: {
    type: String,
    required: false, // Optional field
    enum: [] // Dropdown populated from Contact8's Branch_Code
  },
  Branch_Code: { type: String, required: true }, // Alpha-numeric branch code
  Branch_Name: { type: String, required: true }, // Branch name
  Branch_Address_Line1: { type: String, required: true }, // Branch address line 1
  Branch_Address_Line2: { type: String }, // Branch address line 2 (optional)
  Street: { type: String }, // Street (optional)
  Area_Village: { type: String, required: true }, // Area/Village
  City_Code: {
    type: String,
    required: true,
    enum: Contact6.schema.path("City_Code").enumValues, // Dropdown populated from Contact6
  },
  State_Code: {
    type: String,
    required: true,
    enum: Contact3.schema.path("State_Code").enumValues, // Dropdown populated from Contact3
  },
  Country_Code: {
    type: String,
    required: true,
    enum: Contact1.schema.path("Country_Code").enumValues, // Dropdown populated from Contact1
  },
  Pincode: { type: String, required: true }, // Pincode
  GST_No: { type: String }, // GST number (optional)
});

const Contact8 = model("Contact8", contactSchema8);
module.exports = Contact8;
