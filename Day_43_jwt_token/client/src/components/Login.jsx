import { useState } from "react";
import axios from "axios";

const Login = () => {

  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await axios.post(
      "http://localhost:5000/api/forms/login",
      { email, password }
    );

    alert(res.data.msg);
  };

  return (
    <div>
      <h2>Login Page</h2>

      <form onSubmit={handleSubmit}>

        <input
          type="email"
          placeholder="Enter Email"
          onChange={(e)=>setEmail(e.target.value)}
        />

        <br/><br/>

        <input
          type="password"
          placeholder="Enter Password"
          onChange={(e)=>setPassword(e.target.value)}
        />

        <br/><br/>

        <button type="submit">Login</button>

      </form>
    </div>
  );
};

export default Login;
