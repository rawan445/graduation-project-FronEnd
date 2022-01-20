import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import ProgressBar from '../ProgressBar';


//
export default function Addcompany({token}) {
    const history = useHistory();
    // console.log(props, "rawaaaaaaaan")
    // const {token ,settoken} = props
    const [name, setname] = useState("")
    const [logo, setimg] = useState("")
    const [city, setcity] = useState("")
    const [description, setdescription] = useState("")
    const [location, setlocation] = useState("")
    const [mobileNumber, setmobileNumber] = useState("")
    const [nameAqar, setnameAqar] = useState("")
    const [email, setemail] = useState("")
    const [website, setwebsite] = useState("")
    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);
    const types = ['image/png', 'image/jpeg' ,'image/jfif']; //الصيغ االمسموحه لتحميلها 

    const addAqars=async ()=>{
        const result = await axios.post(
          `${process.env.REACT_APP_BACKEND_URL}/company`,
          {name,logo,city, description,location, mobileNumber, nameAqar,email, website},
          {
            headers: { authorization: `Bearer ${token}` },
          });
        //   seta(result.data)
          history.push("/Company");
        //   console.log("ddddddddd",result.data);

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
      {/* <input className="inputC"onChange={(e) => {  (setdescription(e.target.value));}} placeholder="description"/> */}
      <label>: موقع المنشأة على قوقل ماب</label>
      <input className="inputC"onChange={(e) => {  (setlocation(e.target.value));}} placeholder="location"/>
      <label>: رقم هاتف المنشأة</label>
      <input className="inputC"onChange={(e) => {  (setmobileNumber(e.target.value));}} placeholder="mobileNumber"/>
      <label>: بريد الالكتروني المنشأة</label>
      <input className="inputC"onChange={(e) => {  (setemail(e.target.value));}} placeholder="mobileNumber"/>
      <label>: موقع ويب المنشأة</label>
      <input className="inputC"onChange={(e) => {  (setwebsite(e.target.value));}} placeholder="mobileNumber"/>
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

