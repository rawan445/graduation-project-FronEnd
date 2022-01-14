import React,{useEffect , useState} from "react";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import ProgressBar from '../ProgressBar';
import axios from "axios";
import "./Buy.css"
import { MdBedroomChild ,MdLiving,MdBathroom,MdOutlineMapsHomeWork,MdRealEstateAgent  } from "react-icons/md";

import { CgSpaceBetween} from "react-icons/cg";

export default function AqarDetails({token ,role,idU}) {
  const history = useHistory();
  const {id} = useParams()
  const [a, seta] = useState(null)

  const [img1, setimg] = useState("")
  
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);
  const types = ['image/png', 'image/jpeg']; //الصيغ االمسموحه لتحميلها 
  
  const handleChange = (e) => {
    let selected = e.target.files[0];
    if (selected && types.includes(selected.type)) {
      setFile(selected);
      console.log(selected);
      setError('');
    } else {
      setFile(null);
      setError('Please select an image file (png or jpg)');
    }
    setimg(e.target.value)
  };

  useEffect(async () => {
    const res = await axios.get(`http://localhost:5000/Buy/`+id, {
    headers: { authorization: `Bearer ${token}`  },
    });
    // console.log("id :",id);
    seta(res.data);
    console.log("Data : ",res.data);
    console.log("imgArr : ",res.data.img1);
  
  }, [token]);


  const addImg = async () => {
    try {
      const result = await axios.post(`http://localhost:5000/AddImg/${id}`,{img :img1},{
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
      {a!= null ?   <div>
          تفاصيل
          <div>
 {/* <input type="text"  placeholder='img'  onChange={(e) => {  (setimg(e.target.value));}}/> */}
 <input className="inputC" type="file" onChange={handleChange} />

<br />
<button onClick={()=>{addImg()}} className='add'> Add ExtraImg</button>
        </div>
        <div className="output">
        { error && <div className="error">{ error }</div>}
        { file && <div>{ file.name }</div> }
        { file && <ProgressBar file={file} setFile={setFile} setimg={setimg} /> }
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
          {/* <img className="imgAqar1" src={a.img1}alt="..."/> */}

          <iframe src={a.location} allowfullscreen="" loading="lazy"></iframe>
          <h4>{a.price}</h4>  
          <h4>وصف :{a.description}</h4>
          <h4> المدينة :{a.city}</h4>
          <h4> رقم تةاصل :{a.mobileNumber}</h4>



          </div>
          <div className="tableDiv">
<h2>: معلومات عن العقار </h2>





          <table className="table">
  <tr className="tr"><td className="tableText1"> {a.space}   م²  </td><td className="tableText"> <CgSpaceBetween/></td>         <td className="tableText1">المساحة</td></tr>
  <tr className="tr"><td className="tableText1">{a.bedRooms}     </td><td className="tableText"> <MdBedroomChild/></td>        <td className="tableText1">غرف النوم</td></tr>
  <tr className="tr"><td className="tableText1"> {a.LivingRoom}  </td><td className="tableText"> <MdLiving/></td>              <td className="tableText1">غرف الجلوس</td></tr>
  <tr className="tr"><td className="tableText1">  {a.bathRoom}   </td><td className="tableText"> <MdBathroom/></td>            <td className="tableText1">دورات مياه</td></tr>
  <tr className="tr"><td className="tableText1"> {a.roleA}       </td><td className="tableText"> <MdOutlineMapsHomeWork/></td> <td className="tableText1">الدور</td></tr>
  <tr className="tr"><td className="tableText1"> {a.propertyAge} </td><td className="tableText" > <MdRealEstateAgent/></td>    <td className="tableText1">عمر العقار</td></tr>
</table>
</div>



        </div>
        
      :
      ""}
        </>
    )
}
