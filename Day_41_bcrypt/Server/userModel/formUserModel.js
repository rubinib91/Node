import mongoose from "mongoose";


const formSchema=new mongoose.Schema({
    username:{type:String},
    email:{type:String},
    password:{type:String}
},{timestamps:true})


const formuserModel=mongoose.model("NewForm",formSchema)

export default formuserModel