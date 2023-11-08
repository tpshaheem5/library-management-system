const express = require("express");
const app = express();
const userSchema = require("../Model/userDatabase");
const bcrypt = require("bcrypt")
const jwt = require ("jsonwebtoken")

const signup = async (req, res) => {
  console.log(req.body);

  try {
    const password=req.body.password
    const hashPassword = await bcrypt.hash(password,10)

    const newUser = new userSchema({
      firstname: req.body.firstname,
      username: req.body.username,
      password: hashPassword,
      email: req.body.email,
      address: req.body.address
    
    });
    await newUser.save();

    res.status(200).json({ message: "User registered successfully" });
  } catch (error) {
    console.error("Error while saving user data:", error);
    res.status(500).json({ error: "Failed to register user", message: error.message });
  }
};

//****************** user login ***************** */

const login = async (req,res)=>{
  const {email,password}=req.body;

  console.log("email",email);

  

  const checkUser = await userSchema.findOne({email:email})

  console.log("checkUser",checkUser);
  const user_id = checkUser._id;
  
  if (!checkUser) {
    return res.status(404).json({ message: "invalid email" });
  }

  if(!bcrypt.compare(password,checkUser.password)){
    return res.status(404).json({message:"invalid password"});
  }

  const token = jwt.sign(email,"shaymu")
  res.json({status: "success",message: "successfully",email: email,token: token,User:checkUser, user_id,});
}
    

module.exports = { signup,login };
