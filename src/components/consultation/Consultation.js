import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import axios from "axios";

///
function Consultation({ token ,role,idU}) {
    const {id} = useParams()

    const [allcouers, setallcouers] = useState(null);

  const [arrData, setarrData] = useState(null);

  const [consultation, setconsultation] = useState("")
  const [answer, setanswer] = useState("")


  useEffect(async () => {
    const res = await axios.get("http://localhost:5000/consultations", {
      headers: {authorization: `Bearer ${token}` },
    });
    setarrData(res.data);
    
    console.log(res.data);

  }, [token]);




  const addcons=async ()=>{
    const result = await axios.post(
      "http://localhost:5000/consultations",
      { consultation },
      {
        headers: { authorization: `Bearer ${token}` },
      });
  }

  
  const addanswer=async ()=>{
    const result = await axios.post(
      "http://localhost:5000/answer/"+id,
      { consultation },
      {
        headers: { authorization: `Bearer ${token}` },
      });
      setallcouers(result.data);

  }

  return (
   <>
   {arrData != null ? 
   
   <div>
   <input onChange={(e) => {  (setconsultation(e.target.value)) ; }} placeholder="...أكتب الاستشاره" />
   <button  onClick={() => { addcons()}} > Submit </button> 

<hr/>
{/* <p> schg :{arrData.consultation}</p>

       <p> رد :{arrData.answer}</p>

         */}
       {arrData.map((element)=>{
  return(
<div>
<h1> schg :{element.consultation}</h1>

<p> {element.answer}</p>

{/*    
{arrData.map((element)=>{
  return(
<div>
<p> {element}</p>
</div>

  )

})} */}
<input onChange={(e) => {  (setanswer(e.target.value)) ; }} placeholder="...رد الاستشاره" />
   <button  onClick={() => { addanswer()}} > أضافة رد </button> 
   <hr/>
</div>

  )

})}  
  

     </div>
    :""}
    </>
    );
    }

export default Consultation;
