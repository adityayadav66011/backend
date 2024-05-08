const Contact15 = require("../models/contact-model15");

const contactForm15 = async (req, res) => {
    try {
        const { Company_Code, Branch_Code, Appl_Code, Appl_Name, Module_Code, Module_Name, Submodule_Code, Submodule_Name, Process_Code, Process_Name, Function_Codes, Function_Names } = req.body;
        await Contact15.create({ Company_Code, Branch_Code, Appl_Code, Appl_Name, Module_Code, Module_Name, Submodule_Code, Submodule_Name, Process_Code, Process_Name, Function_Codes, Function_Names });
        return res.status(200).json({ message: "Message sent successfully" });
    } catch (error) {
        console.error("Error creating contact (Form 15):", error);
        return res.status(500).json({ message: "Message not delivered" });
    }
};

module.exports = contactForm15;
