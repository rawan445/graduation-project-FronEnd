import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { HiOutlineDocumentAdd} from 'react-icons/hi';
import { GiReturnArrow } from 'react-icons/gi';
import axios from "axios";

export default function RentAdmin({token}) {
    const history = useHistory();
const [Rent, setRent] = useState([])
    useEffect(async () => {
        const res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/Rents`, {
        });
        setRent(res.data);
      }, []);
 

    const deleteRent = async (id, index)=>{
      console.log("id : ",id  ,"token : ",token);
     
      const deletedAqar = await axios.delete(`${process.env.REACT_APP_BACKEND_URL}/RentAdmin/`+id,{
        headers:{authorization: "Bearer " + token},
      });
      if (deletedAqar.data === "deleted") {
       const copiedArr = [...Rent];
       copiedArr.splice(index, 1);
       setRent(copiedArr);
      }    
     }
    return (
        <div>
                <hr/>

                <h2>إعلانات الإيجار  </h2>

        <button onClick={() => {history.push("/Admin"); }}><GiReturnArrow/></button>  
        
        <button onClick={() => {history.push("/AddRentAdmin"); }}><HiOutlineDocumentAdd/></button> 
     <hr/>

     
{Rent.map((element, i) => {
        return (<div  key={element._id}>

<table className="table">
  <tr className="tr">
    <th >تحرير</th>
    <th>حذف</th>
    <th>اسم اعلان الايجار</th>
  </tr>
  <tr className="tr">
  
    <td onClick={() => {history.push("/UpdateRentAdmin/" + element._id); }}>✏️</td>
    <td onClick={() => {  deleteRent(element._id ,i); }}>🗑︎</td>
    <td>{element.name}</td>
  </tr>
  
</table>
</div>
)
})}
        </div>
    )
}
