const Contact12 = require("../models/contact-model12");

const contactForm12 = async (req, res) => {
    try {
        const { User_Id, Company_Code, Branch_Code, Function_Codes, Employee_Code, Employee_Name, Emp_Mobile_No, Emp_Mail_Id, Functional_Level_Code, Admin_Rpt_Manager_Code, Function_Rpt_Manager_Code } = req.body;
        await Contact12.create({ User_Id, Company_Code, Branch_Code, Function_Codes, Employee_Code, Employee_Name, Emp_Mobile_No, Emp_Mail_Id, Functional_Level_Code, Admin_Rpt_Manager_Code, Function_Rpt_Manager_Code });
        return res.status(200).json({ message: "Message sent successfully" });
    } catch (error) {
        console.error("Error creating contact (Form 12):", error);
        return res.status(500).json({ message: "Message not delivered" });
    }
};

module.exports = contactForm12;
