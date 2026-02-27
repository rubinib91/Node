import axios from "axios"
import { useEffect, useState } from "react"

const App = () => {

const [data,setData]=useState({name:"",email:"",password:""})

const [fetchdata,setFetchdata]=useState([])


const handlechange=(e)=>{
  
  const value=e.target.value
  const field=e.target.name
  setData({...data,[field]:value})



}

const fetch=async ()=>{

          const datas=await axios.get("http://localhost:5000/api/forms/getdata")
          setFetchdata(datas.data)

}

useEffect(()=>{
  fetch()
},[])
const handlesubmit=async (e)=>{

  try {

      e.preventDefault()
        const savedata=await axios.post("http://localhost:5000/api/forms/createdata",data)
   alert(savedata.data.msg);

   setData({name:"",email:"",password:""})
   
   

    
  } catch (error) {
    console.log('Something Wrong',error);
    
    
  }


}


  return (
    <>
    <form onSubmit={handlesubmit}>

      <input type="text" placeholder="Enter Name" name="name" value={data.name} onChange={handlechange}/>

      <input type="email" placeholder="Enter email" name="email" value={data.email} onChange={handlechange}/>
      
      <input type="password" placeholder="Enter password" name="password" value={data.password} onChange={handlechange}/>

     <button type="submit">Register</button>
    </form>
    <div>
 {fetchdata.map((e)=>(
    <li key={e._id}>
      <h1>Name:{e.name}</h1>
      <p>Email:{e.email}</p>
      <p>Pssword:{e.password}</p>
          </li>
    ))}

    </div>
   


    </>
    )
}

export default App
