const CropMaterialMappingModel = require('../models/CropMaterialMappingModel');

// Controller to create a new mapping
const Create = async (req, res) => {
    try {
        const { Crop_Code, Material_Code } = req.body;
        await CropMaterialMappingModel.create({ Crop_Code, Material_Code });
        return res.status(200).json({ message: "Saved Successfully" });
    } catch (error) {
        console.error("Error while saving mapping:", error);
        return res.status(500).json({ message: "Error while saving mapping" });
    }
};

// Controller to fetch dropdown options based on query parameters
const getList = async (req, res) => {
    try {
        let queryForDb = {
            ...(req.query.soil_code ? { Soil_Code: req.query.soil_code } : {}),
            ...(req.query.material_code ? { Material_Code: req.query.material_code } : {}),
        };
        
        const data = await CropMaterialMappingModel.find(queryForDb);
        res.json(data);
    } catch (error) {
        console.error("Error fetching data:", error);
        res.status(500).json({ message: "Error fetching data" });
    }
};

// Controller to fetch unique crop codes
const getCropCodes = async (req, res) => {
    try {
        const cropCodes = await CropMaterialMappingModel.distinct('Crop_Code');
        res.json(cropCodes);
    } catch (error) {
        console.error("Error fetching crop codes:", error);
        res.status(500).json({ message: "Error fetching crop codes" });
    }
};

// Controller to fetch unique material codes
const getMaterialCodes = async (req, res) => {
    try {
        const materialCodes = await CropMaterialMappingModel.distinct('Material_Code');
        res.json(materialCodes);
    } catch (error) {
        console.error("Error fetching material codes:", error);
        res.status(500).json({ message: "Error fetching material codes" });
    }
};

// Controller to update an existing mapping
const Update = async (req, res) => {
    try {
        const id = req.params.id;
        const { Crop_Code, Material_Code } = req.body;
        await CropMaterialMappingModel.findByIdAndUpdate(id, { Crop_Code, Material_Code });
        return res.status(200).json({ message: "Updated Successfully" });
    } catch (error) {
        console.error("Error while updating mapping:", error);
        return res.status(500).json({ message: "Error while updating mapping" });
    }
};

module.exports = {
    Create,
    getList,
    getCropCodes,
    getMaterialCodes,
    Update
};
