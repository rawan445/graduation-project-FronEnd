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
    const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/signUp`, {
      name: name,
      email: email,
      password: password,
    });
    if (response.status === 200){
        history.push("/login")
    }
  };
  return ( <div className="addC">  
          <h2>تسجيل دخول  </h2>
          <hr/>
          <label>: أسم المستخدم</label>
        <input className="inputC" onChange={(e) => {  changeName(e); }} type="text" placeholder="Enter name" />
      <label>:  البريد الالكتروني</label>
        <input className="inputC" onChange={(e) => { changeEmail(e); }} type="text" id="email" placeholder="Enter eamil" />
        <label>: الرقم السري </label>
        <input className="inputC"  onChange={(e) => { (changePassword(e.target.value)); }} type="password" id="password" placeholder="Enter passowrd"/>
      <button className="buttt" onClick={(event) => {  addUser(event);  }}type="submit" > Submit </button> 
      </div>
        );
}


