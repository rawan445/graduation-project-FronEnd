
import React,{useEffect , useState} from "react";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import axios from "axios";
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
    useEffect(async () => {
      const res = await axios.get(`http://localhost:5000/Buy/`+id, {
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
    const upd = await axios.put(`http://localhost:5000/Buy/`+id,{ name, price, img, location, space,city, mobileNumber,description },
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
  console.log("name",name);
    return (
        <div>
             <div>
          <button className="btn"  onClick={() => {  BuyAdmin(a._id); }}> رجوع </button>
          </div>
نعديل اعلان البيع Update Buy Admin
      <div className="add">  
      <input onChange={(e) => {  (setname(e.target.value)) ; }} placeholder="name" value={name}/>
      <input onChange={(e) => { (setprice(e.target.value)); }} placeholder="price" value={price}/>
      <input onChange={(e) => {  (setimg(e.target.value));}} placeholder="img" value={img}/>
      <input onChange={(e) => {  (setlocation(e.target.value));}} placeholder="location" value={location}/>
      <input onChange={(e) => {  (setspace(e.target.value));}} placeholder="space" value={space}/>
      <input onChange={(e) => {  (setcity(e.target.value));}} placeholder="city" value={city}/>
      <input onChange={(e) => {  (setmobileNumber(e.target.value));}} placeholder="mobileNumber" value={mobileNumber}/>
      <input onChange={(e) => {  (setdescription(e.target.value));}} placeholder="description" value={description}/>

      <button className="btn"  onClick={() => {  updateH(a._id); }}> تحرير </button>
      </div>
        </div>
    )
}




