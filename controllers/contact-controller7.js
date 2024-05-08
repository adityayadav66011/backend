const Contact7 = require("../models/contact-model7");

const contactForm7 = async (req, res) => {
    try {
        const { Company_Code, Company_Name, Company_Address_Line1, Company_Address_Line2, Street, Area_Village, City_Code, State_Code, Country_Code, Pincode, GST_No } = req.body;
        await Contact7.create({ Company_Code, Company_Name, Company_Address_Line1, Company_Address_Line2, Street, Area_Village, City_Code, State_Code, Country_Code, Pincode, GST_No });
        return res.status(200).json({ message: "Message sent successfully" });
    } catch (error) {
        console.error("Error creating contact (Form 7):", error);
        return res.status(500).json({ message: "Message not delivered" });
    }
};

module.exports = contactForm7;
