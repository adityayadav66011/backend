const { Schema, model } = require("mongoose");

const cropMasterModel = require("./contact-model18"); 
const soilMasterModel = require("./contact-model20"); 
const seasonMasterModel = require("./contact-model21"); 


const cropSoilSeasonMapSchema = new Schema({
  Crop_Code:{
    type: String,
    required: true,
    enum: cropMasterModel.schema.path("Crop_Code").enumValues, 
  },
  Season_Code: {
    type: String,
    required: true,
    enum: seasonMasterModel.schema.path("Season_Code").enumValues, // Dropdown populated from Contact18
  }, 
  Soil_Code: {
    type: String,
    required: true,
    enum: soilMasterModel.schema.path("Soil_Code").enumValues, // Dropdown populated from Contact18
  }, 
});

const CropSoilSeasonMapModel = model("CropSoilSeasonMapping", cropSoilSeasonMapSchema);
module.exports = CropSoilSeasonMapModel;