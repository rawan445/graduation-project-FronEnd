import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import "./com.css";
//
export default function Company({ token, role, idU }) {
  const history = useHistory();
  const [Company, setCompany] = useState([]);

  useEffect(async () => {
    const res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/companys`, {
      headers: { authorization: `Bearer ${token}` },
    });
    setCompany(res.data);
  }, [token]);

  
  const Companydetails = (id) => {
    // console.log("hhhhhhhhhhhh");
    history.push("/CompanyDetails/" + id);
  };
  const deleteAqar = async (id, index) => {
    // console.log("id : ",id  ,"token : ",token);

    const deletedAqar = await axios.delete(
      `${process.env.REACT_APP_BACKEND_URL}/company/` + id,
      {
        headers: { authorization: "Bearer " + token },
      }
    );
    //  console.log("delete : ",deletedAqar.data);
    if (deletedAqar.data === "deleted") {
      const copiedArr = [...Company];
      copiedArr.splice(index, 1);
      setCompany(copiedArr);
    }
  };
  return (
    <div>
      <h1>منشأت والمكاتب العقارية في السعودية</h1>
      <h4 className="h4">
        توفر منصة السعودية للعقارات , توسيع وتطوير أعمال الشركات العقارية
        والمكاتب العقار في السعودية من خلال الوصول الى ملايين المستخدمين حول
        العالم الذين يتطلعون إلى الاستثمار في سوق العقارات السعودي
      </h4>
      <div>
        {Company.map((element, i) => {
          return (
              <div key={element._id}>
                <div className="column">
                  <div className="card1">
                    <img  className="img" onClick={() => { Companydetails(element._id); }}  src={element.logo} alt="..." />
                    <h3 className="h33">{element.name}</h3>
                    {/* شرط لتحديد ظهور الزر البوتن  */}
                    {role == 2 && element.user == idU ? (
                      <>
                        <button className="btn" onClick={() => { deleteAqar(element._id, i);}}> حذف</button>
                        <button className="btn"onClick={() => { history.push("/UpdateCompany/" + element._id); }}>تحرير </button> </>
                    ) : ( "" )}
                  </div>
                </div>
              </div>
          
          );
        })}
      </div>
    </div>
  );
}

