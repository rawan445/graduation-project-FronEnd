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
    const [file, setFile] = useState(null);
  const [error, setError] = useState(null);

  const types = ['image/png', 'image/jpeg']; //الصيغ االمسموحه لتحميلها 

    useEffect(async () => {
      const res = await axios.get(`http://localhost:5000/Rent/`+id, {
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
      // console.log("id :",id);
      // console.log("Data : ",res.data);
      
    }, [token]);
    
  const updateH = async ()=>{
    const upd = await axios.put(`http://localhost:5000/Rent/`+id,{ name, price, img, location, space,city, mobileNumber,description },
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
        <div>
     <button className="btn"  onClick={() => {  updateA(a._id); }}> رجوع </button>
     </div>
     نعديل اعلان الايجار
 <div className="add">  
 <input onChange={(e) => {  (setname(e.target.value)) ; }} placeholder="name" value={name}/>
 <input onChange={(e) => { (setprice(e.target.value)); }} placeholder="price"value={price} />
 {/* <input onChange={(e) => {  (setimg(e.target.value));}} placeholder="img"value={img}/> */}
 <input type="file" onChange={handleChange} />

 <input onChange={(e) => {  (setlocation(e.target.value));}} placeholder="location"value={location}/>
 <input onChange={(e) => {  (setspace(e.target.value));}} placeholder="space"value={space}/>
 <input onChange={(e) => {  (setcity(e.target.value));}} placeholder="city"value={city}/>
 <input onChange={(e) => {  (setmobileNumber(e.target.value));}} placeholder="mobileNumber"value={mobileNumber}/>
 <input onChange={(e) => {  (setdescription(e.target.value));}} placeholder="description"value={description}/>
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
 <button className="btn"  onClick={() => {  updateH(a._id); }}> تحرير </button>
 </div>
   </div>
    )
}
