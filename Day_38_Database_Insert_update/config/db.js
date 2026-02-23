import mongoose from 'mongoose'


const connectDb=async ()=>{
try {

        const getDbData=await mongoose.connect(process.env.MONGO_URL)

        console.log(`Database Connected Successfully ${getDbData.connection.host}`)

    
} catch (error) {

    console.log('Something Error',error);
    
    
}





}

export default connectDb;