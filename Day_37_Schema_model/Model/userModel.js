import mongoose from "mongoose";

const userSchema= new mongoose.Schema(
    {

        username:{type:String,required:true},
        userage:{type:Number,min:18},
        useremail:{type:String,unique:true,required:true}

},{timestamps:true})


const userModel=mongoose.model('userDatas',userSchema)

export default userModel