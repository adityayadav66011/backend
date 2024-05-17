const {Schema,model,Mongoose} = require("mongoose");

const serviceSchema= new Schema({
   employeeNumber:{type:String, required:true},
   type:{type:String, required:true},
   name:{type:String, required:true},
   userId:{type:String, required:true},
   email:{type:String, required:true},
   phone:{type:String, required:true},
   countryCode:{type:String, required:true},
   zoneCode:{type:String, required:true},
   stateCode:{type:String, required:true},
   poolCode:{type:String, required:true},
   stationCode:{type:String, required:true},
   cityCode:{type:String, required:true},
   street:{type:String, required:true},
   pincode:{type:String, required:true}
});

const EmployeeService= new model("Employee", serviceSchema);

module.exports= EmployeeService;