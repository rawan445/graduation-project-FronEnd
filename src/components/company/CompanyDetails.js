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
        {/* <button className="btn"  onClick={() => {history.push("/UpdateBuy/" + id); }}> تحرير </button> */}
        <img  src={a.logo}alt="..."/>
          <p>{a.name}</p>
          <p>{a.city}</p>
        <p>{a.description}</p>
          <p>{a.mobileNumber}</p>
          <p>{a.nameCompany}</p>
          <iframe src={a.location} allowfullscreen="" loading="lazy"></iframe>

        
        </div>

      </div>
    )
}
