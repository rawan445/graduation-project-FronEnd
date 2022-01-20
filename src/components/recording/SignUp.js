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
    if (response.status === 201){
        history.push("/")
    }
  };
  return (
    <div className="addB">  
          <h2> تسجيل </h2>
          <hr/>
       
       <form id="form" className="form">
             <h2>تسجيل </h2>
            
                 <label >اسم المستخدم </label>
                 <input  onChange={(e) => {  changeName(e); }} type="text" id="username" placeholder="Enter username" />
                 <label >بريد إلكتروني</label>
                 <input onChange={(e) => { changeEmail(e); }}  type="email" id="email" placeholder="Enter eamil" />
                 <label >كلمة المرور</label>
                 <input onChange={(e) => {    changePassword(e);  }} type="password" id="password" placeholder="Enter passowrd" />

             <button  className="buttt"onClick={(e) => {  addUser();  }} type="submit">سجل</button>
         </form>
  
          {/* <label>: اسم المستخدم</label>
        <input onChange={(e) => {  changeName(e); }} type="text" id="username" placeholder="Enter username" />
        <label>: بريد إلكتروني</label>
        <input  onChange={(e) => {  changeName(e); }} type="text" id="username" placeholder="Enter username" />
      <label>: كلمة المرور</label>
          <input onChange={(e) => {    changePassword(e);  }} type="password" id="password" placeholder="Enter passowrd" />
    
      
      <button className="buttt" onClick={(e) => {  addUser();  }} > Submit </button>  */}
      </div>

    // <div className="divS"> 

    //  



      
    // </div>
    
  );
}


