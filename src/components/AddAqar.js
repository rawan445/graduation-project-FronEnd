import React, { useState } from "react";
import axios from "axios";
import "./add.css"
export default function AddAqar(props) {
  console.log(props, "rawaaaaaaaan")
  const {token ,setCats} = props
  const [TitleAqar, setTitleAqar] = useState("")
  const [TypeAqar, setTypeAqar] = useState("")
  const [imgAqar, setimgAqar] = useState("")
  const [LocationAqar, setLocationAqar] = useState("")
  const [spaceAqar, setspaceAqar] = useState("")
  const [City, setCity] = useState("")
  const [NumberAqar, setNumberAqar] = useState("")

      const addAqars=async ()=>{
        const result = await axios.post(
          "http://localhost:5000/Aqars",
          { TitleAqar, TypeAqar, imgAqar, LocationAqar, spaceAqar,City, NumberAqar },
          {
            headers: { authorization: `Bearer ${token}` },
          }
        );
            }
    return (<>
        <div className="add">  
        <h5>أسم العقار</h5>
      <input onChange={(e) => {  (setTitleAqar(e.target.value)) ; }} placeholder="TitleAqar" />
      <h5>نوع القعد</h5>
      <input onChange={(e) => { (setTypeAqar(e.target.value)); }} placeholder="TypeAqar" />
      <h5></h5>
      <input onChange={(e) => {  (setimgAqar(e.target.value));}} placeholder="imgAqar"/>
      <input onChange={(e) => {  (setLocationAqar(e.target.value));}} placeholder="LocationAqar"/>
      <input onChange={(e) => {  (setspaceAqar(e.target.value));}} placeholder="spaceAqar"/>
      <input onChange={(e) => {  (setCity(e.target.value));}} placeholder="City"/>
      <input onChange={(e) => {  (setNumberAqar(e.target.value));}} placeholder="NumberAqar"/>
      <button onClick={() => { addAqars()}} > Submit </button>
      </div>
        </>
    )
}
