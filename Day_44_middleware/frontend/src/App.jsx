import { useState } from "react"
import axios from 'axios'
//import Register from "./Register"

const App = () => {

  const [saveData,setSaveData] = useState({email:"",password:""})


  const handleChange = (e)=>{

    setSaveData({...saveData,[e.target.name]:e.target.value})

  }


  const handleSubmit = async(e)=>{

   try {

     e.preventDefault()

    const dataSave = await axios.post("http://localhost:5000/api/middleware/login",saveData)

    alert(dataSave.data.token);
    
   } catch (error) {

     alert(error.response.data.msg);
    
   }
    
    

  }



  return (
   <>
    {/* <Register/> */}
   <div>
    Login
   </div>
   <form onSubmit={handleSubmit}>
     
    <input type="email" name="email" placeholder="Enter the Email" onChange={handleChange}  />
    <input type="password" name="password" placeholder="Enter the Password" onChange={handleChange}  />
    <input type="submit" value={"Login"} />
   </form>
   </>
  )
}

export default App