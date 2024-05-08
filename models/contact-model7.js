const { Schema, model } = require("mongoose");
const Contact1 = require("./contact-model1");
const Contact3 = require("./contact-model3");
const Contact6 = require("./contact-model6");

const contactSchema7 = new Schema({
    Company_Code: { type: String, required: true, maxlength: 10 }, // Alpha-numeric company code
    Company_Name: { type: String, required: true, maxlength: 100 }, // Char company name
    Company_Address_Line1: { type: String, required: true, maxlength: 255 }, // Char address line 1
    Company_Address_Line2: { type: String, maxlength: 255 }, // Char address line 2 (optional)
    Street: { type: String, maxlength: 100 }, // Char street (optional)
    Area_Village: { type: String, required: true, maxlength: 100 }, // Char area/village
    City_Code: { 
        type: String, 
        required: true, 
        enum: Contact6.schema.path('City_Code').enumValues, // Dropdown populated from Contact6
    },
    State_Code: { 
        type: String, 
        required: true,
        enum: Contact3.schema.path('State_Code').enumValues, // Dropdown populated from Contact3
    },
    Country_Code: { 
        type: String, 
        required: true, 
        enum: Contact1.schema.path('Country_Code').enumValues, // Dropdown populated from Contact1
    },
    Pincode: { type: String, required: true, maxlength: 10 }, // Alpha-numeric pincode
    GST_No: { type: String, maxlength: 15 }, // Char GST number (optional)
});

const Contact7 = model("Contact7", contactSchema7);
module.exports = Contact7;
