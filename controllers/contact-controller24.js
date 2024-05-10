const { Schema, model } = require("mongoose");
const Contact24 = require("./contact-model24");



// Helper function to generate the next customer number
const generateNextCustomerNumber = async () => {
  try {
    const latestContact = await Contact24.findOne().sort({ Customer_Number: -1 });
    let nextNumber = 1;
    if (latestContact) {
      const currentNumber = parseInt(latestContact.Customer_Number.substr(2)); // Extract number part
      nextNumber = currentNumber + 1;
    }
    const formattedNextNumber = nextNumber.toString().padStart(5, "0"); // Pad with zeros
    return `CN${formattedNextNumber}`;
  } catch (error) {
    console.error("Error generating next customer number:", error);
    throw error;
  }
};

const contactForm24 = async (req, res) => {
  try {
    // Generate next customer number
    const nextCustomerNumber = await generateNextCustomerNumber();

    const {
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
      Customer_Number: nextCustomerNumber,
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

    // Create new Contact24 document
    await Contact24.create(contactData);

    return res.status(200).json({ message: "Contact form 24 submitted successfully" });
  } catch (error) {
    console.error("Error submitting contact form 24:", error);
    return res.status(500).json({ message: "Failed to submit contact form 24" });
  }
};

module.exports = contactForm24;
