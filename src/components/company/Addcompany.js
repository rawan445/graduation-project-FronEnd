import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
//

export default function Addcompany({token}) {
    const history = useHistory();
    // console.log(props, "rawaaaaaaaan")
    // const {token ,settoken} = props
    const [name, setname] = useState("")
    const [logo, setlogo] = useState("")
    const [city, setcity] = useState("")
    const [description, setdescription] = useState("")
    const [location, setlocation] = useState("")
    const [mobileNumber, setmobileNumber] = useState("")
    const [nameAqar, setnameAqar] = useState("")



    const addAqars=async ()=>{
        const result = await axios.post(
          "http://localhost:5000/company",
          {name,logo,city, description,location, mobileNumber, nameAqar},
          {
            headers: { authorization: `Bearer ${token}` },
          });
        //   seta(result.data)
          history.push("/Company");
        //   console.log("ddddddddd",result.data);

            }
    return (<>
        <div className="add">  
      <input onChange={(e) => {  (setname(e.target.value)) ; }} placeholder="name" />
      <input onChange={(e) => {  (setlogo(e.target.value)); }} placeholder="logo" />
      <input onChange={(e) => {  (setcity(e.target.value));}} placeholder="city"/>
      <input onChange={(e) => {  (setdescription(e.target.value));}} placeholder="description"/>
      <input onChange={(e) => {  (setlocation(e.target.value));}} placeholder="location"/>
      <input onChange={(e) => {  (setmobileNumber(e.target.value));}} placeholder="mobileNumber"/>
      <input onChange={(e) => {  (setnameAqar(e.target.value));}} placeholder="nameAqar"/>

      <button onClick={() => { addAqars()}} > Submit </button>
      </div>
        </>
    )
}