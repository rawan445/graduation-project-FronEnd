import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import parse from "html-react-parser";
 import axios from "axios";

///
function Consultation({ token ,role,idU}) {
    const {id} = useParams()


  // const [arrData, setarrData] = useState([]);
  const [arrCon, setarrCon] = useState(null)

  const [consultation, setconsultation] = useState("")
  const [answer, setanswer] = useState("")
  const [toggel, settoggel] = useState(false)
  const [toggel1, settoggel1] = useState(false)
  const [toggel2, settoggel2] = useState(false)

  useEffect(async () => {
    const res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/consultations`, {
      headers: {authorization: `Bearer ${token}` },
    });
    setarrCon(res.data);
    console.log(res.data);
  }, [token]);
  
  const addcons=async ()=>{
    const result = await axios.post(
      `${process.env.REACT_APP_BACKEND_URL}/consultations`,
      { consultation },
      {
        headers: { authorization: `Bearer ${token}` },
      });   
      // setconsultation(result.data.consultation)
      setarrCon(result.data)

      console.log("consultation : ",result.data);
    // const copy=[...arrCon]
    // copy.consultation = result.data;
    // setconsultation(copy)
    //   console.log("consultation : ",copy);
  }

  const addanswer=async (id ,i)=>{
    console.log("id :",id ,"i ",i);
      settoggel(true)
    try {
    const result = await axios.post(
      `${process.env.REACT_APP_BACKEND_URL}/answer/`+id,
      { answer},
      {
        headers: { authorization: `Bearer ${token}` },
      });
      // setanswer(result.data.answer);
      console.log("aaaaaaaa :",result.data);
      const copuarr =[...arrCon]
      copuarr[i].answer = result.data.answer;
      setarrCon(copuarr)
    } catch (error) {
      console.log(error);
    }
  }
const changAanswer =(id ,i)=>{
  console.log("id",id ,"iiiiiiiiiiiiiiiiiiii",i);
    settoggel(!toggel)

}
const changAanswerAdd =(id ,i)=>{
  console.log("id",id ,"iiiiiiiiiiiiiiiiiiii",i);
  settoggel1(!toggel1)

}
const changAdd =()=>{
  settoggel2(!toggel2)

}
  return (<>

 {arrCon!== null ?   <div>
   
<div _ngcontent-uby-c90="" class="forYou">
<h1 className='h1foo'>الاستشارات العقارية</h1>
<h4  className="h2sss"> هي تهدف لتثقيف الوسيط العقاري والزبون العقاري بمجال العقار ، وكذلك من يرغب بالدخول بمجال العقار أو لديه أي رغبه بالتعامل العقاري </h4>
   
</div>
   <div className="divvv">

   {role == 3?<>
<button className="btn"   onClick={() => { changAdd()}}  >اضف استشارتك</button>
</> :""}
   {/* <input onChange={(e) => {  (setconsultation(e.target.value)) ; }} placeholder="...أكتب الاستشاره" /> */}
   {toggel2 === true ?<> 
   <CKEditor
              editor={ClassicEditor}
              data={answer}
              onChange={(e, editor) => {
                const data = editor.getData();
                setconsultation(data);
              }}/>

      <button className="btn" onClick={() => { addcons()}} > إرسال </button> 
    </>:""}
   </div>
    

      {arrCon.map((element,i)=>{
        return(
      <div  key={element._id}>


<table className="tableA">
  <tr className="trA">
    <th className="thA">      <h1>{parse(element.consultation)} </h1>
    <button  className="btn11"onClick={() => { changAanswer(element._id,i)}}> عرض الردود </button> 
    
</th>
  </tr>

 
</table>

  {role == 2 ?<>
      <button className="btn11" onClick={() => { changAanswerAdd(element._id,i)}}> اضافه رد </button> 
</> :""}
     
{toggel === true ?<> 
  {element.answer.map((ele)=>{
    console.log(ele.username);

return<>
<table className="tableA">
  <tr className="trA">
    <th className="thAa"><p className="ppp">
      {parse(ele)}    </p>
</th>
  </tr>
  
</table>


</>
})}
</>   :""}
     
{toggel1 === true ?<> 

  <CKEditor
              editor={ClassicEditor}
              data={answer}
              onChange={(e, editor) => {
                const data = editor.getData();
                setanswer(data);
              }}/>

        <button  className="btn11" onClick={() => { addanswer(element._id ,i)}} >  رد </button>  </> :""} 
         
      </div>
      
        )
      
      })}
      
          </div>
      
      :("")}
 
    </>);
    }

export default Consultation;
