import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

export default function SignUp({setToken  ,setRole,setname ,setid}) {
  const history = useHistory();                                      
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const checkLogin = async (event) => {
    
      try {
        event.preventDefault();
        const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/login`, {
          email: email,
          password: password,
        });
       // console.log("ASSS",response.data.payload.userId);
        if(response.data.payload.role=== 1){
          // console.log("token : ",response.data.token);
          localStorage.setItem("token",JSON.stringify(response.data.token))
          setRole(response.data.payload.role)
          console.log("role : ",response.data.payload.role);
          localStorage.setItem("role :",JSON.stringify(response.data.payload.role))
          setname(response.data.payload.userName)
          localStorage.setItem("name",JSON.stringify(response.data.payload.userName))
          setid(response.data.payload.userId)
          localStorage.setItem("id",JSON.stringify(response.data.payload.userId))
          setToken(response.data.token)
          history.push("/Admin");
          
        }else if(response.data.payload.role== 2){
          // console.log("token : ",response.data.token);
          localStorage.setItem("token",JSON.stringify(response.data.token))
          setRole(response.data.payload.role)
          console.log("role : ",response.data.payload.role);
          localStorage.setItem("role :",JSON.stringify(response.data.payload.role))
          setname(response.data.payload.userName)
          localStorage.setItem("name",JSON.stringify(response.data.payload.userName))
          setid(response.data.payload.userId)
          localStorage.setItem("id",JSON.stringify(response.data.payload.userId))
          setToken(response.data.token)
          history.push("/Company");
        }else if(response.data.payload.role== 3){
          // console.log("token : ",response.data.token);
          localStorage.setItem("token",JSON.stringify(response.data.token))
          setRole(response.data.payload.role)
          console.log("role : ",response.data.payload.role);
          localStorage.setItem("role :",JSON.stringify(response.data.payload.role))
          setname(response.data.payload.userName)
          localStorage.setItem("name",JSON.stringify(response.data.payload.userName))
          setid(response.data.payload.userId)
          localStorage.setItem("id",JSON.stringify(response.data.payload.userId))
          setToken(response.data.token)
          history.push("/Buy");
        
        }else if(response.data.payload.role== null){
          history.push("/F");

        }
        } catch (error) {
        console.log("error : ",error.response.data);
      }
    };
  return (
    <div>  
      <div className="addC">  
        <h2>تسجيل دخول  </h2>
        <hr/>
        <label>: البريد الالكتروني</label>
        <input className="inputC" onChange={(e) => { (setEmail(e.target.value)); }} type="text" id="email" placeholder="ادخل  البريد الالكتروني" />
        <label>: الرقم السري </label>
        <input className="inputC"  onChange={(e) => { (setPassword(e.target.value)); }} type="password" id="password" placeholder=" ادخل الرقم السري "/>
        <button className="buttt" onClick={(event) => {  checkLogin(event);  }}type="submit" > إرسال </button> 
      </div>
    </div>
  );
}
