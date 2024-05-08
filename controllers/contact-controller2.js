const Contact2 = require("../models/contact-model2");

const contactForm2 = async (req, res) => {
    try {
        const { Zone_Code, Zone_Name, Country_Code } = req.body;
        await Contact2.create({ Zone_Code, Zone_Name, Country_Code });
        return res.status(200).json({ message: "Message sent successfully" });
    } catch (error) {
        console.error("Error creating contact:", error);
        return res.status(500).json({ message: "Message not delivered" });
    }
};

module.exports = contactForm2;
