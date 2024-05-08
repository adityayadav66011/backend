const Contact8 = require("../models/contact-model8");

const contactForm8 = async (req, res) => {
    try {
        const { Company_Code, Reporting_Branch, Branch_Code, Branch_Name, Branch_Address_Line1, Branch_Address_Line2, Street, Area_Village, City_Code, State_Code, Country_Code, Pincode, GST_No } = req.body;
        await Contact8.create({ Company_Code, Reporting_Branch, Branch_Code, Branch_Name, Branch_Address_Line1, Branch_Address_Line2, Street, Area_Village, City_Code, State_Code, Country_Code, Pincode, GST_No });
        return res.status(200).json({ message: "Message sent successfully" });
    } catch (error) {
        console.error("Error creating contact (Form 8):", error);
        return res.status(500).json({ message: "Message not delivered" });
    }
};

module.exports = contactForm8;
