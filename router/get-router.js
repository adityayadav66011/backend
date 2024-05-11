const express = require("express");
const router = express.Router();
const Contact24 = require("../models/contact-model24");

// Route to fetch filtered Contact Form 24 data
router.get("/filteredData", async (req, res) => {
  try {
    // Calculate the date 10 days from now
    const tenDaysFromNow = new Date();
    tenDaysFromNow.setDate(tenDaysFromNow.getDate() + 10);

    // Find Contact Form 24 entries where last visit date + visit in days < ten days from now
    const filteredData = await Contact24.find({
      $expr: {
        $lt: [
          { $toDate: '$Last_Visited' },
          { $toDate: { $add: ['$Last_Visited', { $multiply: [{ $toInt: '$Visit_In_Days' }, 24 * 60 * 60 * 1000] }] } }
        ]
      }
    }).select('Customer_Name City_Code Last_Visited Visit_In_Days');

    res.json(filteredData);
  } catch (error) {
    console.error("Error fetching filtered Contact Form 24 data:", error.message); // Log the detailed error message
    res.status(500).json({ message: "Failed to fetch filtered data", error: error.message }); // Send detailed error message in response
  }
});

module.exports = router;
