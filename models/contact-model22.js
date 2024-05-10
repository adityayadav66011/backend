const { Schema, model } = require("mongoose");

const contactSchema = new Schema({
  materialCode: { type: String, required: true },
  materialType: { type: String, enum: ['pesticides', 'fertilizers'], required: true },
  materialName: { type: String, required: true },
});

// Create a model for Contact Model Form
const ContactModelForm = model("ContactModelForm", contactSchema);

module.exports = ContactModelForm;
