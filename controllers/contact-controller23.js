const Contact23 = require("../models/contact-model23");

const submitContactForm23 = async (req, res) => {
    try {
        const { paymentTermCode, paymentTermName, paymentTermDays } = req.body;
        await Contact23.create({ paymentTermCode, paymentTermName, paymentTermDays });
        return res.status(200).json({ message: "Contact Form 23 submitted successfully" });
    } catch (error) {
        console.error("Error submitting Contact Form 23:", error);
        return res.status(500).json({ message: "Failed to submit Contact Form 23" });
    }
};

module.exports = submitContactForm23;
