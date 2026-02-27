import axios from 'axios'
import { useState } from 'react'

const App = () => {
  const [getdata, setGetData] = useState([])
  const [username, setUsername] = useState("")
  const [age, setAge] = useState("")

  const handleclick = async () => {
    const data = { username, age: Number(age) }

    try {
      const fetchdata = await axios.post("http://localhost:5000/api/form/addformdata",data)

      console.log(fetchdata.data)

      setGetData(prev => [...prev, fetchdata.data.datas])
    } catch (error) {
      console.log("Something Error", error)
    }
  }

  return (
    <>
    <div className='p-5 flex g-5'>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={e => setUsername(e.target.value)}
      />
      <input
        type="number"
        placeholder="Age"
        value={age}
        onChange={e => setAge(e.target.value)}
      />
      <button className='bg-blue-600 p-2 rounded' onClick={handleclick}>Add User</button>
       </div>
      <ul>
        {getdata.map(e => (
          <li key={e._id}>
            <p>User Name:{e.username}</p>
            <p>Age:{e.age}</p>
          </li>
        ))}
      </ul>
    
    </>
  )
}

export default App