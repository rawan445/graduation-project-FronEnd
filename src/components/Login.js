import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

export default function SignUp({setToken}) {
  const history = useHistory();                                      

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    const checkLogin = async (event) => {
      try {
        event.preventDefault();
        const response = await axios.post("http://localhost:5000/login", {
          email: email,
          password: password,
        });
        console.log(response.data)
        setToken(response.data.token)
        localStorage.setItem("token",JSON.stringify(response.data.token))
        history.push("/Buy");
        
      } catch (error) {
        console.log(error.response.data);
      }
    };
  return (
    <div>  
<div >
        <form id="form" className="form">
          <h2>تسجيل الدخول  </h2>
            <label>بريد إلكتروني</label>
                <input onChange={(e) => { (setEmail(e.target.value)); }} type="text" id="email" placeholder="Enter eamil" />
              <label >كلمة المرور</label>
                <input onChange={(e) => { (setPassword(e.target.value)); }} type="password" id="password" placeholder="Enter passowrd" />
               <button onClick={(event) => {  checkLogin(event);  }}type="submit">دخول</button>
        </form>
    </div>
    </div>
    
  );}


