import crudModel from '../Models/crudModel.js'

export const addData = async (req,res)=>{
    try {
        const {name,email,age} = req.body

        const insertData = await crudModel.create({name,email,age})

        res.status(201).json({msg:"Data added Successfully"})

    } catch (error) {
        console.log('error',error);
        res.status(500).json({msg:"Something went wrong"})
    }
}


export const getData = async (req,res)=>{
    try {
        const getfile = await crudModel.find()
        res.status(200).json({getdata:getfile})
        
    } catch (error) {
        console.log("error",error)
        res.status(500).json({msg:"Something went wrong"})
    }
}


export const editData = async (req,res)=>{
    try {
        const {userid} = req.params

        const editfile = await crudModel.findById({userid})

        res.status(200).json({editdatas:editfile})
        
    } catch (error) {
        console.log("error",error)
        res.status(500).json({msg:"Something Error"})
    }
}


export const updateData = async (req,res)=>{
    try {
       // const {userid} = req.params

        const updateFile = await crudModel.findByIdAndUpdate(
            req.params.userid,
             req.body,{returnDocument:'after'})

        res.status(200).json({msg:"Data updated SUccessfully"})
        
    } catch (error) {
        console.log("error",error)
        res.status(500).json({msg:"Something Error"})
    }
}


export const deleteData = async (req,res)=>{
    try {
        const {userid} = req.params

        const deleteFile = await crudModel.findByIdAndDelete(userid)
        console.log(deleteFile);
        

        res.status(200).json({msg:"Deleted Successfully"})
        
    } catch (error) {
        console.log("error",error)
        res.status(500).json({msg:"Something Error"})
    }
}
