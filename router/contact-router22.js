const express = require("express");
const router = express.Router();
const ContactModelForm = require("../models/contact-model22");

// Route for submitting Contact22 form
router.post("/contact22", async (req, res) => {
  try {
    const { materialType, materialName } = req.body;

    // Fetch the previous material code from the database
    const lastEntry = await ContactModelForm.findOne({}, {}, { sort: { 'materialCode': -1 } });
    const previousMaterialCode = lastEntry ? lastEntry.materialCode : "MC0001"; // Default to MC0001 if no previous entries

    // Create a new ContactModelForm document with the received data and generated materialCode
    const newMaterialCode = generateMaterialCode(previousMaterialCode);
    await ContactModelForm.create({ materialCode: newMaterialCode, materialType, materialName });

    // Send a success response
    return res.status(200).json({ message: "Contact form 22 created successfully" });
  } catch (error) {
    // Handle errors and send an error response
    console.error("Error submitting Contact22 form:", error);
    return res.status(500).json({ message: "Failed to create contact form 22" });
  }
});

// Function to generate a new materialCode based on the last materialCode
const generateMaterialCode = (lastMaterialCode) => {
  const codeNumber = parseInt(lastMaterialCode.slice(2), 10) + 1; // Extract the numeric part and increment
  return 'MC' + codeNumber.toString().padStart(4, '0'); // Format the new materialCode
};

// Route to fetch the previous material code
router.get("/previousMaterialCode", async (req, res) => {
  try {
    // Fetch the last entry from the database to get the previous material code
    const lastEntry = await ContactModelForm.findOne({}, {}, { sort: { 'createdAt': -1 } });
    const previousMaterialCode = lastEntry ? lastEntry.materialCode : "MC0001"; // Default to MC0001 if there are no entries

    res.status(200).json({ previousMaterialCode });
  } catch (error) {
    console.error("Error fetching previous material code:", error);
    res.status(500).json({ message: "Failed to fetch previous material code" });
  }
});

module.exports = router;
