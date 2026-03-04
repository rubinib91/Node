import { useEffect, useState } from 'react'
import axios from 'axios'

const App = () => {

  const [formdata,setFormdata] = useState({name:"",email:"",age:""})
  const [users,setUsers] = useState([])
  const [editid,setEditid]=useState("")

  const handlechange = (e)=>{
    setFormdata({...formdata,[e.target.name]:e.target.value})
  }

  const fetchData = async ()=>{
    try {
      const response = await axios.get("http://localhost:5000/api/crud/get")
      setUsers(response.data.getdata)   
    } catch (error) {
      alert(error.response.data.msg);
    }
  }

  useEffect(()=>{
   (async()=>{
    fetchData()
   })() 
  },[])   


  const handleclick = async (e)=>{
    e.preventDefault()
    try {
      const add = await axios.post("http://localhost:5000/api/crud/insert",formdata)
      alert(add.data.msg)
      setFormdata({name:"",email:"",age:""})
      fetchData()  
    } catch (error) {
      alert(error.response.data.msg);
    }
  }

  const handleedit =async (user)=>{
    //alert(user.name)
    setFormdata({name:user.name,email:user.email,age:user.age})
    setEditid(user._id)

  }
  const handledelete = async (userid) => {
  try {
    const deleted = await axios.delete(
      `http://localhost:5000/api/crud/${userid}`  
    );
    console.log("deleted response:", deleted.data);  // <-- check this
    alert(deleted.data.msg);
    fetchData(); 
  } catch (error) {
    console.log(error.response);  // <-- check this too
    alert(error.response?.data?.msg || "Something went wrong");
  }
};


  const handleupdate=async (e)=>{
    e.preventDefault()
    try {

    const updatedata=await axios.put(`http://localhost:5000/api/crud/update/${editid}`,formdata)
    alert(updatedata.data.msg)
           setFormdata({name:"",email:"",age:""})
    setEditid("")
     fetchData()

      
    } catch (error) {
            alert(error.response.data.msg);

    }

   
  }

  return (
    <>
      <form>
        <input type="text" name='name' placeholder='Enter Name' value={formdata.name} onChange={handlechange} />
        <input type="email" name='email' placeholder='Enter email' value={formdata.email} onChange={handlechange} />
        <input type="number" name='age' placeholder='Enter age' value={formdata.age} onChange={handlechange} />
        {editid?<button onClick={handleupdate}>Update</button>:<button onClick={handleclick}>Add</button>}
      </form>

      <div style={{padding:"10px"}}>
        <table border="5">
          <thead>
            <tr>
            <th>S No</th>
              <th>Name</th>
              <th>Email</th>
              <th>Age</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((e,index)=>(
              <tr key={e._id}>
                <td>{index+1}</td>
                <td>{e.name}</td>
                <td>{e.email}</td>
                <td>{e.age}</td>
                <td>
                  <button onClick={()=>handleedit(e)}>Edit</button>
                  <button onClick={()=>handledelete(e)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default App
