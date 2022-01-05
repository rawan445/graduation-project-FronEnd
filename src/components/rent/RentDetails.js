import React,{useEffect , useState} from "react";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import axios from "axios";

export default function AqarDetails({token}) {
  const history = useHistory();
  const {id} = useParams()
  const [a, seta] = useState([])

  useEffect(async () => {
    const res = await axios.get(`http://localhost:5000/Rent/`+id, {
    headers: { authorization: `Bearer ${token}`  },
    });
    console.log("id :",id);
    seta(res.data);
    console.log("Data : ",res.data);
    
  }, []);
    return (
        <div>
          تفاصيل

          <div>
          <h4>{a.price}</h4>  
          <img className="imgAqar1" src={a.img}alt="..."/>
          <iframe src={a.location} allowfullscreen="" loading="lazy"></iframe>
          <h4>{a.description}</h4>
          <h4>{a.space}</h4>
          <h4>{a.city}</h4>
          <h4>{a.mobileNumber}</h4>
          </div>

        </div>
    )
}

