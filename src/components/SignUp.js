import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

export default function SignUp() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const changeName = (e) => {
    setName(e.target.value);
  };
  const changeEmail = (e) => {
    setEmail(e.target.value);
  };
  const changePassword = (e) => {
    setPassword(e.target.value);
  };

  const addUser = async () => {
      console.log({
        name: name,
        email: email,
        password: password,
      });
    const response = await axios.post("http://localhost:5000/signUp", {
      name: name,
      email: email,
      password: password,
    });
    if (response.status === 201){
        history.push("/login")
    }
  };
  return (
    <div className="divS"> 



      <div class="container">
        <form id="form" class="form">
            <h2>تسجيل </h2>
            <div class="form-control">
                <label for="username">اسم المستخدم </label>
                <input  onChange={(e) => {  changeName(e); }} type="text" id="username" placeholder="Enter username" />
            </div>
            <div class="form-control">
                <label for="eamil">بريد إلكتروني</label>
                <input onChange={(e) => { changeEmail(e); }}  type="email" id="email" placeholder="Enter eamil" />
            </div>
            <div class="form-control">
                <label for="passowrd">كلمة المرور</label>
                <input onChange={(e) => {    changePassword(e);  }} type="password" id="password" placeholder="Enter passowrd" />
            </div>
          
            <button onClick={(e) => {  addUser();  }} type="submit">سجل</button>
        </form>
    </div>



      
    </div>
    
  );
}


