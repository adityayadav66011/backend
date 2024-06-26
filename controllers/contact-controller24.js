const Contact24 = require('../models/contact-model24');
const Contact16 = require('../models/contact-model16');
const Contact17 = require('../models/contact-model17');
const Contact3 = require('../models/contact-model3');
const Contact23 = require('../models/contact-model23');
const Contact1 = require('../models/contact-model1');
const Contact2 = require('../models/contact-model2');
const Contact4 = require('../models/contact-model4');
const Contact5 = require('../models/contact-model5');
const Contact6 = require('../models/contact-model6');
const Contact20 = require('../models/contact-model20');
const { connectDb } = require('../utils/db');

const submitContact24Form = async (req, res) => {
  try {
    await connectDb();

    const {
      Type,
      Primary_Contact,
      Customer_Name,
      Currency_Name,
      Customer_Email,
      Customer_Phone,
      GST_Name,
      State_Code,
      PAN,
      Tax_Preference,
      paymentTermCode,
      Country_Code,
      Zone_Code,
      Pool_Code,
      Station_Code,
      City_Code,
      Street,
      Pin_Code,
      Soil_Name,
      Visit_In_Days,
      Last_Visited,
      Last_Visit_ID,
      Erp_Code
    } = req.body;

    const lastEntry = await Contact24.findOne({}, {}, { sort: { 'Customer_Code': -1 } });
    const previousCustomerCode = lastEntry ? lastEntry.Customer_Code : "CC0001";

    const newCustomerCode = generateCustomerCode(previousCustomerCode);
    await Contact24.create({
      Customer_Code: newCustomerCode,
      Type,
      Primary_Contact,
      Customer_Name,
      Currency_Name,
      Customer_Email,
      Customer_Phone,
      GST_Name,
      State_Code,
      PAN,
      Tax_Preference,
      paymentTermCode,
      Country_Code,
      Zone_Code,
      Pool_Code,
      Station_Code,
      City_Code,
      Street,
      Pin_Code,
      Soil_Name,
      Visit_In_Days,
      Last_Visited,
      Last_Visit_ID,
      Erp_Code
    });

    return res.status(200).json({ message: "Contact form 24 submitted successfully" });
  } catch (error) {
    console.error("Error submitting Contact24 form:", error);
    return res.status(500).json({ message: "Failed to submit Contact24 form" });
  }
};

const generateCustomerCode = (lastCustomerCode) => {
  const codeNumber = parseInt(lastCustomerCode.slice(2), 10) + 1;
  return 'CC' + codeNumber.toString().padStart(4, '0');
};

const getCurrencyNames = async (req, res) => {
  try {
    await connectDb();
    const currencyNames = await Contact16.find({}, { Currency_Name: 1, _id: 0 });
    res.json(currencyNames);
  } catch (error) {
    console.error("Error fetching currency names:", error);
    res.status(500).json({ message: "Error fetching currency names" });
  }
};

const getGstNames = async (req, res) => {
  try {
    await connectDb();
    const gstNames = await Contact17.find({}, { GST_Name: 1, _id: 0 });
    res.json(gstNames);
  } catch (error) {
    console.error("Error fetching GST names:", error);
    res.status(500).json({ message: "Error fetching GST names" });
  }
};

const getStateCodes = async (req, res) => {
  try {
    await connectDb();
    const stateCodes = await Contact3.find({}, { Zone_Code: 2, State_Code: 1, _id: 0 });
    res.json(stateCodes);
  } catch (error) {
    console.error("Error fetching state codes:", error);
    res.status(500).json({ message: "Error fetching state codes" });
  }
};

const getPaymentTermCodes = async (req, res) => {
  try {
    await connectDb();
    const paymentTermCodes = await Contact23.find({}, { paymentTermCode: 1, _id: 0 });
    res.json(paymentTermCodes);
  } catch (error) {
    console.error("Error fetching payment term codes:", error);
    res.status(500).json({ message: "Error fetching payment term codes" });
  }
};

const getCountryCodes = async (req, res) => {
  try {
    await connectDb();
    const countryCodes = await Contact1.find({}, { Country_Code: 1, _id: 0 });
    res.json(countryCodes);
  } catch (error) {
    console.error("Error fetching country codes:", error);
    res.status(500).json({ message: "Error fetching country codes" });
  }
};

const getZoneCodes = async (req, res) => {
  try {
    await connectDb();
    const zoneCodes = await Contact2.find({}, { Zone_Code: 1, _id: 0 });
    res.json(zoneCodes);
  } catch (error) {
    console.error("Error fetching zone codes:", error);
    res.status(500).json({ message: "Error fetching zone codes" });
  }
};

const getPoolCodes = async (req, res) => {
  try {
    await connectDb();
    const poolCodes = await Contact4.find({}, { Pool_Code: 1, _id: 0 });
    res.json(poolCodes);
  } catch (error) {
    console.error("Error fetching pool codes:", error);
    res.status(500).json({ message: "Error fetching pool codes" });
  }
};

const getStationCodes = async (req, res) => {
  try {
    await connectDb();
    const stationCodes = await Contact5.find({}, { Pool_Code: 2, Station_Code: 1, _id: 0 });
    res.json(stationCodes);
  } catch (error) {
    console.error("Error fetching station codes:", error);
    res.status(500).json({ message: "Error fetching station codes" });
  }
};

const getCityCodes = async (req, res) => {
  try {
    await connectDb();
    const cityCodes = await Contact6.find({}, { City_Code: 1, _id: 0 });
    res.json(cityCodes);
  } catch (error) {
    console.error("Error fetching city codes:", error);
    res.status(500).json({ message: "Error fetching city codes" });
  }
};

const getSoilNames = async (req, res) => {
  try {
    await connectDb();
    const soilNames = await Contact20.find({}, { Soil_Code: 2, Soil_Name: 1, _id: 0 });
    res.json(soilNames);
  } catch (error) {
    console.error("Error fetching soil names:", error);
    res.status(500).json({ message: "Error fetching soil names" });
  }
};

module.exports = {
  submitContact24Form,
  getCurrencyNames,
  getGstNames,
  getStateCodes,
  getPaymentTermCodes,
  getCountryCodes,
  getZoneCodes,
  getPoolCodes,
  getStationCodes,
  getCityCodes,
  getSoilNames,
};
