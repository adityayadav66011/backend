const CropMaterialMappingModel = require('../models/CropMaterialMappingModel');


const Create = async (req, res) => {
    try {
        // Extract data from the request body
        const {
            Crop_Code,
            Material_Code,
        } = req.body;

        // // Fetch the previous customer code from the database
        // const lastEntry = await Contact24.findOne({}, {}, { sort: { 'Customer_Code': -1 } });
        // const previousCustomerCode = lastEntry ? lastEntry.Customer_Code : "CC0001"; // Default to CC0001 if no previous entries

        // // Create a new Contact24 document with the received data and generated customer code
        // const newCustomerCode = generateCustomerCode(previousCustomerCode);
        await CropMaterialMappingModel.create({
          Crop_Code:Crop_Code,
          Material_Code:Material_Code
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
            ...(req.query.material_code?{Material_Code:req.query.material_code}:{}),
        };
        
        
        const data = await CropMaterialMappingModel.find(queryForDb);

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
            Material_Code,
        } = req.body;

        // // Fetch the previous customer code from the database
        // const lastEntry = await Contact24.findOne({}, {}, { sort: { 'Customer_Code': -1 } });
        // const previousCustomerCode = lastEntry ? lastEntry.Customer_Code : "CC0001"; // Default to CC0001 if no previous entries

        // // Create a new Contact24 document with the received data and generated customer code
        // const newCustomerCode = generateCustomerCode(previousCustomerCode);
        await CropMaterialMappingModel.findByIdAndUpdate(id,{
          Crop_Code:Crop_Code,
          Material_Code:Material_Code,
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
