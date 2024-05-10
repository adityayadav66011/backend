const { Schema, model } = require("mongoose");

const contactSchema23 = new Schema({
    paymentTermCode: { type: String, required: true }, // Payment term code
    paymentTermName: { type: String, required: true }, // Payment term name
    paymentTermDays: { type: Number, required: true }, // Payment term days
});

const Contact23 = model("Contact23", contactSchema23);
module.exports = Contact23;
