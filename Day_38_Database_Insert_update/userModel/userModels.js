import mongoose from "mongoose";


const employeeSchema=new mongoose.Schema({
empname:{type:String},
empdesignation:{type:String},
empsalary:{type:Number},
empage:{type:Number},
empemail:{type:String},
},{timestamps:true})


const userModels=mongoose.model("empdata",employeeSchema)

export default userModels