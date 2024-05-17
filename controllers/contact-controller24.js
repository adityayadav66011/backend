const Contact24 = require('../models/contact-model24');

// Controller to handle form submission for Contact24 form
const submitContact24Form = async (req, res) => {
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

    // Fetch the previous customer code from the database
    const lastEntry = await Contact24.findOne({}, {}, { sort: { 'Customer_Code': -1 } });
    const previousCustomerCode = lastEntry ? lastEntry.Customer_Code : "CC0001"; // Default to CC0001 if no previous entries

    // Create a new Contact24 document with the received data and generated customer code
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

    // Send a success response
    return res.status(200).json({ message: "Contact form 24 submitted successfully" });
  } catch (error) {
    // Handle errors and send an error response
    console.error("Error submitting Contact24 form:", error);
    return res.status(500).json({ message: "Failed to submit Contact24 form" });
  }
};

// Function to generate a new customer code based on the last customer code
const generateCustomerCode = (lastCustomerCode) => {
  const codeNumber = parseInt(lastCustomerCode.slice(2), 10) + 1; // Extract the numeric part and increment
  return 'CC' + codeNumber.toString().padStart(4, '0'); // Format the new customer code
};

module.exports = {
  submitContact24Form,
};