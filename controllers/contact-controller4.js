const Contact4 = require("../models/contact-model4");

const contactForm4 = async (req, res) => {
    try {
        const { Pool_Code, Pool_Name, State_Code } = req.body;
        await Contact4.create({ Pool_Code, Pool_Name, State_Code });
        return res.status(200).json({ message: "Message sent successfully" });
    } catch (error) {
        console.error("Error creating contact (Form 4):", error);
        return res.status(500).json({ message: "Message not delivered" });
    }
};

module.exports = contactForm4;
