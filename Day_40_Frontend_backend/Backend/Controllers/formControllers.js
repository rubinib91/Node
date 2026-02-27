import formUserModel from "../userModel/formUserModel.js"

export const addData = async (req, res) => {
  console.log(req.body)

  

  try {
    const datas = await formUserModel.create(req.body)
    res.status(200).json({ msg: "Data Added Successfully", datas })
  } catch (error) {
    console.log("Something Error", error)
    res.status(500).json({ msg: "Internal Server Error" })
  }
}