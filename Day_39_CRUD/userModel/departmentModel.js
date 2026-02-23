import mongoose from "mongoose";


const departmentSchema=new mongoose.Schema({

    departmentId:{type:Number, unique:true},
    departmentName:{type:String},
    departmentHead:{type:String},
    departmentEmail:{type:String,required:true},
    departmentSalary:{type:Number},
    departmentStrength:{type:Number},
    departmentStatus:{type:String,default:"active"},
    createdby:{type:String,default:"Manager"},
    updatedby:{type:String,default:"Admin"}


},{timestamps:true})


const departmentModel=mongoose.model("departmentdata",departmentSchema)

export default departmentModel
