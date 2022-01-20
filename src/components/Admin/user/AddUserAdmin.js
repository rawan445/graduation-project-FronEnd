import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { GiReturnArrow } from 'react-icons/gi';

export default function AddUserAdmin(props) {
    const history = useHistory();

    const {token ,settoken} = props
    const [name, setname] = useState("")
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    
    const addUser=async ()=>{
        const result = await axios.post( `${process.env.REACT_APP_BACKEND_URL}/signUp`,{ name, email, password},
          {
            headers: { authorization: `Bearer ${token}` },
          });
          console.log(result.data);
          history.push("/UserAdmin/");

            }
    return (<>
     <button onClick={() => {history.push("/UserAdmin"); }} className="tt"><GiReturnArrow/></button>  <hr/>
      <div className="addC">  
          <h2>تسجيل مستخدم جديد </h2>
          <hr/>
          <label>: أسم المستخدم</label>
        <input className="inputC" onChange={(e) => {  (setname(e.target.value)) ; }} placeholder="name" />
        <label>: البريد الالتروني</label>
        <input className="inputC" onChange={(e) => {  (setemail(e.target.value)) ; }} placeholder="email" />
        <label>: الرقم السري </label>
        <input className="inputC"  onChange={(e) => {  (setpassword(e.target.value));}} placeholder="password"/>
   


      <button className="buttt" onClick={() => { addUser()}} > Submit </button> 
      </div>
        </>
    )
}
