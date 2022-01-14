import React,{useEffect , useState} from "react";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import axios from "axios";

export default function CompanyDetails({token}) {

    const history = useHistory();
    const {id} = useParams()
    const [a, seta] = useState([])

  useEffect(async () => {
    const res = await axios.get(`http://localhost:5000/company/`+id, {
    headers: { authorization: `Bearer ${token}`  },
    });
    // console.log("id :",id);
    seta(res.data);
    console.log("Data : ",res.data);
    
  }, [token]);
    return (
        <div>
        CompanyDetails
        <div>
        <img className="imgg"  src={a.logo}alt="..."/>
          <p>{a.name}</p>
          <p>{a.city}</p>
        <p>{a.description}</p>

        <div itemscope itemtype="https://schema.org/LocalBusiness">
        <p itemprop="name">رقم تواصل </p>
         <span itemprop="telephone"><a href="tel:{a.mobileNumber}">📞</a>{a.mobileNumber}</span>
        </div>

          <p>{a.nameAqar}</p>
          <iframe src={a.location} allowfullscreen="" loading="lazy"></iframe>



        </div>

      </div>
    )
}
