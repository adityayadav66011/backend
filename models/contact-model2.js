const { Schema, model } = require("mongoose");
const Contact1 = require("./contact-model1");

const contactSchema2 = new Schema({
    Zone_Code: { type: String, required: true, maxlength: 8 },
    Zone_Name: { type: String, maxlength: 60 },
    Country_Code: { type: String, required: true, enum: [] }
});

const fetchDistinctCountryCodesAndNames = async () => {
    try {
        const distinctCountryCodesAndNames = await Contact1.find().select('Country_Code Country_Name');
        return distinctCountryCodesAndNames.map(country => `${country.Country_Code} ${country.Country_Name}`);
    } catch (error) {
        console.error("Error fetching distinct country codes and names:", error);
        return [];
    }
};

fetchDistinctCountryCodesAndNames().then(enumValues => {
    contactSchema2.path('Country_Code').enum = enumValues;
}).catch(error => {
    console.error("Error populating enum values:", error);
});

const Contact2 = model("Contact2", contactSchema2);
module.exports = Contact2;
