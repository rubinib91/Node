import bcrypt from "bcrypt"
import formUserModel from '../userModel/formUserModel.js'

export const addData = async (req, res) => {
  try {

    const { username, email, password } = req.body

    if (!username || !email || !password) {
      return res.status(400).json({ msg: "All fields required" })
    }

    // 🔐 Hash password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    const datas = await formUserModel.create({
      username,
      email,
      password: hashedPassword   // ✅ store hashed password
    })

    res.status(201).json({
      msg: "Data Added Successfully",
      user: {
        username: datas.username,
        email: datas.email
      }
    })

  } catch (error) {
    console.log('Error', error)
    res.status(500).json({ msg: "Server Error" })
  }
}


export const getData = async (req, res) => {
  try {

    const getdatas = await formUserModel.find()
    res.status(200).json(getdatas)

  } catch (error) {
    console.log('Error', error)
    res.status(500).json({ msg: "Server Error" })
  }
}
