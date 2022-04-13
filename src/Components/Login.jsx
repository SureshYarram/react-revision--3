import axios from "axios";
import { useState } from "react"


import {useDispatch, useSelector} from "react-redux"
import { useEffect } from "react";
import { loginSuccessDetails } from "../Redux/Login/action";
import { useNavigate } from "react-router";

export const Login = ()=>{

const dispatch = useDispatch();
const navigate = useNavigate();

const {isAuth,token} = useSelector((store)=>store.login);



    const [logindata,setLogindata] = useState({
        email:"",
        password:""
    })
     const Handlechange = (e)=>{

   const {id,value} = e.target;
   setLogindata({...logindata,[id]:value})
     }
    
        const Handlesubmit = (payload)=>{
            dispatch(loginSuccessDetails(payload))    
        }
        if(isAuth){
            navigate("/dashboard")
        }
    return(

        <div>

            <input type="email"  id="email" placeholder="enter your email" id="email" onChange={Handlechange} />
            <input type="password" id="password"  placeholder="enter your password" id="password" onChange={Handlechange}/>

            <button onClick={()=>Handlesubmit(logindata)}>Submit</button>
        </div>
    )
}