const { Schema, model } = require("mongoose");

const customerMasterModel = require("./contact-model24");


const planVisitModelSchema = new Schema({
  Plan_Code: {
    type: String,
    required: true,
  },
  Customer_Code: {
    type: String,
    required: false,
    enum: customerMasterModel.schema.path("Customer_Code").enumValues, // Dropdown populated from Contact18
  },
  Last_Visited_Date: { type: Date, required: false },
  Recommended_Date: { type: Date, required: false },
  Days_Since_Visit_Pending: { type: Number, required: false },
  Planned_Date: { type: Date, required: false },
  Planned_Time: { type: Date, required: false },
  Remarks: { type: String, required: false },
});

const PlanVisitModel = model("PlanVisit", planVisitModelSchema);
module.exports = PlanVisitModel;