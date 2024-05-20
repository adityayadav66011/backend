const { MongoClient } = require('mongodb');

// Connection URI
const uri = 'mongodb+srv://ay81792:Ragnarok%401@cluster0.d3p3ljr.mongodb.net/mern_admin?retryWrites=true&w=majority&appName=Cluster0'; // Replace with your MongoDB connection URI

// Database Name
const dbName = 'mern_admin'; // Replace with your database name

// Create a new MongoClient
const client = new MongoClient(uri);

// Function to fetch Contact24 data
const fetchContact24Data = async (req, res) => {
  try {
    // Connect the client to the server
    await client.connect();
    console.log('Connected to MongoDB server');

    // Select the database
    const db = client.db(dbName);

    // Specify the collection
    const collection = db.collection('contact24'); // Replace with your collection name

    const today = new Date();
    console.log('Today:', today);

    const tenDaysLater = new Date(today);
    tenDaysLater.setDate(tenDaysLater.getDate() + 10);
    console.log('Ten days later:', tenDaysLater);

    // Define your query
    const query = {
      $expr: {
        $lt: [
          { $toDate: '$Last_Visited' }, // Convert Last_Visited to date type
          { $add: [tenDaysLater, { $multiply: ['$Visit_In_Days', 24 * 60 * 60 * 1000] }] } // Calculate tenDaysLater + Visit_In_Days in milliseconds
        ]
      }
    };
    console.log('Query:', query);

    // Fetch records matching the query
    const documents = await collection.find(query).project({
      Customer_Code: 1,
      Customer_Name: 1,
      City_Code: 1,
      Last_Visited: 1,
      Visit_In_Days: 1,
      _id: 0 // Exclude _id field from results
    }).toArray();

    console.log('Fetched documents:', documents);

    // Close the client
    await client.close();
    console.log('Disconnected from MongoDB server');

    return res.status(200).json(documents);
  } catch (error) {
    console.error("Error fetching Contact24 data:", error);
    // Close the client if an error occurs
    await client.close();
    console.log('Disconnected from MongoDB server due to error');
    return res.status(500).json({ message: "Failed to fetch Contact24 data" });
  }
};

module.exports = {
  fetchContact24Data,
};
