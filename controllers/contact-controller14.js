const Contact14 = require("../models/contact-model14");

const contactForm14 = async (req, res) => {
    try {
        const { Employee_Code, Employee_Name, Company_Code, Branch_Code, Function_Code, Role_Code, Role_Name } = req.body;
        await Contact14.create({ Employee_Code, Employee_Name, Company_Code, Branch_Code, Function_Code, Role_Code, Role_Name });
        return res.status(200).json({ message: "Message sent successfully" });
    } catch (error) {
        console.error("Error creating contact (Form 14):", error);
        return res.status(500).json({ message: "Message not delivered" });
    }
};

module.exports = contactForm14;
