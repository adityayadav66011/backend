const { Schema, model } = require("mongoose");

const contactSchema13 = new Schema({
    Role_Code: { type: String, required: true }, // Role code
    Role_Name: { type: String, required: true }, // Role name
});

const Contact13 = model("Contact13", contactSchema13);
module.exports = Contact13;
