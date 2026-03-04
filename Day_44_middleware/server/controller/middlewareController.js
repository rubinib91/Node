import middleswareModel from '../models/middleswareModel.js';
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
export const createData = async(req,res)=>{

  console.log('controller req', req.body);

  try {

    const {name,email,password} = req.body
    
    const checkEmail = await middleswareModel.findOne({email})
     
    if(checkEmail){

     return res.status(400).json({msg:"Already The EMail is there try new"})

    }
  
    const slatKey = 10
   const hashpassword =await bcrypt.hash(password,slatKey)

   const addData = await middleswareModel.create({
    name,email,password:hashpassword
   })

   res.status(200).json({msg:"Data Save Successfully Done"})


  } catch (error) {

    console.log('error',error);
    
    
  }


}


export const logindata = async (req, res) => {

  try {

    const { email, password } = req.body

    const checkEmail = await middleswareModel.findOne({ email })

    if (!checkEmail) {
      return res.status(400).json({ msg: "Email not registered" })
    }

    const passwordMatch = await bcrypt.compare(password, checkEmail.password)

    if (!passwordMatch) {
      return res.status(400).json({ msg: "Invalid Password" })
    }

    const generateJWT = jwt.sign(
      { id: checkEmail._id, email: checkEmail.email },
      process.env.JWT_SECRET_KEY,
      { expiresIn: "1h" }
    )
console.log(generateJWT)
    res.status(200).json({
      msg: "Login Successful",
      token: generateJWT
    })

  } catch (error) {

    console.log("Login Error:", error)
    res.status(500).json({ msg: "Something went wrong" })

  }
}
