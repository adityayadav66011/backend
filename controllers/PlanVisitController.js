const PlanVisitModel = require('../models/PlanVisitModel');
const PlanColleagueModel = require('../models/PlanColleagueModel');
const PlanVisitDetailModel = require('../models/PlanVisitDetailModel');
const PlanVisitRecommendedCropsModel = require('../models/PlanVisitRecommendedCropsModel');
const PlanVisitRecommendedMaterialModel = require('../models/PlanVisitRecommendedMaterialModel');

const generateCustomerCode = (shortCode, lastCode) => {
    const codeNumber = parseInt(lastCode.slice(2), 10) + 1; // Extract the numeric part and increment
    return shortCode + codeNumber.toString().padStart(4, '0'); // Format the new customer code
};


const Create = async (req, res) => {
    try {
        // Extract data from the request body
        const {
            Customer_Code,
            Last_Visited_Date,
            Recommended_date,
            Days_Since_Visit_Pending,
            Planned_Date,
            Planned_Time,
            Remarks
        } = req.body;

        const lastEntry = await PlanVisitModel.findOne({}, {}, { sort: { 'Plan_Code': -1 } });
        const previousCode = lastEntry ? lastEntry.Plan_Code : "PV0000";
        const newCode = generateCustomerCode("PV", previousCode);
        var planData = await PlanVisitModel.create({
            Plan_Code: newCode,
            Customer_Code,
            Last_Visited_Date: Last_Visited_Date || null,
            Recommended_date: Recommended_date || null,
            Days_Since_Visit_Pending: Days_Since_Visit_Pending || 0,
            Planned_Date: Planned_Date || null,
            Planned_Time: Planned_Time || null,
            Remarks: Remarks || "",
            Visit_Done_On: null
        });

        // Send a success response
        return res.status(200).json(planData);
    } catch (error) {
        // Handle errors and send an error response
        console.error("Error while saving data:", error);
        return res.status(500).json({ message: "Error while saving data" });
    }
};

// // Controller to fetch dropdown options
const getList = async (req, res) => {
    try {
        let queryForDb = {
            ...(req.query.customer_code ? { Customer_Code: req.query.customer_code } : {}),
            ...(req.query.plan_code ? { Plan_Code: req.query.plan_code } : {}),
        };


        const data = await PlanVisitModel.find(queryForDb);
        res.json(data);
    } catch (error) {
        console.error("Error fetching data:", error);
        res.status(500).json({ message: "Error fetching data" });
    }
};

const getPlanColleague = async (req, res) => {
    try {
        let queryForDb = {
            ...(req.query.plan_code ? { Plan_Code: req.query.plan_code } : {}),
        };

        const data = await PlanColleagueModel.find(queryForDb);
        res.json(data);
    } catch (error) {
        console.error("Error fetching data:", error);
        res.status(500).json({ message: "Error fetching data" });
    }
};

const cretePlanColleague = async (req, res) => {
    try {

        let employeeData = req.body.filter(x => x.Plan_Code && x.Employee_Number).map(x => {
            return {
                Plan_Code: x.Plan_Code,
                Employee_Number: x.Employee_Number
            }
        });

        await PlanColleagueModel.deleteMany({ Plan_Code: employeeData[0].Plan_Code });
        var planData = await PlanColleagueModel.insertMany(employeeData);
        return res.status(200).json(planData);
    } catch (error) {
        console.error("Error saving data:", error);
        res.status(500).json({ message: "Error saving data" });
    }
};


const CreateVisitDetail = async (req, res) => {
    try {
        // Extract data from the request body
        const {
            Plan_Code,
            Next_Date,
            Next_Time
        } = req.body;

        const lastEntry = await PlanVisitDetailModel.findOne({}, {}, { sort: { 'Plan_Code': -1 } });
        const previousCode = lastEntry ? lastEntry.Plan_Code : "VC0000";
        const newCode = generateCustomerCode("VC", previousCode);
        var planData = await PlanVisitDetailModel.create({
            Visit_Code: newCode,
            Plan_Code,
            Next_Date,
            Next_Time,
            Visit_Done_Date: new Date(),
            Visit_Done_Time: new Date()
        });

        // Send a success response
        return res.status(200).json(planData);
    } catch (error) {
        // Handle errors and send an error response
        console.error("Error while saving data:", error);
        return res.status(500).json({ message: "Error while saving data" });
    }
};
const getVisitDetail = async (req, res) => {
    try {
        let queryForDb = {
            //  ...(req.query.include_visit_done ? { Visit_Done_On: (req.query.include_visit_done == "0" ? null : { $ne: null }) } : {}),

            ...(req.query.visit_code ? { Visit_Code: req.query.visit_code } : {}),
        };


        const data = await PlanVisitDetailModel.find(queryForDb);
        res.json(data);
    } catch (error) {
        console.error("Error fetching data:", error);
        res.status(500).json({ message: "Error fetching data" });
    }
};




const CreateRecommendCrop = async (req, res) => {
    try {
        // Extract data from the request body
        const {
            Visit_Code,
            Crop_Code,
            Season_Code
        } = req.body;

        var planData = await PlanVisitRecommendedCropsModel.create({
            Visit_Code,
            Crop_Code,
            Season_Code,
        });

        // Send a success response
        return res.status(200).json(planData);
    } catch (error) {
        // Handle errors and send an error response
        console.error("Error while saving data:", error);
        return res.status(500).json({ message: "Error while saving data" });
    }
};
const getRecommendCrop = async (req, res) => {
    try {
        let queryForDb = {
            //  ...(req.query.include_visit_done ? { Visit_Done_On: (req.query.include_visit_done == "0" ? null : { $ne: null }) } : {}),

            ...(req.query.visit_code ? { Visit_Code: req.query.visit_code } : {}),
        };


        const data = await PlanVisitRecommendedCropsModel.find(queryForDb);
        res.json(data);
    } catch (error) {
        console.error("Error fetching data:", error);
        res.status(500).json({ message: "Error fetching data" });
    }
};


const CreateRecommendMaterial = async (req, res) => {
    try {
        // Extract data from the request body
        const {
            Visit_Code,
            Material_Code,
            Season_Code
        } = req.body;

        var planData = await PlanVisitRecommendedMaterialModel.create({
            Visit_Code,
            Material_Code,
            Season_Code,
        });

        // Send a success response
        return res.status(200).json(planData);
    } catch (error) {
        // Handle errors and send an error response
        console.error("Error while saving data:", error);
        return res.status(500).json({ message: "Error while saving data" });
    }
};
const getRecommendMaterial = async (req, res) => {
    try {
        let queryForDb = {
            //  ...(req.query.include_visit_done ? { Visit_Done_On: (req.query.include_visit_done == "0" ? null : { $ne: null }) } : {}),

            ...(req.query.visit_code ? { Visit_Code: req.query.visit_code } : {}),
        };


        const data = await PlanVisitRecommendedMaterialModel.find(queryForDb);
        res.json(data);
    } catch (error) {
        console.error("Error fetching data:", error);
        res.status(500).json({ message: "Error fetching data" });
    }
};

const getLastRecommendMaterial = async (req, res) => {
    try {
        const customer_code = req.params.customer_code;
        var Plan_Codes = await PlanVisitModel.find({ Customer_Code: customer_code }, { Plan_Code: 1, _id: 0 })

        let Plan_CodesIds = Plan_Codes.map(x => x.Plan_Code);
        var data = await PlanVisitDetailModel.findOne({ Plan_Code: { $in: Plan_CodesIds }, Visit_Done_Date: { $ne: null } }, {}, { sort: { "Visit_Done_Date": "desc" } })
        if (data!=null  ) {
            const dataResp = await PlanVisitRecommendedMaterialModel.find({Visit_Code:data.Visit_Code});
            res.json(dataResp);
        } else {
            res.json([]);
        }

    } catch (error) {
        console.error("Error fetching data:", error);
        res.status(500).json({ message: "Error fetching data" });
    }
};

const getLastRecommendCrop = async (req, res) => {
    try {
        const customer_code = req.params.customer_code;
        var Plan_Codes = await PlanVisitModel.find({ Customer_Code: customer_code }, { Plan_Code: 1, _id: 0 })

        let Plan_CodesIds = Plan_Codes.map(x => x.Plan_Code);
        var data = await PlanVisitDetailModel.findOne({ Plan_Code: { $in: Plan_CodesIds }, Visit_Done_Date: { $ne: null } }, {}, { sort: { "Visit_Done_Date": "desc" } })
        if (data!=null  ) {
            const dataResp = await PlanVisitRecommendedCropsModel.find({Visit_Code:data.Visit_Code});
            res.json(dataResp);
        } else {
            res.json([]);
        }

    } catch (error) {
        console.error("Error fetching data:", error);
        res.status(500).json({ message: "Error fetching data" });
    }
};

module.exports = {
    Create,
    getList,
    getPlanColleague,
    cretePlanColleague,
    CreateVisitDetail,
    getVisitDetail,
    CreateRecommendCrop,
    getRecommendCrop,
    CreateRecommendMaterial,
    getRecommendMaterial,
    getLastRecommendMaterial,
    getLastRecommendCrop
    // Update
};
