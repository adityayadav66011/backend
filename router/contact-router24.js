const express = require("express");
const router = express.Router();
const Contact17 = require("../models/contact-model17");
const Contact5 = require("../models/contact-model5");
const Contact4 = require("../models/contact-model4");
const Contact3 = require("../models/contact-model3");
const Contact23 = require("../models/contact-model23");
const Contact1 = require("../models/contact-model1");
const Contact2 = require("../models/contact-model2");
const Contact6 = require("../models/contact-model6");
const Contact20 = require("../models/contact-model20");
const Contact16 = require("../models/contact-model16");
const Contact24 = require("../models/contact-model24");

// Route for fetching Currency_Code dropdown options from Contact16 model
router.route("/currencyCodes").get(async (req, res) => {
  try {
    const currencyCodes = await Contact16.find({}, { Currency_Code: 1, _id: 0 });
    res.json(currencyCodes);
  } catch (error) {
    console.error("Error fetching currency codes:", error);
    res.status(500).json({ message: "Error fetching currency codes" });
  }
});

// Route for fetching GST_Code dropdown options from Contact17 model
router.route("/gstCodes").get(async (req, res) => {
  try {
    const gstCodes = await Contact17.find({}, { GST_Code: 1, _id: 0 });
    res.json(gstCodes);
  } catch (error) {
    console.error("Error fetching GST codes:", error);
    res.status(500).json({ message: "Error fetching GST codes" });
  }
});

// Route for fetching State_Code dropdown options from Contact4 model
router.route("/stateCodes").get(async (req, res) => {
  try {
    const stateCodes = await Contact3.find({}, { State_Code: 1, _id: 0 });
    res.json(stateCodes);
  } catch (error) {
    console.error("Error fetching state codes:", error);
    res.status(500).json({ message: "Error fetching state codes" });
  }
});

// Route for fetching Payment_Term_Code dropdown options from Contact23 model
router.route("/paymentTermCodes").get(async (req, res) => {
  try {
    const paymentTermCodes = await Contact23.find({}, { Payment_Term_Code: 1, _id: 0 });
    res.json(paymentTermCodes);
  } catch (error) {
    console.error("Error fetching payment term codes:", error);
    res.status(500).json({ message: "Error fetching payment term codes" });
  }
});

// Route for fetching Country_Code dropdown options from Contact1 model
router.route("/countryCodes").get(async (req, res) => {
  try {
    const countryCodes = await Contact1.find({}, { Country_Code: 1, _id: 0 });
    res.json(countryCodes);
  } catch (error) {
    console.error("Error fetching country codes:", error);
    res.status(500).json({ message: "Error fetching country codes" });
  }
});

// Route for fetching Zone_Code dropdown options from Contact2 model
router.route("/zoneCodes").get(async (req, res) => {
  try {
    const zoneCodes = await Contact2.find({}, { Zone_Code: 1, _id: 0 });
    res.json(zoneCodes);
  } catch (error) {
    console.error("Error fetching zone codes:", error);
    res.status(500).json({ message: "Error fetching zone codes" });
  }
});

// Route for fetching Pool_Code dropdown options from Contact4 model
router.route("/poolCodes").get(async (req, res) => {
  try {
    const poolCodes = await Contact4.find({}, { Pool_Code: 1, _id: 0 });
    res.json(poolCodes);
  } catch (error) {
    console.error("Error fetching pool codes:", error);
    res.status(500).json({ message: "Error fetching pool codes" });
  }
});

// Route for fetching Station_Code dropdown options from Contact5 model
router.route("/stationCodes").get(async (req, res) => {
  try {
    const stationCodes = await Contact5.find({}, { Station_Code: 1, _id: 0 });
    res.json(stationCodes);
  } catch (error) {
    console.error("Error fetching station codes:", error);
    res.status(500).json({ message: "Error fetching station codes" });
  }
});

// Route for fetching City_Code dropdown options from Contact6 model
router.route("/cityCodes").get(async (req, res) => {
  try {
    const cityCodes = await Contact6.find({}, { City_Code: 1, _id: 0 });
    res.json(cityCodes);
  } catch (error) {
    console.error("Error fetching city codes:", error);
    res.status(500).json({ message: "Error fetching city codes" });
  }
});

// Route for fetching Soil_Code dropdown options from Contact20 model
router.route("/soilCodes").get(async (req, res) => {
  try {
    const soilCodes = await Contact20.find({}, { Soil_Code: 1, _id: 0 });
    res.json(soilCodes);
  } catch (error) {
    console.error("Error fetching soil codes:", error);
    res.status(500).json({ message: "Error fetching soil codes" });
  }
});

// Route for submitting Contact24 form
router.route("/Contact24").post(async (req, res) => {
  try {
    const {
      Customer_Number,
      Type,
      Primary_Contact_Number,
      Customer_Name,
      Currency_Code,
      Customer_Email,
      Customer_Phone,
      GST_Code,
      State_Code,
      PAN_Number,
      Tax_Preference,
      Payment_Term_Code,
      Country_Code,
      Zone_Code,
      Pool_Code,
      Station_Code,
      City_Code,
      Street,
      Pincode,
      Soil_Code,
      Visit_In_Days,
      Last_Visited_Date,
      Last_Visit_ID,
      ERP_Code,
    } = req.body;

    const contactData = {
      Customer_Number,
      Type,
      Primary_Contact_Number,
      Customer_Name,
      Currency_Code,
      Customer_Email,
      Customer_Phone,
      GST_Code,
      State_Code,
      PAN_Number,
      Tax_Preference,
      Payment_Term_Code,
      Country_Code,
      Zone_Code,
      Pool_Code,
      Station_Code,
      City_Code,
      Street,
      Pincode,
      Soil_Code,
      Visit_In_Days,
      Last_Visited_Date,
      Last_Visit_ID,
      ERP_Code,
    };

    await Contact24.create(contactData);
    return res.status(200).json({ message: "Contact form 24 submitted successfully" });
  } catch (error) {
    console.error("Error submitting contact form 24:", error);
    return res.status(500).json({ message: "Failed to submit contact form 24" });
  }
});

module.exports = router;
