import mongoose from "mongoose";

const conndb=async ()=>{
    try {


        const conn=await mongoose.connect(process.env.MONGO_URL)

        console.log(`Database Connected Successfully ${conn.connection.host}`);
        
        
    } catch (error) {
        console.log('Something Went Wrong',error);
        
        
    }


}
export default conndb