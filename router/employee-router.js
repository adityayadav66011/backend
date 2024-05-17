const express = require("express");
const router = express.Router();

const EmployeeService=require("../models/employee-model");


router.get("/employees", async (req, res) => {
    try {
        const response=await EmployeeService.find();
        if(!response){
            res.status(404).json({msg:"No service found"});
            return;
        }
        res.status(200).json({response});
    } catch (error) {
      console.error("Error fetching filtered Contact Form 24 data:", error.message); // Log the detailed error message
      res.status(500).json({ message: "Failed to fetch filtered data", error: error.message }); // Send detailed error message in response
    }
});

router.post("/employees", async (req, res) => {
    try {
        const employee = new EmployeeService(req.body);
        await employee.save();
        res.status(201).send(employee);
      } catch (error) {
        res.status(400).send(error);
      }
});

router.get('/employees/:id', async (req, res) => {
    try {
      const employee = await EmployeeService.findById(req.params.id);
      if (!employee) {
        return res.status(404).send();
      }
      res.status(200).send(employee);
    } catch (error) {
      res.status(500).send(error);
    }
});

router.delete('/employees/:id', async (req, res) => {
    try {
      const employee = await EmployeeService.findByIdAndDelete(req.params.id);
      if (!employee) {
        return res.status(404).send();
      }
      res.status(200).send(employee);
    } catch (error) {
      res.status(500).send(error);
    }
});

  
module.exports = router;