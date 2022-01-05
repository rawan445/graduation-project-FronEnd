import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { HiOutlineDocumentAdd} from 'react-icons/hi';
import { GiReturnArrow } from 'react-icons/gi';
import "../Admin.css"
export default function CompAdmin({token}) {
    const history = useHistory();
    const [BuyA, setBuyA] = useState([])

    useEffect(async () => {
        const res = await axios.get("http://localhost:5000/companys", {
        });
        setBuyA(res.data);
        console.log("Data : ",res.data);
      }, []);

    
      const deleteUser = async (id, index)=>{
        console.log("id : ",id  ,"token : ",token);
     
       const deletedAqar = await axios.delete('http://localhost:5000/company/'+id,{
         headers:{authorization: "Bearer " + token},
       });
       console.log("delete : ",deletedAqar.data);
       if (deletedAqar.status === 203){
         const copiedArr= [...BuyA];
       copiedArr.splice(index,1);
       setBuyA(copiedArr);
       }
            //  setUser(User);
      }
    return (
        <div>
     <hr/>
     <button onClick={() => {history.push("/Admin"); }}><GiReturnArrow/></button>  
     <button onClick={() => {history.push("/AddCompAdminAdmin"); }}><HiOutlineDocumentAdd/></button>  
     <hr/>
     
     
     {BuyA.map((element, i) => {
        return (<>

<table className="table">
  <tr className="tr">
    <th >تحرير</th>
    <th>حذف</th>
    <th>  أسم منشأت والمكاتب العقارية</th>
  </tr>
  <tr className="tr">
  
    <td  onClick={() => {history.push("/UpdateCompAdmin/" + element._id); }} >✏️</td>
    <td onClick={() => {  deleteUser(element._id ,i); }}>🗑︎</td>
    <td>{element.name}</td>
  </tr>
  
</table>
</>
)
})}
   </div>
    )
}
