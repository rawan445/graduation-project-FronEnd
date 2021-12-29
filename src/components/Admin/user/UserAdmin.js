import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { FaUserPlus ,FaUserAltSlash ,FaUserEdit } from 'react-icons/fa';
import { GiReturnArrow } from 'react-icons/gi';


import "./UserAdmin.css"
import axios from "axios";
export default function User({token}) {
    const history = useHistory();
    const [User, setUser] = useState([])
    
    useEffect(async () => {
        const res = await axios.get("http://localhost:5000/users", {
          headers: {authorization: `Bearer ${token}` },
        });
        setUser(res.data);
      }, [token]);
      // console.log("token",token);


      const deleteUser = async (id, index)=>{
        console.log("id : ",id  ,"token : ",token);
     
       const deletedAqar = await axios.delete('http://localhost:5000/user/'+id,{
         headers:{authorization: "Bearer " + token},
       });
       console.log("delete : ",deletedAqar.data);
       if (deletedAqar.data === "deleted"){
         const copiedArr= [...User];
       copiedArr.splice(index,1);
       setUser(copiedArr);
       }
      }
    return (
        <div>
     <hr/>

<button onClick={() => {history.push("/Admin"); }} className="tt"><GiReturnArrow/></button>  
<button onClick={() => {history.push("/AddUserAdmin"); }} className="tt"><FaUserPlus/></button>  

<hr/>
    
{User.map((element, i) => {
        return (<>

<table className="table">
  <tr className="tr">
    <th >تحرير</th>
    <th>حذف</th>
    <th>اسم مستخدم  </th>
  </tr>
  <tr className="tr">
    <td className="ttt" onClick={() => {history.push("/UpdateUserAdmin/" + element._id); }}><FaUserEdit/></td>
    <td className="ttt" onClick={() => {  deleteUser(element._id, i); }}> <FaUserAltSlash/></td>
    <td > {element.name}  </td>
  </tr>
  
</table>
</>
)
})}

        </div>
    )
}