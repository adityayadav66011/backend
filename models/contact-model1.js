const { Schema, model } = require("mongoose");

const contactSchema1 = new Schema({
    Country_Code: { type: Schema.Types.Mixed, required: true }, // Make Country_Code a mixed type
    Country_Name: { type: String, required: true },
    Postal_Code: { type: String, required: true },
    Iso_Code: { type: String, required: true },
    Iso_Code_3char: { type: String, required: true },
    Eu_Country: { type: String, required: true },
    Country_Shortname: { type: String, required: true },
});

// Create a model or collection
const Contact1 = model("Contact1", contactSchema1);
module.exports = Contact1;
