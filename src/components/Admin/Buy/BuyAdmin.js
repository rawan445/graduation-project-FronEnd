import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import "./BuyAdmin.css"

export default function BuyAdmin(props) {
  const {token ,settoken} = props

    const [BuyA, setBuyA] = useState([])
    const history = useHistory();
    useEffect(async () => {
        const res = await axios.get("http://localhost:5000/Buys", {
        });
        setBuyA(res.data);
        console.log("Data : ",res.data);
      }, []);

      const deleteBuy = async (id, index)=>{
      //   console.log("id : ",id  ,"token : ",token);
     
      const deletedBuy = await axios.delete('http://localhost:5000/BuyAdmin/'+id,{
        headers:{authorization: "Bearer " + token},
      });
      console.log("delete : ",deletedBuy.data);
      
      if (deletedBuy.data === "deleted"){
        const copiedArr= [...BuyA];
      copiedArr.splice(index,1);
      setBuyA(copiedArr);
      }
     }
    
    return (
        <div>
                    <hr/>
<button onClick={() => {history.push("/Admin"); }}>الرجوع للوحة التحكم</button>   
<button onClick={() => {history.push("/AddBuyAdmin"); }}>اضافه اعلان بيع</button>  
<hr/>

{BuyA.map((element, i) => {
        return (<>

<table className="table">
  <tr className="tr">
    <th >تحرير</th>
    <th>حذف</th>
    <th>اسم اعلان البيع</th>
  </tr>
  <tr className="tr">
  
    <td onClick={() => {history.push("/UpdateBuyAdmin/" + element._id); }}>✏️</td>
    <td onClick={() => {  deleteBuy(element._id ,i); }}>🗑︎</td>
    <td>{element.name}</td>
  </tr>
  
</table>
</>
)
})}
   </div>
    )
}
