import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

export default function SignUp() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setrole] = useState("");
  const history = useHistory();
  
  const addUser = async () => {
      console.log({
        name,email,password,role
      });
    const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/signUp`, {
      name,
      email,
      password,
      role,
    });
        history.push("/login")
 
  };
  return ( <div className="addC">  
          <h2>تسجيل دخول  </h2>
          <hr/>
          <label>: أسم المستخدم</label>
        <input className="inputC" onChange={(e) => { (setName(e.target.value)); }}  type="text" placeholder="ادخل اسم المستخدم" />
      <label>:  البريد الالكتروني</label>
        <input className="inputC" onChange={(e) => { (setEmail(e.target.value)); }}type="text" id="email" placeholder="ادخل البريد الالكتروني" />
        <label>: الرقم السري </label>
        <input className="inputC"  onChange={(e) => { (setPassword(e.target.value)); }} type="password"  placeholder="ادخل رقم سري"/>
        <label>:  فرد - منشاه </label> <br/>
        <select onChange={(e) => { setrole(e.target.value);  }} >
                    <option >اختار</option>
                    <option value="3">فرد</option>
                    <option value="2">منشأة</option>
                  </select>
      <button className="buttt" onClick={(event) => {  addUser(event);  }}type="submit" > إرسال </button> 
      </div>
        );
}


