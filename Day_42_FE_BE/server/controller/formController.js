import bcrypt from 'bcrypt'
import formModel from '../models/formModel.js'

export const addData=async (req,res)=>{
    try {


 console.log(req.body)
const {name,email,password}=req.body
const saltRound=10

const hashpw=await bcrypt.hash(password,saltRound)

const add=await formModel.create({name,email,password:hashpw})
res.status(200).json({msg:"Data Added Successfully",add})
        
    } catch (error) {
        console.log('Something Error',error);
        res.ststus(500).json('Something Error',error)
        
        
    }
    
}


export const getData=async(req,res)=>{
try {
    const get=await formModel.find()
    res.status(200).json(get)
   
    
} catch (error) {
    console.log('Something Error',error);
    
    
}

    

}