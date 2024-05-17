const express = require("express");
const router = express.Router();
const Contact24 = require("../models/contact-model24");

// Route to fetch all dropdown options
router.get("/dropdowns", async (req, res) => {
  try {
    const dropdowns = {
      Currency_Name: Contact24.schema.path("Currency_Name").enumValues,
      GST_Name: Contact24.schema.path("GST_Name").enumValues,
      State_Code: Contact24.schema.path("State_Code").enumValues,
      paymentTermCode: Contact24.schema.path("paymentTermCode").enumValues,
      Country_Code: Contact24.schema.path("Country_Code").enumValues,
      Zone_Code: Contact24.schema.path("Zone_Code").enumValues,
      Pool_Code: Contact24.schema.path("Pool_Code").enumValues,
      Station_Code: Contact24.schema.path("Station_Code").enumValues,
      City_Code: Contact24.schema.path("City_Code").enumValues,
      Soil_Name: Contact24.schema.path("Soil_Name").enumValues,
    };
    res.json(dropdowns);
  } catch (error) {
    console.error("Error fetching dropdown options:", error);
    res.status(500).json({ message: "Failed to fetch dropdown options" });
  }
});

// Route to submit Contact Form 24
router.post("/Contact24", async (req, res) => {
  try {
    // Extract data from the request body
    const {
      Customer_Code,
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

    // Generate new Customer_Code (CC0001, CC0002, etc.)
    const lastEntry = await Contact24.findOne({}, {}, { sort: { 'Customer_Code': -1 } });
    const previousCustomerCode = lastEntry ? lastEntry.Customer_Code : "CC0001"; // Default to CC0001 if no previous entries
    const newCustomerCode = generateCustomerCode(previousCustomerCode);

    // Create new Contact24 document
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

    // Send success response
    return res.status(200).json({ message: "Contact form 24 submitted successfully" });
  } catch (error) {
    // Handle errors and send error response
    console.error("Error submitting Contact24 form:", error);
    return res.status(500).json({ message: "Failed to submit Contact24 form" });
  }
});

// Function to generate a new customer code based on the last customer code
const generateCustomerCode = (lastCustomerCode) => {
  const codeNumber = parseInt(lastCustomerCode.slice(2), 10) + 1; // Extract the numeric part and increment
  return 'CC' + codeNumber.toString().padStart(4, '0'); // Format the new customer code
};

module.exports = router;