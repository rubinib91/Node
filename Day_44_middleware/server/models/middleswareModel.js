import mongoose from 'mongoose'


const middlewareSchema=new mongoose.Schema({
    name:String,
    email:String,
    password:String
},{timestamps:true})


const middleswareModel=mongoose.model("middlewaredata",middlewareSchema)


export default middleswareModel