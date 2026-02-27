import { useState } from "react";
import axios from "axios";

function App() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:5000/api/hashed/add", formData);
      alert(res.data.msg);
      console.log(res.data);
    } catch (error) {
      console.error(error);
      alert("Error registering user");
    }
  };

  return (
    <div style={{ padding: "50px" }}>
      <h2>Register</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Enter Name"
          onChange={handleChange}
        />
        <br /><br />

        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          onChange={handleChange}
        />
        <br /><br />

        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          onChange={handleChange}
        />
        <br /><br />

        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default App;
