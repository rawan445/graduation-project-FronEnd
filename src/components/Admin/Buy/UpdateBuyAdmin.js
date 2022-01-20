
import React,{useEffect , useState} from "react";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import axios from "axios";
import ProgressBar from '../../ProgressBar';

export default function UpdateBuyAdmin({token }) {
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
      const res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/Buy/`+id, {
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
    const upd = await axios.put(`${process.env.REACT_APP_BACKEND_URL}/Buy/`+id,{ name, price, img, location, space,city, mobileNumber,description },
    {
      headers:{authorization: "Bearer " + token},
    }); 
    console.log("id :",id);
    seta(upd.data);
    console.log(upd.data,"dadt");
    history.push("/BuyAdmin");

  }
  console.log("id :",id);
  const BuyAdmin = (id) => {
    history.push("/BuyAdmin/");
    // console.log("id BuyDetails : ",id);

    
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
  console.log("name",name);
    return (<>
             
          <button className="btn"  onClick={() => {  BuyAdmin(a._id); }}> رجوع </button>


      <div className="addB">  
          <h2> أضافه إعلان بيع عقاري </h2>
          <hr/>
          <label>: أسم العقار</label>
        <input className="inputC" onChange={(e) => {  (setname(e.target.value)) ; }} placeholder="name"value={name} />
        <label>: صوره العقار</label>
      <input className="inputC" type="file" onChange={handleChange} />
      <label>: المدينة</label>
      <input className="inputC"onChange={(e) => {  (setcity(e.target.value));}} placeholder="city" value={city}/>
      <label>: مساحة  العقار</label>
      <input className="inputC"  onChange={(e) => {  (setspace(e.target.value));}} placeholder="space "  value={space}/>
      <label>: معلومات عن العقار</label>
      <input className="inputC" onChange={(e) => {  (setdescription(e.target.value));}} placeholder="description" value={description}/>
      <label>: موقع العقار على قوقل ماب</label>
      <input className="inputC" onChange={(e) => {  (setlocation(e.target.value));}} placeholder="location" value={location}/> 
      <label>:سعر العقار</label>
      <input className="inputC" onChange={(e) => { (setprice(e.target.value)); }} placeholder="price" value={price}/>
      <label>: رقم هاتف المنشأة</label>
      <input className="inputC" onChange={(e) => {  (setmobileNumber(e.target.value));}} placeholder="mobileNumber" value={mobileNumber}/>


    
      <label>
      </label>
      <div className="output">
        { error && <div className="error">{ error }</div>}
        { file && <div>{ file.name }</div> }
        { file && <ProgressBar file={file} setFile={setFile} setimg={setimg} /> }
      </div>
      <button className="buttt" onClick={() => { updateH()}} > Submit </button> 
      </div>
        </>
    )
}




