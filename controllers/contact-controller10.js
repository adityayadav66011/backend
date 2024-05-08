const Contact10 = require("../models/contact-model10");

const contactForm10 = async (req, res) => {
    try {
        const { Company_Code, Branch_Code, Function_Code, Function_Name } = req.body;
        await Contact10.create({ Company_Code, Branch_Code, Function_Code, Function_Name });
        return res.status(200).json({ message: "Message sent successfully" });
    } catch (error) {
        console.error("Error creating contact (Form 10):", error);
        return res.status(500).json({ message: "Message not delivered" });
    }
};

module.exports = contactForm10;
