const Contact6 = require("../models/contact-model6");

const contactForm6 = async (req, res) => {
    try {
        const { City_Code, City_Name, Country_Code, State_Code } = req.body;
        await Contact6.create({ City_Code, City_Name, Country_Code, State_Code });
        return res.status(200).json({ message: "Message sent successfully" });
    } catch (error) {
        console.error("Error creating contact (Form 6):", error);
        return res.status(500).json({ message: "Message not delivered" });
    }
};

module.exports = contactForm6;
