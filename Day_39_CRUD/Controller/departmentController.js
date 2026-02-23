import departmentModel from "../userModel/departmentModel.js"

export const insertdata=async (req,res)=>{
   // console.log(req.body)
try {
      const data=await departmentModel.create(req.body)
   res.status(201).json({msg:"data saved successfully",data})

   
} catch (error) {
   console.log('Something Went Wrong',error);
   
   
}




}

export const getdbdata=async(req,res)=>{
   try {


      const getdatas=await departmentModel.find()
          res.status(200).json({msg:getdatas})


      
   } catch (error) {
         console.log('Something Went Wrong',error);

      
   }

   
}

export const getdbdatabyid=async(req,res)=>{
   try {


      const getbyid=await departmentModel.findById(req.params.userid)
          res.status(200).json({msg:getbyid})


      
   } catch (error) {
         console.log('Something Went Wrong',error);

      
   }

   
}

export const updatedatabyid=async(req,res)=>{
   try {


      const updatebyid=await departmentModel.findByIdAndUpdate(req.params.userid)
                res.status(200).json({msg:"updated successfully"})


      
   } catch (error) {
         console.log('Something Went Wrong',error);

      
   }

   
}

export const deletebyid=async(req,res)=>{

   try {

         const deletebyid=await departmentModel.findByIdAndDelete(req.params.userid)
                         res.status(200).json({msg:"Data deleted successfully"})

      
   } catch (error) {
               console.log('Something Went Wrong',error);

   }
}
