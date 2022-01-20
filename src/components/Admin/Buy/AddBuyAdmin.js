import React, { useState } from "react";
import axios from "axios";
import ProgressBar from '../../ProgressBar';
import { useHistory } from "react-router-dom";
import { GiReturnArrow } from 'react-icons/gi';

//

export default function AddBuyAdmin(props) {
  const history = useHistory();
  // console.log(props, "rawaaaaaaaan")
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
  
      const addAqars = async ()=>{
        const result = await axios.post(
          `${process.env.REACT_APP_BACKEND_URL}/Buy`,
          { name, price, img, location, space,city, mobileNumber,description },
          {
            headers: { authorization: `Bearer ${token}` },
          });
          history.push("/BuyAdmin");

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
    Add Buy Admin 
    <button onClick={() => {history.push("/BuyAdmin"); }} className="tt"><GiReturnArrow/></button>  
      <div className="addB">  
          <h2> أضافه إعلان بيع عقاري </h2>
          <hr/>
          <label>: أسم العقار</label>
        <input className="inputC" onChange={(e) => {  (setname(e.target.value)) ; }} placeholder="name" />
        <label>: صوره العقار</label>
      <input className="inputC" type="file" onChange={handleChange} />
      <label>: المدينة</label>
      <input className="inputC"onChange={(e) => {  (setcity(e.target.value));}} placeholder="city"/>
      <label>: مساحة  العقار</label>
      <input className="inputC"  onChange={(e) => {  (setspace(e.target.value));}} placeholder="space"/>
      <label>: معلومات عن العقار</label>
      <input className="inputC" onChange={(e) => {  (setdescription(e.target.value));}} placeholder="description"/>
      <label>: موقع العقار على قوقل ماب</label>
      <input className="inputC" onChange={(e) => {  (setlocation(e.target.value));}} placeholder="location"/> 
      <label>:سعر العقار</label>
      <input className="inputC" onChange={(e) => { (setprice(e.target.value)); }} placeholder="price" />
      <label>: رقم هاتف المنشأة</label>
      <input className="inputC" onChange={(e) => {  (setmobileNumber(e.target.value));}} placeholder="mobileNumber"/>


    
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
