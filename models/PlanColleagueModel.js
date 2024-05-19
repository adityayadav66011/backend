const { Schema, model } = require("mongoose");

const PlanVisitModel = require("./PlanVisitModel");
const EmployeeModel = require("./employee-model");


const PlanColleaguesSchema = new Schema({
  Plan_Code: {
    type: String,
    required: true,
    enum: PlanVisitModel.schema.path("Plan_Code").enumValues, // Dropdown populated from Contact18

  },
  Employee_Number: { type: String, required: true,
    enum:EmployeeModel.schema.path("employeeNumber").enumValues
   },
});

const PlanColleagueModel = model("PlanColleague", PlanColleaguesSchema);
module.exports = PlanColleagueModel;