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
        const result = await axios.post( "http://localhost:5000/signUp",{ name, email, password},
          {
            headers: { authorization: `Bearer ${token}` },
          });
          console.log(result.data);
          history.push("/UserAdmin/");

            }
    return (<>
     <button onClick={() => {history.push("/UserAdmin"); }} className="tt"><GiReturnArrow/></button>  
     Add user (Admin) 

        <div className="add">  
      <input onChange={(e) => {  (setname(e.target.value)) ; }} placeholder="name" />
      <input onChange={(e) => { (setemail(e.target.value)); }} placeholder="email" />
      <input onChange={(e) => {  (setpassword(e.target.value));}} placeholder="password"/>
  

      <button onClick={() => { addUser()}} > Submit </button>
      </div>
        </>
    )
}
