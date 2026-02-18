import mongoose from "mongoose";

const connectdb = async () => {
    try {
        const dbconn = await mongoose.connect(process.env.MONGO_URL)
        console.log("Database connected Successfully")
    } catch(error) {
        console.log('something went wrong', error)
    }
}

export default connectdb
