const CropSoilSeasonMappingModel = require('../models/CropSoilSeasonMappingModel');
// const Contact16 = require('../models/contact-model16');
// const Contact17 = require('../models/contact-model17');
// const Contact3 = require('../models/contact-model3');
// const Contact23 = require('../models/contact-model23');
// const Contact1 = require('../models/contact-model1');
// const Contact2 = require('../models/contact-model2');
// const Contact4 = require('../models/contact-model4');
// const Contact5 = require('../models/contact-model5');
// const Contact6 = require('../models/contact-model6');
// const Contact20 = require('../models/contact-model20');



const Create = async (req, res) => {
    try {
        // Extract data from the request body
        const {
            Crop_Code,
            Season_Code,
            Soil_Code,
        } = req.body;

        // // Fetch the previous customer code from the database
        // const lastEntry = await Contact24.findOne({}, {}, { sort: { 'Customer_Code': -1 } });
        // const previousCustomerCode = lastEntry ? lastEntry.Customer_Code : "CC0001"; // Default to CC0001 if no previous entries

        // // Create a new Contact24 document with the received data and generated customer code
        // const newCustomerCode = generateCustomerCode(previousCustomerCode);
        await CropSoilSeasonMappingModel.create({
          Crop_Code:Crop_Code,
          Season_Code:Season_Code,
          Soil_Code:Soil_Code
        });

        // Send a success response
        return res.status(200).json({ message: "Saved Successfully" });
    } catch (error) {
        // Handle errors and send an error response
        console.error("Error while saving mapping:", error);
        return res.status(500).json({ message: "Error while saving mapping" });
    }
};

// Controller to fetch dropdown options
const getList = async (req, res) => {
    try {
        let queryForDb ={
            ...(req.query.soil_code?{Soil_Code:req.query.soil_code}:{}),
            ...(req.query.season_code?{Season_Code:req.query.season_code}:{}),
            ...(req.query.crop_code?{Crop_Code:req.query.crop_code}:{})
        };
        
        
        const data = await CropSoilSeasonMappingModel.find(queryForDb);

        res.json(data);
    } catch (error) {
        console.error("Error fetching data:", error);
        res.status(500).json({ message: "Error fetching data" });
    }
};


const Update = async (req, res) => {
    try {
        const id = req.params.id;

        // Extract data from the request body
        const {
            Crop_Code,
            Season_Code,
            Soil_Code,
        } = req.body;

        // // Fetch the previous customer code from the database
        // const lastEntry = await Contact24.findOne({}, {}, { sort: { 'Customer_Code': -1 } });
        // const previousCustomerCode = lastEntry ? lastEntry.Customer_Code : "CC0001"; // Default to CC0001 if no previous entries

        // // Create a new Contact24 document with the received data and generated customer code
        // const newCustomerCode = generateCustomerCode(previousCustomerCode);
        await CropSoilSeasonMappingModel.findByIdAndUpdate(id,{
          Crop_Code:Crop_Code,
          Season_Code:Season_Code,
          Soil_Code:Soil_Code
        });

        // Send a success response
        return res.status(200).json({ message: "Update Successfully" });
    } catch (error) {
        // Handle errors and send an error response
        console.error("Error while Update mapping:", error);
        return res.status(500).json({ message: "Error while Update mapping" });
    }
};

module.exports = {
    Create,
    getList,
    Update
};
