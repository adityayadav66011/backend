const PlanVisitModel = require('../models/PlanVisitModel');

const generateCustomerCode = (lastCode) => {
    const codeNumber = parseInt(lastCode.slice(2), 10) + 1; // Extract the numeric part and increment
    return 'PV' + codeNumber.toString().padStart(4, '0'); // Format the new customer code
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
        const newCode = generateCustomerCode(previousCode);
        await PlanVisitModel.create({
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
        return res.status(200).json({ message: "Saved Successfully" });
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
            ...(req.query.include_visit_done ? { Visit_Done_On: (req.query.include_visit_done == "0" ? null :  { $ne : null } ) } : {}),
            ...(req.query.customer_code ? { Customer_Code:req.query.customer_code } : {}),
        };


        const data = await PlanVisitModel.find(queryForDb);
        res.json(data);
    } catch (error) {
        console.error("Error fetching data:", error);
        res.status(500).json({ message: "Error fetching data" });
    }
};


// const Update = async (req, res) => {
//     try {
//         const id = req.params.id;

//         // Extract data from the request body
//         const {
//             Crop_Code,
//             Season_Code,
//             Soil_Code,
//         } = req.body;

//         // // Fetch the previous customer code from the database
//         // const lastEntry = await Contact24.findOne({}, {}, { sort: { 'Customer_Code': -1 } });
//         // const previousCustomerCode = lastEntry ? lastEntry.Customer_Code : "CC0001"; // Default to CC0001 if no previous entries

//         // // Create a new Contact24 document with the received data and generated customer code
//         // const newCustomerCode = generateCustomerCode(previousCustomerCode);
//         await CropSoilSeasonMappingModel.findByIdAndUpdate(id, {
//             Crop_Code: Crop_Code,
//             Season_Code: Season_Code,
//             Soil_Code: Soil_Code
//         });

//         // Send a success response
//         return res.status(200).json({ message: "Update Successfully" });
//     } catch (error) {
//         // Handle errors and send an error response
//         console.error("Error while Update mapping:", error);
//         return res.status(500).json({ message: "Error while Update mapping" });
//     }
// };

module.exports = {
    Create,
    getList,
    // Update
};
