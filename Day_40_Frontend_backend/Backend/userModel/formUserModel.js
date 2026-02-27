import mongoose from "mongoose"

const formSchema = new mongoose.Schema({
  username: { type: String, required: true },
  age: { type: Number, required: true }
}, { timestamps: true })

const formUserModel = mongoose.model("formdata", formSchema)
export default formUserModel