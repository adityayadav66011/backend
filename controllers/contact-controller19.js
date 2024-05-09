const Contact19 = require("../models/contact-model19");

const contactForm19 = async (req, res) => {
    try {
        const { Crop_Name, Crop_Type1, Crop_Type2, Crop_Type3, Crop_Grade, Crop_Quality, Crop_Lot_Number, Date_Of_Reaping } = req.body;
        await Contact19.create({ Crop_Name, Crop_Type1, Crop_Type2, Crop_Type3, Crop_Grade, Crop_Quality, Crop_Lot_Number, Date_Of_Reaping });
        return res.status(200).json({ message: "Message sent successfully" });
    } catch (error) {
        console.error("Error creating contact (Form 19):", error);
        return res.status(500).json({ message: "Message not delivered" });
    }
};

module.exports = contactForm19;
