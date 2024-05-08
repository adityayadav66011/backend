const Contact16 = require("../models/contact-model16");

const contactForm16 = async (req, res) => {
    try {
        const { Currency_Code, Currency_Name } = req.body;
        await Contact16.create({ Currency_Code, Currency_Name });
        return res.status(200).json({ message: "Message sent successfully" });
    } catch (error) {
        console.error("Error creating contact (Form 16):", error);
        return res.status(500).json({ message: "Message not delivered" });
    }
};

module.exports = contactForm16;
