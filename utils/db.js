// utils/db.js
const { MongoClient } = require('mongodb');

const uri = 'mongodb+srv://ay81792:Ragnarok%401@cluster0.d3p3ljr.mongodb.net/mern_admin?retryWrites=true&w=majority&appName=Cluster0';
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

let dbInstance;

const connectDb = async () => {
  if (dbInstance) return dbInstance;
  await client.connect();
  dbInstance = client.db('mern_admin');
  console.log('Connected to MongoDB server');
  return dbInstance;
};

const closeDb = async () => {
  if (client && client.isConnected()) {
    await client.close();
    console.log('Disconnected from MongoDB server');
  }
};

module.exports = { connectDb, closeDb };
