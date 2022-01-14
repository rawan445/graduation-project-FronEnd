import React,{useEffect , useState} from "react";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import axios from "axios";

export default function AqarDetails({token}) {
  const history = useHistory();
  const {id} = useParams()
  const [a, seta] = useState(null)

  const [img1, setimg1] = useState("")

  useEffect(async () => {
    const res = await axios.get(`http://localhost:5000/Rent/`+id, {
    headers: { authorization: `Bearer ${token}`  },
    });
    console.log("id :",id);
    seta(res.data);
    console.log("Data : ",res.data);
    
  }, [token]);

  
  const addImg = async () => {
    try {
      const result = await axios.post(`http://localhost:5000/AddImgR/${id}`,{img :img1},{
        headers: { authorization: "Bearer " + token },
      })
      seta({ ...a, img: result.data.img1 });
      console.log("add img",result.data);
    } catch (error) {
      console.log(error);
    }
  };
      return (
        <>
        {a!= null ?  
        
        <div>
        تفاصيل
        <div>
<input type="text"  placeholder='img'  onChange={(e) => {  (setimg1(e.target.value));}}/>
<br />
<button onClick={()=>{addImg()}} className='add'> Add ExtraImg</button>
     </div>
       <div>
       <img className="imgAqar1" src={a.img}alt="..."/>
            
     {a.img1.map((element)=>{
return(
<div>
<img  src={element} alt="" /> 
</div>

)

})}
       <iframe src={a.location} allowfullscreen="" loading="lazy"></iframe>
       <h4>{a.price}</h4>  
       <h4>{a.description}</h4>
       <h4>{a.space}</h4>
       <h4>{a.city}</h4>
       <h4>{a.mobileNumber}</h4>
       </div>

     </div>
       
       :""}
       
       
       </>
    )
}

