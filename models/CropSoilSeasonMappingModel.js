const { Schema, model } = require("mongoose");

const Contact16 = require("./contact-model16");
const Contact17 = require("./contact-model17");
const Contact3 = require("./contact-model3");
const Contact23 = require("./contact-model23");
const Contact1 = require("./contact-model1");
const Contact2 = require("./contact-model2");
const Contact4 = require("./contact-model4");
const Contact5 = require("./contact-model5");
const Contact6 = require("./contact-model6");
const Contact20 = require("./contact-model20");


const contactSchema24 = new Schema({
  Customer_Code: { type: String, required: true },
  Type: { type: String, enum: ['business', 'individual'], required: true },
  Primary_Contact: { type: String, required: true },
  Customer_Name: { type: String, required: true },
  
  Currency_Name: {
    type: String,
    required: true,
    // Assuming Contact16.schema.path("Currency_Name").enumValues is an array of valid values
    enum: Contact16.schema.path("Currency_Name").enumValues,
  },

  Customer_Email: { type: String, required: true },
  Customer_Phone: { type: String, required: true },

  GST_Name: {
    type: String,
    required: true,
    enum: Contact17.schema.path("GST_Name").enumValues, 
  },
  State_Code: {
    type: String,
    required: true,
    enum: Contact3.schema.path("State_Code").enumValues, 
  },

  PAN: { type: String, required: true },

  Tax_Preference: { type: String, enum: ['taxable', 'non taxable'], required: true },

  paymentTermCode: {
    type: String,
    required: true,
    enum: Contact23.schema.path("paymentTermCode").enumValues, 
  },
  Country_Code: {
    type: String,
    required: true,
    enum: Contact1.schema.path("Country_Code").enumValues, 
  },
  Zone_Code: {
    type: String,
    required: true,
    enum: Contact2.schema.path("Zone_Code").enumValues, 
  },
   
  Pool_Code: {
    type: String,
    required: true,
    enum: Contact4.schema.path("Pool_Code").enumValues, 
  },

  Station_Code: {
    type: String,
    required: true,
    enum: Contact5.schema.path("Station_Code").enumValues, 
  },
  
  City_Code: {
    type: String,
    required: true,
    enum: Contact6.schema.path("City_Code").enumValues, 
  },
  
  Street: { type: String, required: true },
  Pin_Code: { type: String, required: true },

  Soil_Name: {
    type: String,
    required: true,
    enum: Contact20.schema.path("Soil_Name").enumValues, // Dropdown populated from Contact18
  },
  
  Visit_In_Days: { type: Number, required: true }, // Change type to Number instead of String
  Last_Visited: { type: Date, required: true },
  Last_Visit_ID: { type: Date, required: true },
  Erp_Code: { type: String, required: true },
});

const Contact24 = model("Contact24", contactSchema24);
module.exports = Contact24;