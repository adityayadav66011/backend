const Contact5 = require("../models/contact-model5");

const contactForm5 = async (req, res) => {
    try {
        const { Station_Code, Station_Name, Pool_Code } = req.body;
        await Contact5.create({ Station_Code, Station_Name, Pool_Code });
        return res.status(200).json({ message: "Message sent successfully" });
    } catch (error) {
        console.error("Error creating contact (Form 5):", error);
        return res.status(500).json({ message: "Message not delivered" });
    }
};

module.exports = contactForm5;
