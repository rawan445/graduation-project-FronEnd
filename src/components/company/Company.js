import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import "./com.css"
export default function Company({ token ,role,id}) {
    
  const history = useHistory();
  const [Company, setCompany] = useState([]);

  useEffect(async () => {
    const res = await axios.get("http://localhost:5000/companys", {
      headers: {authorization: `Bearer ${token}` },
    });
    setCompany(res.data);
    
    console.log(res.data);

  }, [token]);
  const Companydetails = (id) => {
    console.log("hhhhhhhhhhhh");
    history.push("/CompanyDetails/" + id );
  };

    return (
        <div>
        <h1>منشأت والمكاتب العقارية في السعودية</h1>
        <h4 className="h4">توفر منصة السعودية للعقارات ,  توسيع وتطوير أعمال الشركات العقارية والمكاتب العقار في السعودية  من خلال الوصول الى ملايين المستخدمين حول العالم الذين يتطلعون إلى الاستثمار في سوق العقارات السعودي</h4>
   <div>

 
   {Company.map((element, i) => {
        return (<>
          <div key={element._id}>
  <div className="column">
    <div className="card1">
    <img className="img" onClick={() => {  (Companydetails(element._id));}} src={element.logo}  alt="..."/>

      <h3>{element.name}</h3>
      <p>{element.city}</p>
    </div>
  </div>

               </div>
{/* 
      {role == 2 && element.user ==id? 
                      <button className="btn"  onClick={() => {  deleteCompany(element._id, i); }}> حذف </button>
                      :""     }          */}
</>
)
})}
   </div>
    </div>
    )
}
