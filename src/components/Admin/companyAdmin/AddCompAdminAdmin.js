import React, { useState } from "react";
import axios from "axios";
import ProgressBar from '../../ProgressBar';
import { GiReturnArrow } from 'react-icons/gi';

import { useHistory } from "react-router-dom";
// import "../add.css"

//

export default function AddAqar(props) {
  const history = useHistory();
  // console.log(props, "rawaaaaaaaan")
  const {token ,settoken} = props
  const [name, setname] = useState("")
  const [logo, setimg] = useState("")
  const [city, setcity] = useState("")
  const [description, setdescription] = useState("")
  const [location, setlocation] = useState("")
  const [mobileNumber, setmobileNumber] = useState("")
  const [nameAqar, setnameAqar] = useState("")
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);

  const types = ['image/png', 'image/jpeg']; //الصيغ االمسموحه لتحميلها 

      const addAqars=async ()=>{
        const result = await axios.post(
          `${process.env.REACT_APP_BACKEND_URL}/company`,
          {name ,logo,city,description,location,mobileNumber, nameAqar },
          {
            headers: { authorization: `Bearer ${token}` },
          });
          history.push("/CompAdmin");

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
       <div>
          <button onClick={() => {history.push("/CompAdmin"); }}><GiReturnArrow/></button>  

          </div>
          <div className="addC">  
          <h2>تسجيل منشأة </h2>
          <hr/>
          <label>: أسم النمشأة</label>
        <input className="inputC" onChange={(e) => {  (setname(e.target.value)) ; }} placeholder="name" />
        <label>: شعار النمشأة</label>

      <input className="inputC"type="file" onChange={handleChange} />
      <label>: المدينة</label>
      <input className="inputC"onChange={(e) => {  (setcity(e.target.value));}} placeholder="city"/>
      <label>: معلومات عن المنشأة</label>
      <input className="inputC"onChange={(e) => {  (setdescription(e.target.value));}} placeholder="description"/>
      <label>: موقع المنشأة على قوقل ماب</label>
      <input className="inputC"onChange={(e) => {  (setlocation(e.target.value));}} placeholder="location"/>
      <label>: رقم هاتف المنشأة</label>
      <input className="inputC"onChange={(e) => {  (setmobileNumber(e.target.value));}} placeholder="mobileNumber"/>
      <label>: عدد العقارات المتوفره في المنشأة</label>
      <input className="inputC"onChange={(e) => {  (setnameAqar(e.target.value));}} placeholder="nameAqar"/>
    
      <label>
      </label>
      <div className="output">
        { error && <div className="error">{ error }</div>}
        { file && <div>{ file.name }</div> }
        { file && <ProgressBar file={file} setFile={setFile} setimg={setimg} /> }
      </div>
      <button className="buttt" onClick={() => { addAqars()}} > Submit </button> 
      </div>
        </>
    )
}
