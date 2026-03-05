import User from "../models/userModels.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const register = async (req,res)=>{

  const {name,email,password} = req.body;

  const user = await User.findOne({email});

  if(user){
    return res.json({msg:"Email already exists"});
  }

  const hashPassword = await bcrypt.hash(password,10);

  const newUser = new User({
    name,
    email,
    password:hashPassword
  });

  await newUser.save();

  res.json({msg:"Register Success"});
};

export const login = async (req,res)=>{

  const {email,password} = req.body;

  const user = await User.findOne({email});

  if(!user){
    return res.json({msg:"User not found"});
  }

  const checkPassword = await bcrypt.compare(password,user.password);

  if(!checkPassword){
    return res.json({msg:"Invalid Password"});
  }

  const token = jwt.sign(
    {id:user._id,name:user.name},
    process.env.JWT_SECRET,
    {expiresIn:"1d"}
  );

  console.log(token)

  res.status(200).json({
    msg:"Login Success",
    token
  });
};
export const dashboard = (req,res)=>{

  res.json({
    msg:"Dashboard Data",
    name:req.user.name
  });

};


