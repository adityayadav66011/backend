const { Schema, model } = require("mongoose");
const Contact3 = require("./contact-model3");

const contactSchema4 = new Schema({
    Pool_Code: { type: String, required: true, maxlength: 10 }, // Alpha-numeric pool code
    Pool_Name: { type: String, required: true, maxlength: 100 }, // Char pool name
    State_Code: { 
        type: String, 
        required: true, 
        enum: Contact3.schema.path('State_Code').enumValues, // Dropdown populated from Contact3
    },
});

const Contact4 = model("Contact4", contactSchema4);
module.exports = Contact4;
