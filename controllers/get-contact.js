const Contact24 = require('../models/contact-model24');

// Controller to fetch data from Contact24 form based on query
const fetchContact24Data = async (req, res) => {
  try {
    const today = new Date();
    const tenDaysLater = new Date(today);
    tenDaysLater.setDate(tenDaysLater.getDate() + 10);

    const filteredData = await Contact24.find({
      $expr: {
        $lt: [
          { $add: ['$Last_Visited', { $multiply: [{ $toInt: '$Visit_In_Days' }, 24 * 60 * 60 * 1000] }] }, // Convert Visit_In_Days to integer
          tenDaysLater
        ]
      }
    }).select('Customer_Name City_Code Last_Visited Visit_In_Days');

    return res.status(200).json(filteredData);
  } catch (error) {
    console.error("Error fetching Contact24 data:", error);
    return res.status(500).json({ message: "Failed to fetch Contact24 data" });
  }
};

module.exports = {
  fetchContact24Data,
};
