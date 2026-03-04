import middleswareModel from "../models/middleswareModel.js"
import bcrypt from "bcrypt"


export const validateRegister = (req, res, next) => {

    try {

        const { name, email, password } = req.body

        if (!name || !email || !password) {
            return res.status(400).json({ msg: "Please enter all fields" })
        }

        if (password.length < 8) {
            return res.status(400).json({ msg: "Password must be minimum 8 characters" })
        }

        next()

    } catch (error) {

        console.log("Register Validation Error:", error)
        return res.status(500).json({ msg: "Something went wrong" })

    }
}


export const validateLogin = async (req, res, next) => {

    try {

        const { email, password } = req.body

        if (!email || !password) {
            return res.status(400).json({ msg: "Please enter all fields" })
        }

        const checkEmail = await middleswareModel.findOne({ email })

        if (!checkEmail) {
            return res.status(400).json({ msg: "Email not registered" })
        }

        const passwordCheck = await bcrypt.compare(password, checkEmail.password)

        if (!passwordCheck) {
            return res.status(401).json({ msg: "Invalid password" })
        }

        next()

    } catch (error) {

        console.log("Login Validation Error:", error)
        return res.status(500).json({ msg: "Something went wrong" })

    }

}
