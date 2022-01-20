import React,{useEffect , useState} from "react";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import axios from "axios";

export default function CompanyDetails({token}) {

    const history = useHistory();
    const {id} = useParams()
    const [a, seta] = useState([])

  useEffect(async () => {
    const res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/company/`+id, {
    headers: { authorization: `Bearer ${token}`  },
    });
    // console.log("id :",id);
    seta(res.data);
    console.log("Data : ",res.data);
    
  }, [token]);
    return (
        <div>
     
<hr/>
        <img className="imggg"  src={a.logo}alt="..."/>
          <h2 className="pName">أسم المنشاه : {a.name} </h2>
          <p className="pCity"> المدينة : {a.city} </p>

          <hr/>
          {/* <div><p>{a.description}</p> 
          </div> */}

        <div itemscope itemtype="https://schema.org/LocalBusiness">


          <br/>
          <div>
            <h4 className="h44"> : وصف المنشاة</h4>
            <p> {a.description}</p>
          </div>
          <br/>
          
<table className="tableA">
  <tr className="trA">
    <td className="tdA"> {a.mobileNumber}</td>
    <td className="tdA">رقم التواصل </td>
  </tr>
  <tr className="trA">
    <td className="tdA"> {a.email}</td>
    <td className="tdA">البريد الالكتروني </td>
  </tr>
  <tr className="trA">
    <td className="tdA"> <a href={a.website}>{a.name}</a> </td>
    <td className="tdA">موقع الالكتروني  </td>
  </tr>
  <tr className="trA">
    <td className="tdA"> {a.nameAqar} </td>
    <td className="tdA">عدد العقارات </td>
  </tr>
  <tr className="trA">
    <td className="tdA"> <iframe src={a.location} allowfullscreen="" loading="lazy"></iframe> </td>
    <td className="tdA">موقع المنشاه  </td>
  </tr>
</table>
   
        </div>

      </div>
    )
}
