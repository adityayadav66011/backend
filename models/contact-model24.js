const { Schema, model } = require("mongoose");
const Contact17 = require("./contact-model17");
const Contact5 = require("./contact-model5");
const Contact4 = require("./contact-model4");
const Contact3 = require("./contact-model3");
const Contact23 = require("./contact-model23");
const Contact1 = require("./contact-model1");
const Contact2 = require("./contact-model2");
const Contact6 = require("./contact-model6");
const Contact20 = require("./contact-model20");
const Contact16 = require("./contact-model16");

const contactSchema24 = new Schema({
  Customer_Number: { type: String, default: "CN00001" , },
  Type: { type: String, enum: ["business", "individual"], required: true },
  Primary_Contact_Number: { type: String, required: true },
  Customer_Name: { type: String, required: true },
  Currency_Code: {
    type: String,
    required: true,
    enum: getEnumValues(Contact16, "Currency_Code"),
  },
  Customer_Email: { type: String, required: true },
  Customer_Phone: { type: String, required: true },
  GST_Code: {
    type: String,
    required: true,
    enum: getEnumValues(Contact17, "GST_Code"),
  },
  State_Code: {
    type: String,
    required: true,
    enum: getEnumValues(Contact3, "State_Code"),
  },
  PAN_Number: { type: String, required: true },
  Tax_Preference: { type: String, enum: ["taxable", "non-taxable"], required: true },
  Payment_Term_Code: {
    type: String,
    required: true,
    enum: getEnumValues(Contact23, "Payment_Term_Code"),
  },
  Country_Code: {
    type: String,
    required: true,
    enum: getEnumValues(Contact1, "Country_Code"),
  },
  Zone_Code: {
    type: String,
    required: true,
    enum: getEnumValues(Contact2, "Zone_Code"),
  },
  Pool_Code: {
    type: String,
    required: true,
    enum: getEnumValues(Contact4, "Pool_Code"),
  },
  Station_Code: {
    type: String,
    required: true,
    enum: getEnumValues(Contact5, "Station_Code"),
  },
  City_Code: {
    type: String,
    required: true,
    enum: getEnumValues(Contact6, "City_Code"),
  },
  Street: { type: String, required: true },
  Pincode: { type: String, required: true },
  Soil_Code: {
    type: String,
    required: true,
    enum: getEnumValues(Contact20, "Soil_Code"),
  },
  Visit_In_Days: { type: Number, required: true },
  Last_Visited_Date: { type: Date },
  Last_Visit_ID: { type: String },
  ERP_Code: { type: String },
});

function getEnumValues(model, path) {
  try {
    return model.schema.path(path).enumValues;
  } catch (error) {
    console.error(`Error getting enum values for path '${path}':`, error);
    return [];
  }
}

const Contact24 = model("Contact24", contactSchema24);
module.exports = Contact24;
