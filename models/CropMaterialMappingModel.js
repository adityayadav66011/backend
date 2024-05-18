const { Schema, model } = require("mongoose");

const cropMasterModel = require("./contact-model18"); 
const materialMasterModel = require("./contact-model22"); 


const cropMaterialMapSchema = new Schema({
  Crop_Code:{
    type: String,
    required: true,
    enum: cropMasterModel.schema.path("Crop_Code").enumValues, 
  },
  Material_Code: {
    type: String,
    required: true,
    enum: materialMasterModel.schema.path("materialCode").enumValues, // Dropdown populated from Contact18
  },
});

const CropMaterialMappingModel = model("CropMaterialMapping", cropMaterialMapSchema);
module.exports = CropMaterialMappingModel;