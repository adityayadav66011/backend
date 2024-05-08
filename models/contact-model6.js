const { Schema, model } = require("mongoose");
const Contact1 = require("./contact-model1");
const Contact3 = require("./contact-model3");

const contactSchema6 = new Schema({
    City_Code: { type: String, required: true, maxlength: 10 }, // Alpha-numeric city code
    City_Name: { type: String, required: true, maxlength: 100 }, // Char city name
    Country_Code: { 
        type: String, 
        required: true, 
        enum: Contact1.schema.path('Country_Code').enumValues, // Dropdown populated from Contact1
    },
    State_Code: { 
        type: String, 
        required: true,
        enum: Contact3.schema.path('State_Code').enumValues,
    },
});

const Contact6 = model("Contact6", contactSchema6);
module.exports = Contact6;
