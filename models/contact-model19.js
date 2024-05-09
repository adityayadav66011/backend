const { Schema, model } = require("mongoose");
const Contact18 = require("./contact-model18");

const contactSchema19 = new Schema({
  Crop_Name: {
    type: String,
    required: true,
    enum: Contact18.schema.path("Crop_Name").enumValues, // Dropdown populated from Contact18
  },
  Crop_Type1: {
    type: String,
    required: true,
    enum: Contact18.schema.path("Crop_Type1").enumValues, // Dropdown populated from Contact18
  },
  Crop_Type2: {
    type: String,
    required: true,
    enum: Contact18.schema.path("Crop_Type2").enumValues, // Dropdown populated from Contact18
  },
  Crop_Type3: {
    type: String,
    required: true,
    enum: Contact18.schema.path("Crop_Type3").enumValues, // Dropdown populated from Contact18
  },
  Crop_Grade: {
    type: String,
    required: true,
    enum: Contact18.schema.path("Crop_Grade").enumValues, // Dropdown populated from Contact18
  },
  Crop_Quality: {
    type: String,
    required: true,
    enum: Contact18.schema.path("Crop_Quality").enumValues, // Dropdown populated from Contact18
  },
  Crop_Lot_Number: { type: String, required: true }, // Crop Lot Number
  Date_Of_Reaping: { type: Date, required: true }, // Date of Reaping
});

const Contact19 = model("Contact19", contactSchema19);
module.exports = Contact19;
