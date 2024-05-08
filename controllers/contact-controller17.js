const Contact17 = require("../models/contact-model17");

const contactForm17 = async (req, res) => {
    try {
        const { GST_Code, GST_Name } = req.body;
        await Contact17.create({ GST_Code, GST_Name });
        return res.status(200).json({ message: "Message sent successfully" });
    } catch (error) {
        console.error("Error creating contact (Form 17):", error);
        return res.status(500).json({ message: "Message not delivered" });
    }
};

module.exports = contactForm17;
