const Contact11 = require("../models/contact-model11");

const contactForm11 = async (req, res) => {
    try {
        const { Industry_Code, Industry_Name } = req.body;
        await Contact11.create({ Industry_Code, Industry_Name });
        return res.status(200).json({ message: "Message sent successfully" });
    } catch (error) {
        console.error("Error creating contact (Form 11):", error);
        return res.status(500).json({ message: "Message not delivered" });
    }
};

module.exports = contactForm11;
