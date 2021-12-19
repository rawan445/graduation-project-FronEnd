import React,{useEffect , useState} from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./Aqar.css"

export default function AqarDetails({token}) {
    const {id} = useParams()
  const [a, seta] = useState([])

  useEffect(async () => {
    const res = await axios.get(`http://localhost:5000/Aqar/`+id, {
      headers: { authorization: `Bearer ${token}`  },
    });
    console.log("id :",id);
    seta(res.data);
    console.log(res.data,"dadt");
    
  }, []);
    return (
        <div>
          تفاصيلللللل
          <h4>{a.TitleAqar}</h4>
          <h4>{a.TypeAqar}</h4>
          <img className="imgAqar" src={a.imgAqar}alt="..."/>
                    <iframe src={a.LocationAqar} allowfullscreen="" loading="lazy"></iframe>

          <h4>{a.spaceAqar}</h4>
          <h4>{a.City}</h4>
          <h4>{a.NumberAqar}</h4>



        </div>
    )
}
