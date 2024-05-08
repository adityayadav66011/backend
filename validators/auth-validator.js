const {z} = require("zod");

//create object schema

const signupSchema = z.object({
    username:z
    .string({required_error:"Name is Required"})
    .trim()
    .min(3,{message:"Name must be at least 3 character "})
    .max(255,{message:"Name should be less than 256 characters"}),

    email:z
    .string({required_error:"Email is Required"})
    .trim()
    .min(3,{message:"Invalid email "})
    .max(255,{message:"must not be greater than 255"}),

    phone:z
    .string({required_error:"phone no is Required"})
    .trim()
    .min(10,{message:"No. must be at least 10 character "})
    .max(255,{message:"No. should not be greater than 15 characters"}),

    password:z
    .string({required_error:"password is Required"})
    .min(7,{message:"password must be at least 7 character "})
    .max(255,{message:"password should be less than 256 characters"}),
});

module.exports = signupSchema;