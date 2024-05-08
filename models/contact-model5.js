const { Schema, model } = require("mongoose");
const Contact4 = require("./contact-model4");

const contactSchema5 = new Schema({
    Station_Code: { type: String, required: true, maxlength: 10 }, // Alpha-numeric station code
    Station_Name: { type: String, required: true, maxlength: 100 }, // Char station name
    Pool_Code: { 
        type: String, 
        required: true, 
        enum: Contact4.schema.path('Pool_Code').enumValues, // Dropdown populated from Contact4
    },
});

const Contact5 = model("Contact5", contactSchema5);
module.exports = Contact5;
