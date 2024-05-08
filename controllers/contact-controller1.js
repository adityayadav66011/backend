const Contact1=require("../models/contact-model1");

const contactForm1 = async(req,res)=>{
    try {
        const response=req.body;
        await Contact1.create(response);
        return res.status(200).json({message:"message sent successfully"});
    } catch (error) {
        return res.status(500).json({message:"message not delivered"});
    }
};

module.exports = contactForm1;