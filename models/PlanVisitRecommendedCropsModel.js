const { Schema, model } = require("mongoose");

const PlanVisitDetailModel= require("./PlanVisitDetailModel");
const cropMasterModel = require("./contact-model18"); 
const seasonMasterModel = require("./contact-model21"); 


const PlanVisitRecommendedCropSchema = new Schema({
  Visit_Code: {
    type: String,
    required: true,
    enum: PlanVisitDetailModel.schema.path("Visit_Code").enumValues, // Dropdown populated from Contact18

  },
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
});

const PlanVisitRecommendedCropsModel = model("PlanVisit_RecommendedCrops", PlanVisitRecommendedCropSchema);
module.exports = PlanVisitRecommendedCropsModel;