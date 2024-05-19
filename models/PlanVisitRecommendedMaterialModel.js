const { Schema, model } = require("mongoose");

const PlanVisitDetailModel= require("./PlanVisitDetailModel");
const seasonMasterModel = require("./contact-model21"); 
const materialMasterModel = require("./contact-model22"); 


const PlanVisitRecommendedMaterialSchema = new Schema({
  Visit_Code: {
    type: String,
    required: true,
    enum: PlanVisitDetailModel.schema.path("Visit_Code").enumValues, // Dropdown populated from Contact18

  },
  Material_Code: {
    type: String,
    required: true,
    enum: materialMasterModel.schema.path("materialCode").enumValues, // Dropdown populated from Contact18
  },
    Season_Code: {
    type: String,
    required: true,
    enum: seasonMasterModel.schema.path("Season_Code").enumValues, // Dropdown populated from Contact18
  }, 
});

const PlanVisitRecommendedMaterialModel = model("PlanVisit_RecommendedMaterial", PlanVisitRecommendedMaterialSchema);
module.exports = PlanVisitRecommendedMaterialModel;