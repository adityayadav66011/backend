const Contact13 = require("../models/contact-model13");

const contactForm13 = async (req, res) => {
    try {
        const { Role_Code, Role_Name } = req.body;
        await Contact13.create({ Role_Code, Role_Name });
        return res.status(200).json({ message: "Message sent successfully" });
    } catch (error) {
        console.error("Error creating contact (Form 13):", error);
        return res.status(500).json({ message: "Message not delivered" });
    }
};

module.exports = contactForm13;
