import React,{useEffect , useState} from "react";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import axios from "axios";
export default function UpdateUserAdmin({token}) {
    const history = useHistory();

    const {id} = useParams()
    const [a, seta] = useState([])
    const [name, setname] = useState("")
    const [email, setemail] = useState("")


    useEffect(async () => {
      const res = await axios.get(`h${process.env.REACT_APP_BACKEND_URL}/user/`+id, {
        headers: { authorization: `Bearer ${token}`  },
        });
        seta(res.data)
      setname(res.data.name)
      setemail(res.data.email)
  
      console.log("Data : ",res.data);
      
    }, [token]);
    console.log("id :",id);
    console.log("token :",token);


  const updateH = async ()=>{
    const upd = await axios.put(`${process.env.REACT_APP_BACKEND_URL}/user/`+id,{ name, email },
    {
      headers:{authorization: "Bearer " + token},
    }); 
    console.log("id :",id);
    seta(upd.data);
    console.log(upd.data,"dadt");
    history.push("/UserAdmin");

    
  }
  const UserAdmin = () => {
    history.push("/UserAdmin");
    
  };

    return (
        <div>
        <div>
        
     <button className="btn"  onClick={() => {  UserAdmin(a._id); }}> رجوع </button>
     </div>

تعديل بيانات المستخدم 

 <div className="addC">  
          <h2>تسجيل مستخدم جديد </h2>
          <hr/>
          <label>: أسم المستخدم</label>
        <input className="inputC" onChange={(e) => {  (setname(e.target.value)) ; }} placeholder="name" value={name} />
        <label>: البريد الالتروني</label>
        <input className="inputC" onChange={(e) => {  (setemail(e.target.value)) ; }} placeholder="email" value={email}/>
   


      <button className="buttt" onClick={() => { updateH()}} > Submit </button> 
      </div>
 </div>
    )
}
