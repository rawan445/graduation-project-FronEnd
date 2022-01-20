import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { MdBedroomChild ,MdLiving,MdBathroom,MdOutlineMapsHomeWork,MdRealEstateAgent  } from "react-icons/md";

import { CgSpaceBetween} from "react-icons/cg";

import "./Buy.css";

///
function Aqar({ token ,role,idU}) {

  const history = useHistory();
  const [Aqar, setAqar] = useState([]);
  const [valueInput, setvalueInput] = useState("");
  const [serch, setSerch] = useState([]);
//
  useEffect(async () => {
    const res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/Buys`, {
      headers: {authorization: `Bearer ${token}` },
    });
    setAqar(res.data);
    
    console.log(res.data);

  }, [token]);

  //serch

  function setvalue(e) {
    let v = e.target.value;
    if(v == ""){
      setSerch([])
    }
    setvalueInput(v);
    setSerch(Aqar)
  }
  function serchA(e) {
    let newArr = serch.filter((item) => item.city == valueInput);
    setSerch(newArr);
    setvalueInput("")
  }
  //
  const add = () => {
    console.log("hhhhhhhhhhhh");
    history.push("/AddBuy");
  };
  const Aqardetails = (id) => {
    console.log("hhhhhhhhhhhh");
    history.push("/BuyDetails/" + id );
  };
//Aqar delet
const deleteAqar = async (id, index)=>{
   console.log("id : ",id  ,"token : ",token);

  const deletedAqar = await axios.delete(`${process.env.REACT_APP_BACKEND_URL}/Buy/`+id,{
    headers:{authorization: "Bearer " + token},
  });
  console.log("delete : ",deletedAqar.data);
  if (deletedAqar.data === "deleted"){
    const copiedArr= [...Aqar];
  copiedArr.splice(index,1);
  setSerch(copiedArr);
  }

}
// console.log('role',role);
  return (
    <div>
      {token? 
        <button className="btn"  onClick={() => {  (add());}}> اضافه اعلان جديد </button>
      :"" }
      <h1>ابحث عن عقارات للبيع في السعودية</h1>
    <div>
      <button className="btn" onClick={serchA}>ابحث </button>
        <input className="input" id="input" value={valueInput} onChange={setvalue} type="text" placeholder="ابحث عن اسم المدينه"  />

      </div>
      { serch.length? serch.map((element, i) => {
        return (
          <div key={element._id}>
            <div className="wrapper" key={element._id}>
              <div className="card">
                <table>
                  <tbody>
                    <td>
                      <span className="title-background">
                        عنوان العقار : {element.name}
                      </span>
                      <p className="title-background1">
                        المدينه:{element.city}
                      </p>
                      <p className="title-background2">
                     <CgSpaceBetween/> {element.space} , <MdBedroomChild/> {element.bedRooms} , <MdLiving/> {element.LivingRoom} ,
                     <MdBathroom/> {element.bathRoom} , <MdOutlineMapsHomeWork/> {element.roleA} , <MdRealEstateAgent/> {element.propertyAge}
                      </p>
                      {/* <button className="btn"  > تفاصيل أكثر </button> */}
                      {role == 3 && element.user ==idU ? <>
                        <button className="btn"  onClick={() => {  deleteAqar(element._id, i); }}> حذف </button>
                      <button className="btn"  onClick={() => {history.push("/UpdateBuy/" + element._id); }}> تحرير </button>

                      </>
                  
                      :""     }
                    </td>

                    <td>
                      <div className="myDiv"></div>
                    </td>
                    <td style={{ width: "30%" }}>
                      
                      <div className="xx">
                        <img
                        onClick={() => {  (Aqardetails(element._id));}}
                          className="imgAqar"
                          src={element.img}
                          alt="..."
                        />
                      </div>
                    </td>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        );
      })     
      : 
      Aqar.map((element, i) => {
        return (
          <div  key={element._id}>
            <div className="wrapper" key={element._id}>
              <div className="card" >
                <table>
                  <tbody>
                    <td>
                      <span className="title-background">
                        عنوان العقار : {element.name}
                      </span>
                      <p className="title-background1">
                        المدينه:{element.city}
                      </p>
                      <p className="title-background11">
                     <CgSpaceBetween/> {element.space}  <MdBedroomChild/> {element.bedRooms}  <MdLiving/> {element.LivingRoom} 
                     <MdBathroom/> {element.bathRoom}  <MdOutlineMapsHomeWork/> {element.roleA}  <MdRealEstateAgent/> {element.propertyAge}
                      </p>
                 
                

                      {/* <p>{element.user.name}</p> */}
                      {/* <button className="btn"  onClick={() => {  (Aqardetails(element._id));}}> تفاصيل أكثر </button> */}
                      {/* <button className="btn"  onClick={() => {  deleteAqar(element._id, i); }}> حذف </button> */}
                      {role == 3 && element.user ==idU ? <>
                        <button className="btn"  onClick={() => {  deleteAqar(element._id, i); }}> حذف </button>
                      <button className="btn"  onClick={() => {history.push("/UpdateBuy/" + element._id); }}> تحرير </button>

                      </>
                  
                      :""     }
                      {element.n}
                    </td>

                    <td>
                      <div className="myDiv"></div>
                    </td>
                    <td style={{ width: "30%" }}>
                      
                      <div className="xx">
                        <img
                        onClick={() => {  (Aqardetails(element._id));}}
                          className="imgAqar"
                          src={element.img}
                          alt="..."
                        />
                      </div>
                    </td>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Aqar;
