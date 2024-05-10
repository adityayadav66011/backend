const ContactModelForm = require('../models/contact-model22');

// Controller to handle form submission for Contact22 form
const submitContact22Form = async (req, res) => {
  try {
    // Extract data from the request body
    const { materialType, materialName } = req.body;

    // Fetch the previous material code from the database
    const lastEntry = await ContactModelForm.findOne({}, {}, { sort: { 'materialCode': -1 } });
    const previousMaterialCode = lastEntry ? lastEntry.materialCode : "MC0001"; // Default to MC0001 if no previous entries

    // Create a new ContactModelForm document with the received data and generated materialCode
    const newMaterialCode = generateMaterialCode(previousMaterialCode);
    await ContactModelForm.create({ materialCode: newMaterialCode, materialType, materialName });

    // Send a success response
    return res.status(200).json({ message: "Contact form 22 submitted successfully" });
  } catch (error) {
    // Handle errors and send an error response
    console.error("Error submitting Contact22 form:", error);
    return res.status(500).json({ message: "Failed to submit Contact22 form" });
  }
};

// Function to generate a new materialCode based on the last materialCode
const generateMaterialCode = (lastMaterialCode) => {
  const codeNumber = parseInt(lastMaterialCode.slice(2), 10) + 1; // Extract the numeric part and increment
  return 'MC' + codeNumber.toString().padStart(4, '0'); // Format the new materialCode
};

module.exports = {
  submitContact22Form,
};
