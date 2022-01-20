import React,{useEffect , useState} from "react";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import ProgressBar from '../ProgressBar';
import axios from "axios";
export default function UpdateRent({token }) {
    const history = useHistory();

    const {id} = useParams()
    const [a, seta] = useState([])
    const [name, setname] = useState("")
    const [price, setprice] = useState("")
    const [img, setimg] = useState("")
    const [location, setlocation] = useState("")
    const [space, setspace] = useState("")
    const [city, setcity] = useState("")
    const [mobileNumber, setmobileNumber] = useState("")
    const [description, setdescription] = useState("")
    const [bedRooms, setbedRooms] = useState("")
    const [LivingRoom, setLivingRoom] = useState("")
    const [bathRoom, setbathRoom] = useState("")
    const [roleA, setroleA] = useState("")
    const [propertyAge, setpropertyAge] = useState("")
    const [file, setFile] = useState(null);
  const [error, setError] = useState(null);

  const types = ['image/png', 'image/jpeg']; //الصيغ االمسموحه لتحميلها 

    useEffect(async () => {
      const res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/Rent/`+id, {
        headers: { authorization: `Bearer ${token}`  },
        });
      setname(res.data.name)
      setprice(res.data.price)
      setimg(res.data.img)
      setlocation(res.data.location)
      setspace(res.data.space)
      setcity(res.data.city)
      setmobileNumber(res.data.mobileNumber)
      setdescription(res.data.description)
      
      setbedRooms(res.data.bedRooms)
      setLivingRoom(res.data.LivingRoom)
      setbathRoom(res.data.bathRoom)
      setroleA(res.data.roleA)
      setpropertyAge(res.data.propertyAge)
      // console.log("id :",id);
      // console.log("Data : ",res.data);
      
    }, [token]);
    
  const updateH = async ()=>{
    const upd = await axios.put(`${process.env.REACT_APP_BACKEND_URL}/Rent/`+id,{ name,  price,   img,  location,  space,  city, mobileNumber, description ,bedRooms,LivingRoom ,bathRoom , roleA, propertyAge },
    {
      headers:{authorization: "Bearer " + token},
    }); 
    // console.log("id :",id);
    seta(upd.data);
    console.log(upd.data,"dadt");
    history.push("/rent");

  }
  const updateA = () => {
    history.push("/rent");
    
  };
                     
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
    return (
        <div>

        <div className="addB">  
          <h2> تحرير الإعلان   </h2>
          <hr/>
          <label>: أسم العقار</label>
        <input className="inputC" onChange={(e) => {  (setname(e.target.value)) ; }} placeholder="name" value={name}/>
        <label>: صوره العقار</label>
      <input className="inputC" type="file" onChange={handleChange} />
      <label>: المدينة</label>
      <input className="inputC"onChange={(e) => {  (setcity(e.target.value));}} placeholder="city"value={city}/>
      <label>: مساحة  العقار</label>
      <input className="inputC"  onChange={(e) => {  (setspace(e.target.value));}} placeholder="space"value={space}/>
      <label>: غرف النوم</label>
      <input className="inputC" onChange={(e) => {  (setbedRooms(e.target.value));}} placeholder="bedRooms" value={bedRooms}/>
      <label>: غرف المعيشة</label>
      <input className="inputC" onChange={(e) => {  (setLivingRoom(e.target.value));}} placeholder="LivingRoom" value={LivingRoom}/>
      <label>: دورات المياة</label>
      <input className="inputC" onChange={(e) => {  (setbathRoom(e.target.value));}} placeholder="bathRoom" value={bathRoom}/>
      <label>:         الدور</label>
      <input className="inputC" onChange={(e) => {  (setroleA(e.target.value));}} placeholder="role" value={roleA}/>
      <label>: عمر العقار</label>
      <input className="inputC" onChange={(e) => {  (setpropertyAge(e.target.value));}} placeholder="propertyAge" value={propertyAge}/>
      <label>: مساحة  العقار</label>
      <input className="inputC"  onChange={(e) => {  (setspace(e.target.value));}} placeholder="space"  value={space}/>
      <label>: معلومات عن العقار</label>
      <input className="inputC" onChange={(e) => {  (setdescription(e.target.value));}} placeholder="description" value={description}/>
      <label>: موقع العقار على قوقل ماب</label>
      <input className="inputC" onChange={(e) => {  (setlocation(e.target.value));}} placeholder="location"value={location}/> 
      <label>:سعر العقار</label>
      <input className="inputC" onChange={(e) => { (setprice(e.target.value)); }} placeholder="price"value={price} />
      <label>: رقم هاتف المنشأة</label>
      <input className="inputC" onChange={(e) => {  (setmobileNumber(e.target.value));}} placeholder="mobileNumber"value={mobileNumber}/>


    
      <label>
      </label>
      <div className="output">
        { error && <div className="error">{ error }</div>}
        { file && <div>{ file.name }</div> }
        { file && <ProgressBar file={file} setFile={setFile} setimg={setimg} /> }
      </div>
      <button className="buttt" onClick={() => { updateH()}} > Submit </button> 
      </div>
   </div>
    )
}
