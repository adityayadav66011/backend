const Contact3 = require("../models/contact-model3");

const contactForm3 = async (req, res) => {
    try {
        const { State_Code, State_Name, Zone_Code, Ext_Code } = req.body;
        await Contact3.create({ State_Code, State_Name, Zone_Code, Ext_Code });
        return res.status(200).json({ message: "Message sent successfully" });
    } catch (error) {
        console.error("Error creating contact:", error);
        return res.status(500).json({ message: "Message not delivered" });
    }
};

module.exports = contactForm3;
