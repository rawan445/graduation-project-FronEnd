import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { HiOutlineDocumentAdd} from 'react-icons/hi';
import { GiReturnArrow } from 'react-icons/gi';
import axios from "axios";

export default function RentAdmin({token}) {
    const history = useHistory();
const [Rent, setRent] = useState([])
    useEffect(async () => {
        const res = await axios.get("http://localhost:5000/Rents", {
        });
        setRent(res.data);
      }, []);
 

    const deleteRent = async (id, index)=>{
        console.log("id : ",id  ,"token : ",token ,"i :",index);
    
     }
    return (
        <div>
                <hr/>
        <button onClick={() => {history.push("/Admin"); }}><GiReturnArrow/></button>  
     
        <button><HiOutlineDocumentAdd/></button> 
     <hr/>

     
{Rent.map((element, i) => {
        return (<>

<table className="table">
  <tr className="tr">
    <th >تحرير</th>
    <th>حذف</th>
    <th>اسم اعلان الايجار</th>
  </tr>
  <tr className="tr">
  
    <td onClick={() => {history.push("/RentAdmin"); }}>✏️</td>
    <td onClick={() => {  deleteRent(element._id ,i); }}>🗑︎</td>
    <td>{element.name}</td>
  </tr>
  
</table>
</>
)
})}
        </div>
    )
}
