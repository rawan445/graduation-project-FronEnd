import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

export default function RentAdmin() {
    const history = useHistory();
const [Rent, setRent] = useState([])
    useEffect(async () => {
        const res = await axios.get("http://localhost:5000/Rents", {
        });
        setRent(res.data);
      }, []);
      const deleteRent = async (id, index)=>{
        console.log("id : ",id);

    }
    return (
        <div>
                <hr/>
        <button onClick={() => {history.push("/Admin"); }}>الرجوع للوحة التحكم</button>  
     
        <button>اضافه اعلان ايجار</button> 
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
    <td >✏️</td>
    <td onClick={() => {  deleteRent(element._id); }}>🗑︎</td>
    <td>{element.name}</td>
  </tr>
  
</table>
</>
)
})}
        </div>
    )
}
