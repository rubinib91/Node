import {useEffect,useState} from "react";
import axios from "axios";

const Dashboard = ()=>{

const [name,setName] = useState("");

useEffect(()=>{

const token = localStorage.getItem("token");

axios.get("http://localhost:5000/api/forms/dashboard",{
 headers:{Authorization:token}
})
.then(res=>{
 setName(res.data.name);
});

},[]);

return(
<div>
<h1>Dashboard</h1>
<h2>Welcome {name}</h2>
</div>
);
};

export default Dashboard;
