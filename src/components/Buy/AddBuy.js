import React, { useState } from "react";
import axios from "axios";
import ProgressBar from '../ProgressBar';
import { useHistory } from "react-router-dom";
import "./add.css"
//
export default function AddAqar(props) {
  const history = useHistory();
  const {token ,settoken} = props
  const [name, setname] = useState("")
  const [price, setprice] = useState("")
  const [img, setimg] = useState("")
  const [location, setlocation] = useState("")
  const [space, setspace] = useState("")
  const [city, setcity] = useState("")
  const [mobileNumber, setmobileNumber] = useState("")
  const [description, setdescription] = useState("")
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);
  const types = ['image/png', 'image/jpeg']; //الصيغ االمسموحه لتحميلها 

      const addAqars=async ()=>{
        const result = await axios.post(
          "http://localhost:5000/Buy",
          { name, price, img, location, space,city, mobileNumber,description },
          {
            headers: { authorization: `Bearer ${token}` },
          });
          history.push("/Buy");
      }

  const handleChange = (e) => {
    let selected = e.target.files[0];
    if (selected && types.includes(selected.type)) {
      setFile(selected);
      console.log(selected);
      setError('');
    } else {
      setFile(null);
      setError('Please select an image file (png or jpg)');
    }
    setimg(e.target.value)
  };

    return (<>
      <div className="add">  
      <input onChange={(e) => {  (setname(e.target.value)) ; }} placeholder="name" />
      <input onChange={(e) => { (setprice(e.target.value)); }} placeholder="price" />
      <input type="file" onChange={handleChange} />
      <input onChange={(e) => {  (setlocation(e.target.value));}} placeholder="location"/>
      <input onChange={(e) => {  (setspace(e.target.value));}} placeholder="space"/>
      <input onChange={(e) => {  (setcity(e.target.value));}} placeholder="city"/>
      <input onChange={(e) => {  (setmobileNumber(e.target.value));}} placeholder="mobileNumber"/>
      <input onChange={(e) => {  (setdescription(e.target.value));}} placeholder="description"/>
        { error && <div>{ error }</div>}
        { file && <div>{ file.name }</div> }
        { file && <ProgressBar file={file} setFile={setFile} setimg={setimg} /> }
      <br/>  <button onClick={() => { addAqars()}} > Submit </button>
    </div>  
        </>
    )}
