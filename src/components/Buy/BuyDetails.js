import React,{useEffect , useState} from "react";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import axios from "axios";
import "./Buy.css"

export default function AqarDetails({token}) {
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
    console.log("id :",id);
    seta(res.data);
    console.log(res.data,"dadt");
    
  }, []);

  const updateH = async (id)=>{
    const upd = await axios.put(`http://localhost:5000/Buy/`+id,{ name, price, img, location, space,city, mobileNumber,description },
    {
      headers:{authorization: "Bearer " + token},
    }); 

    // const caa=[...a]
    // caa[i]=upd.data
    // seta(caa)
    console.log(upd.data,"jjjj");
    seta(upd.data)
  }
  const updateA = (id) => {
    console.log("hhhhhhhhhhhh");
    history.push("/UpdateBuy/" + id);
  };
    return (
        <div>
          تفاصيل

          <div>
          <button className="btn"  onClick={() => {  updateA(a._id); }}> تحرير </button>
          </div>
          <div className="add">  
      <input onChange={(e) => {  (setname(e.target.value)) ; }} placeholder="name" value={"hhhhhh"} />
      <input onChange={(e) => { (setprice(e.target.value)); }} placeholder="price" />
      <input onChange={(e) => {  (setimg(e.target.value));}} placeholder="img"/>
      <input onChange={(e) => {  (setlocation(e.target.value));}} placeholder="location"/>
      <input onChange={(e) => {  (setspace(e.target.value));}} placeholder="space"/>
      <input onChange={(e) => {  (setcity(e.target.value));}} placeholder="city"/>
      <input onChange={(e) => {  (setmobileNumber(e.target.value));}} placeholder="mobileNumber"/>
      <input onChange={(e) => {  (setdescription(e.target.value));}} placeholder="description"/>

      <button className="btn"  onClick={() => {  updateH(a._id); }}> تحرير </button>
      </div>
          <div>
          <h4>{a.name}</h4>
          <h4>{a.price}</h4>
          <img className="imgAqar1" src={a.img}alt="..."/>
          <iframe src={a.location} allowfullscreen="" loading="lazy"></iframe>
          <h4>{a.description}</h4>
          <h4>{a.space}</h4>
          <h4>{a.city}</h4>
          <h4>{a.mobileNumber}</h4>
          </div>

        </div>
    )
}
