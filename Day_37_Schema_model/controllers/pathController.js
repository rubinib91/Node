import userModel from "../Model/userModel.js"



export const adddata=async (req,res)=>{
    try{
            console.log(req.body)


            const {username,useremail,userage}=req.body
            const add=await userModel.create({username,useremail,userage})
            res.status(201).json({msg:"Successfully added to the database"})

    }catch(error){

        
        console.log('Something went wrong',error)
        res.status(500).json({msg:"something error",error})
    }



}

export const getdata=async(req,res)=>{
    try {

        const getdatas=await userModel.find()
         console.log(getdatas);
         res.status(200).json({getdatas})

        
    } catch (error) {

        console.log('something went wrong',error)
        res.status(500).json({msg:"Error Occured",error})
        
    }
}



