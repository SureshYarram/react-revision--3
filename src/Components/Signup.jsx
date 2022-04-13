import { useState } from "react"

import axios from "axios"
import { useNavigate } from "react-router"


export const Signup = ()=>{


    const navigate = useNavigate();
      const [formData,setformData] = useState({
          username:"",
          email:"",
          password:""
      })
    
         const Handlechange = (e)=>{
           
            const {id,value} = e.target;
            setformData({...formData,[id]:value})

         }
         const HandleSubmit = ()=>{
              axios.post("https://courseera-backend-api.herokuapp.com/register" , formData).then((res)=>{
                  console.log(res)
                  navigate("/login");
              }).catch(
                  alert("enter valid details")
              )
              
         }
    return (

        <div> 
            <input type="text"  placeholder="Enter your name" id="username" onChange={Handlechange} /> <br />
            <input type="email"  id="email" placeholder="Enter your email" onChange={Handlechange} /> <br />
            <input type="password"  id="password" placeholder="Enter your password" onChange={Handlechange} /> <br />
            <button onClick={HandleSubmit}>Submit</button>
        </div>
    )
}