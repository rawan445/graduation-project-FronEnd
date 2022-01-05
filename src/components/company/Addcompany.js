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
    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);
  
    const types = ['image/png', 'image/jpeg']; //الصيغ االمسموحه لتحميلها 



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
      {/* <input onChange={(e) => {  (setlogo(e.target.value)); }} placeholder="logo" /> */}
      <input type="file" onChange={handleChange} />

      <input onChange={(e) => {  (setcity(e.target.value));}} placeholder="city"/>
      <input onChange={(e) => {  (setdescription(e.target.value));}} placeholder="description"/>
      <input onChange={(e) => {  (setlocation(e.target.value));}} placeholder="location"/>
      <input onChange={(e) => {  (setmobileNumber(e.target.value));}} placeholder="mobileNumber"/>
      <input onChange={(e) => {  (setnameAqar(e.target.value));}} placeholder="nameAqar"/>
      <form>
      <label>
        {/* <input type="file" onChange={handleChange} /> */}
      </label>
      <div className="output">
        { error && <div className="error">{ error }</div>}
        { file && <div>{ file.name }</div> }
        { file && <ProgressBar file={file} setFile={setFile} setimg={setimg} /> }
      </div>
    </form>
      <button onClick={() => { addAqars()}} > Submit </button>
      </div>
        </>
    )
}