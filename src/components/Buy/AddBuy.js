import React, { useState } from "react";
import axios from "axios";
import ProgressBar from '../ProgressBar';
import { useHistory } from "react-router-dom";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

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
  const [mobileNumber, setmobileNumber] = useState("966")
  const [description, setdescription] = useState("")

  const [bedRooms, setbedRooms] = useState("")
  const [LivingRoom, setLivingRoom] = useState("")
  const [bathRoom, setbathRoom] = useState("")
  const [roleA, setroleA] = useState("")
  const [propertyAge, setpropertyAge] = useState("")

  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);
  const types = ['image/png', 'image/jpeg']; //الصيغ االمسموحه لتحميلها 

      const addAqars=async ()=>{
        const result = await axios.post(
          `${process.env.REACT_APP_BACKEND_URL}/Buy`,
          { name,  price,   img,  location,  space,  city, mobileNumber, description ,bedRooms,LivingRoom ,bathRoom , roleA, propertyAge },
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
      <input type="number" className="inputC"  onChange={(e) => {  (setspace(e.target.value));}} placeholder="space"/>
      <label>: غرف </label>
      <input  type="number" className="inputC" onChange={(e) => {  (setLivingRoom(e.target.value));}} placeholder="LivingRoom"/>
      <label>: غرف النوم</label>
      <input  type="number" className="inputC"   onChange={(e) => {  (setbedRooms(e.target.value));}} placeholder="bedRooms"/>
      <label>: دورات المياة</label>
      <input type="number" className="inputC" onChange={(e) => {  (setbathRoom(e.target.value));}} placeholder="bathRoom"/>
      <label>:         الدور</label>
      <input type="number" className="inputC" onChange={(e) => {  (setroleA(e.target.value));}} placeholder="role"/>
      <label>: عمر العقار</label>
      <input className="inputC" onChange={(e) => {  (setpropertyAge(e.target.value));}} placeholder="propertyAge"/>
      <label>: معلومات عن العقار</label>
      {/* <input className="inputC" onChange={(e) => {  (setdescription(e.target.value));}} placeholder="description"/> */}
      <CKEditor
              editor={ClassicEditor}
              data={description}
              onChange={(e, editor) => {
                const data = editor.getData();
                setdescription(data);
              }}/>
      <label>: موقع العقار على قوقل ماب</label>
      <input className="inputC" onChange={(e) => {  (setlocation(e.target.value));}} placeholder="location"/> 
      <label>:سعر العقار</label>
      <input type="number"className="inputC" onChange={(e) => { (setprice(e.target.value)); }} placeholder="price" />
      <label>: رقم هاتف المنشأة</label>
      <input type="number" className="inputC" onChange={(e) => {  (setmobileNumber(e.target.value));}} placeholder="mobileNumber" value={mobileNumber}/>

    
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
    )}
    
