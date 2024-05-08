const mongoose = require("mongoose");

//const URI="mongodb://127.0.0.1:27017/mern_admin"
//mongoose.connect(URI);
const URI="mongodb+srv://ay81792:Ragnarok%401@cluster0.d3p3ljr.mongodb.net/mern_admin?retryWrites=true&w=majority&appName=Cluster0";
const connectDb = async() =>{
    try {
      await mongoose.connect(URI);
      console.log("connection sucessful to database");
    } catch (error) {
       console.error("database connetion fail"); 
       process.exit(0);
    }
};

module.exports = connectDb;