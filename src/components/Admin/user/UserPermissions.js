import React,{useEffect , useState} from "react";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import axios from "axios";
export default function UpdateUserAdmin({token}) {
    const history = useHistory();

    const {id} = useParams()
    const [a, seta] = useState([])
    const [role, setrole] = useState("")


    useEffect(async () => {
      const res = await axios.get(`http://localhost:5000/user/`+id, {
        headers: { authorization: `Bearer ${token}`  },
        });
        seta(res.data)
        setrole(res.data.role)
  
      console.log("Data : ",res.data);
      
    }, [token]);
    console.log("id :",id);
    console.log("token :",token);


  const updateH = async ()=>{
    const upd = await axios.put(`http://localhost:5000/user/`+id,{ role },
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
 <div className="add">  
 <input onChange={(e) => {  (setrole(e.target.value)) ; }} placeholder="role" value={role}/>

 
 <button className="btn"  onClick={() => {  updateH(a._id); }}> تحرير </button>
 </div>
   </div>
    )
}
