import mongoose from 'mongoose'


const connectdb=async()=>{
    try{

        const conn=await mongoose.connect(process.env.MONGO_URL)
        console.log(`Database Connected Successfully ${conn.connection.host}`);
        


    }catch(error){

        console.log('Something went wrong',error)

    }
}

export default connectdb