import mongoose from "mongoose";

const connDb= async ()=>{


    const conn=await mongoose.connect(process.env.MONGO_URL)

    console.log(`Database Connected Successfully ${conn.connection.host}`)
}

export default connDb