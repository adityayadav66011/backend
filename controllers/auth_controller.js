const User = require("../models/user-model")
const bcrpyt = require("bcryptjs")
const home = async (req, res) => {
 
try{
    res.status(200).send("Welcome to our site router");
}catch(error){
    console.log(error);
}    
}; 

const register = async(req,res)=> {
    try{
       console.log(req.body);
        const {username , email, phone , password} = req.body;

        const userExist = await User.findOne({email});

        if(userExist)
        {
            return res.status(400).json({msg : "email already exists"});
        }
        const saltRound=10;
        const hash_password = await bcrpyt.hash(password,saltRound);

        const userCreated = await User.create({username, email,phone , password:hash_password});

        res.status(201).json({
            message: "registration successful", 
        token: await userCreated.generateToken(), 
        userId:userCreated._id.toString(),
        });
    } catch(error){
        console.error(error);
        res.status(500).json("page not found");
    }
};

const login =async (req, res)=>{
    try {
      const{ email,password} = req.body;
      
      const userExist= await User.findOne({email });
      console.log(userExist);

      if(!userExist){
        return res.status(400).json({message:"Invalid Credentials"});
      }
      
     const user = await bcrpyt.compare(password,userExist.password);
   //  const user = await userExist.comparePassword(password);
     
     if(user){
        res.status(200).json({message: "login successful", 
        token: await userExist.generateToken(), 
        userId:userExist._id.toString(),
        });
     }else{
        res.status(401).json({message:"Invalid email or password"});
     }

    } catch (error) {
        console.error(error);
      res.status(500).json({error:"error happening"});  
    }
}

// *-------------------
// to send User Data
// *-------------------

const user = async (req, res) => {
    try {
       userData = req.user;
      console.log(userData);
       return res.status(200).json({ msg: userData});
    } catch (error) {
      console.log(` error from user route ${error}`);
    }
  };

module.exports = {home,register,login,user};