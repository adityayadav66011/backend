const mongoose = require('mongoose');

const uri = 'mongodb+srv://ay81792:Ragnarok%401@cluster0.d3p3ljr.mongodb.net/mern_admin?retryWrites=true&w=majority&appName=Cluster0';

const connectDb = async () => {
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 30000 // Increase timeout to 30 seconds
    });
    console.log('Connected to MongoDB server');
  } catch (error) {
    console.error('Error connecting to MongoDB server:', error);
    throw error;
  }
};

const closeDb = async () => {
  try {
    await mongoose.connection.close();
    console.log('Disconnected from MongoDB server');
  } catch (error) {
    console.error('Error disconnecting from MongoDB server:', error);
  }
};

module.exports = { connectDb, closeDb };
