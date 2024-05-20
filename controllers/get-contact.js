// controllers/get-contact.js
const { connectDb } = require('../utils/db');

const fetchContact24Data = async (req, res) => {
  try {
    const db = await connectDb();
    const collection = db.collection('contact24');

    const today = new Date();
    const tenDaysLater = new Date(today);
    tenDaysLater.setDate(tenDaysLater.getDate() + 10);

    const query = {
      $expr: {
        $lt: [
          { $toDate: '$Last_Visited' },
          { $add: [tenDaysLater, { $multiply: ['$Visit_In_Days', 24 * 60 * 60 * 1000] }] }
        ]
      }
    };

    const documents = await collection.find(query).project({
      Customer_Code: 1,
      Customer_Name: 1,
      City_Code: 1,
      Last_Visited: 1,
      Visit_In_Days: 1,
      _id: 0
    }).toArray();

    console.log('Fetched documents:', documents);
    return res.status(200).json(documents);
  } catch (error) {
    console.error("Error fetching Contact24 data:", error);
    return res.status(500).json({ message: "Failed to fetch Contact24 data" });
  }
};

module.exports = { fetchContact24Data };
