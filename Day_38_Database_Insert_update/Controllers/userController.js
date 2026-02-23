import userModels from "../userModel/userModels.js";


export const userController=async (req,res)=>{

    console.log(req.body)

    try {

const addtodb=await userModels.create(req.body)
if(addtodb){
    res.status(201).json({msg:"Database Created Successfully"})
}
else{
            res.status(404).json({msg:"Error"})

}
        
    } catch (error) {

        res.status(404).json({msg:"Error"})

        console.log('Something Error',error);
        
        
    }
}

