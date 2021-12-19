import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";


export default function SignUp({setToken}) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const history = useHistory();                                      
    const changeEmail = (e) => {
      setEmail(e.target.value);
    };
    const changePassword = (e) => {
      setPassword(e.target.value);
    };
  
    const checkLogin = async () => {
      try {
        const response = await axios.post("http://localhost:5000/login", {
          email: email,
          password: password,
        });
        console.log(response.data)
        setToken(response.data.token)
        
        localStorage.setItem("token",JSON.stringify(response.data.token))

        history.push("/Aqar");
      } catch (error) {
        console.log(error.response.data);
      }
    };
  return (
    <div>  



<div >
        <form id="form" class="form">
            <h2>تسجيل الدخول  </h2>
        
            <div>
                <label for="eamil">بريد إلكتروني</label>
                <input onChange={(e) => { changeEmail(e); }}    type="text" id="email" placeholder="Enter eamil" />
            </div>
            <div>
                <label for="passowrd">كلمة المرور</label>
                <input onChange={(e) => {    changePassword(e);  }}type="password" id="password" placeholder="Enter passowrd" />
            </div>
          
            <button onClick={(e) => {  checkLogin();  }}type="submit">دخول</button>
        </form>
    </div>



    </div>
    
  );
}


