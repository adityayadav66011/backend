const { Schema, model } = require("mongoose");

const PlanVisitModel = require("./PlanVisitModel");


const PlanVisitDetailSchema = new Schema({
  Visit_Code: {
    type: String,
    required: true,
  },
  Plan_Code: {
    type: String,
    required: true,
    enum: PlanVisitModel.schema.path("Plan_Code").enumValues, // Dropdown populated from Contact18

  },
  Visit_Done_Date: { type: Date, required: true },
  Visit_Done_Time: { type: Date, required: true },
  Next_Date: { type: Date, required: true },
  Next_Time: { type: Date, required: true }
});

const PlanVisitDetail = model("PlanVisitDetail", PlanVisitDetailSchema);
module.exports = PlanVisitDetail;