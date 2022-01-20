import React,{useEffect , useState} from "react";
import '@splidejs/splide/dist/css/splide.min.css';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import ProgressBar from '../ProgressBar';
import axios from "axios";
import { MdBedroomChild ,MdLiving,MdBathroom,MdOutlineMapsHomeWork,MdRealEstateAgent  } from "react-icons/md";
import { BsFillPinMapFill} from "react-icons/bs";
import { CgSpaceBetween} from "react-icons/cg";
import { FaCity} from "react-icons/fa";
import { GiTakeMyMoney} from "react-icons/gi";
import { AiFillPhone} from "react-icons/ai";
import parse from "html-react-parser";


export default function AqarDetails({token ,role,idU}) {
  const history = useHistory();
  const {id} = useParams()
  const [a, seta] = useState(null)

  const [img1, setimg] = useState("")
  
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);
  const types = ['image/png', 'image/jpeg']; //الصيغ االمسموحه لتحميلها 
  // console.log("idU :",idU);
  
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
    const res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/Rent/`+id, {
    headers: { authorization: `Bearer ${token}`  },
    });
    // console.log("id :",id);
    seta(res.data);
    console.log("Data : ",res.data);
    console.log("imgArr : ",res.data.img1);
    // console.log("a :",res.data);

  
  }, [token]);


  const addImg = async () => {
    try {
      const result = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/AddImgR/${id}`,{img :img1},{
        headers: { authorization: "Bearer " + token },
      })
      seta({ ...a, img: result.data.img1 });
      console.log("add img",result.data);
    } catch (error) {
      console.log(error);
    }
  };
  const primaryOptions = {
    type: "loop",
    width: "100%",
    height: "70vh",
    autoplay: true,
    interval:2000,
  };
    return (
      <>
      {a!= null ?   <div>
          تفاصيل
          <div>
 {/* <input type="text"  placeholder='img'  onChange={(e) => {  (setimg(e.target.value));}}/> */}
 {role == 3 && a.user == idU ? <div>

 <input className="inputC" type="file" onChange={handleChange} />

<br />
<button onClick={()=>{addImg()}} className='add'> Add ExtraImg</button>
</div>:"" }
        </div>
        <div className="output">
        { error && <div className="error">{ error }</div>}
        { file && <div>{ file.name }</div> }
        { file && <ProgressBar file={file} setFile={setFile} setimg={setimg} /> }
      </div>
          <div>
          {/* <img className="imgAqar1" src={a.img}alt="..."/> */}
          <Splide options={ primaryOptions} >
        {a.img1.map((ele)=>{
  return(
  <SplideSlide key={ele._id}>
    <img src={ele} alt="Image 1" style={{width:"100%" ,height:"80vh"}}/>
  </SplideSlide>

      )})}
          </Splide>
          <h2>: معلومات عن العقار </h2>
          <h4>{parse(a.description)} </h4>
          <hr/>
          </div>
          <div className="tableDiv">
          <table className="table">
  <tr className="tr"><td className="tableText1">  R.S {a.price}</td><td className="tableText"> <GiTakeMyMoney/></td><td className="tableText1">سعر العقار</td></tr>
  <tr className="tr"><td className="tableText1"> {a.city}</td><td className="tableText"> <FaCity/></td> <td className="tableText1">المدينة </td></tr>
  <tr className="tr"><td className="tableText1"> {a.mobileNumber}</td><td className="tableText"> <AiFillPhone/></td><td className="tableText1"> رقم تواصل</td></tr>
  <tr className="tr"><td className="tableText1"> {a.space}  SM   </td><td className="tableText"> <CgSpaceBetween/></td> <td className="tableText1">المساحة</td></tr>
  <tr className="tr"><td className="tableText1"> {a.LivingRoom}  </td><td className="tableText"> <MdLiving/></td> <td className="tableText1">غرف العقار</td></tr>
  <tr className="tr"><td className="tableText1">{a.bedRooms}     </td><td className="tableText"> <MdBedroomChild/></td><td className="tableText1">غرف النوم</td></tr>
  <tr className="tr"><td className="tableText1">  {a.bathRoom}   </td><td className="tableText"> <MdBathroom/></td><td className="tableText1">دورات مياه</td></tr>
  <tr className="tr"><td className="tableText1"> {a.roleA}       </td><td className="tableText"> <MdOutlineMapsHomeWork/></td> <td className="tableText1">الدور</td></tr>
  <tr className="tr"><td className="tableText1"> {a.propertyAge} </td><td className="tableText" > <MdRealEstateAgent/></td><td className="tableText1">عمر العقار</td></tr>
  <tr className="tr"><td className="tableText1">
  <iframe src={a.location} allowfullscreen="" loading="lazy"></iframe>
  </td><td className="tableText" > <BsFillPinMapFill/></td>    <td className="tableText1">موقع عقار على قوقل ماب</td></tr>

          </table>
          </div>
        </div>
        :""}
        </>
    )
}
