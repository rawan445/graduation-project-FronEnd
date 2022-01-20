import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { MdBedroomChild ,MdLiving,MdBathroom,MdOutlineMapsHomeWork,MdRealEstateAgent  } from "react-icons/md";

import { CgSpaceBetween} from "react-icons/cg";

///
function Aqar({ token ,role ,idU}) {

  const history = useHistory();
  const [Aqar, setAqar] = useState([]);
  const [valueInput, setvalueInput] = useState("");
  const [serch, setSerch] = useState([]);

//
  useEffect(async () => {
    const res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/Rents`, {
      headers: {authorization: `Bearer ${token}` },
    });
    setAqar(res.data);
    
  }, []);

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
  
  //Aqar details
  const Aqardetails = (id) => {
    console.log("RentDetails");
    history.push("/RentDetails/" + id);
  };
//Aqar delet
const deleteAqar = async (id, index)=>{
   console.log(id,"iiiiiiiiiiiiiii");
  const deletedAqar = await axios.delete(`${process.env.REACT_APP_BACKEND_URL}/Rent/`+id,{
    headers:{authorization: "Bearer " + token},
  });
  console.log((deletedAqar.data));
  if (deletedAqar.data === "deleted"){
    const copiedArr= [...Aqar];
  copiedArr.splice(index,1);
  setSerch(copiedArr);
  }

}

  return (
    <div>
                 {token? 

                            <button className="btn"  onClick={() => {history.push("/AddRent"); }}> اضافه اعلان جديد </button>
                            :""     }

      <h1>ابحث عن عقارات للايجار في السعودية</h1>
      <div>
        <button className="btn" onClick={serchA}>
          ابحث
        </button>
        <input
          className="input"
          id="input"
          value={valueInput}
          onChange={setvalue}
          type="text"
          placeholder="ابحث عن اسم المدينه"
        />


        
      </div>
    {/* //////////////////////////////////////////////////////// */}
      { serch.length? serch.map((element, i) => {
        return (
          <div  key={element._id}>
            <div className="wrapper" key={element._id}>
              <div className="card">
                <table>
                  <tr>
                    <td>
                      <span className="title-background">
                        عنوان العقار : {element.name}
                      </span>
                      <p className="title-background">
                        وصف :{element.description}
                      </p>
                      {/* <p>ggggggggg:  {element.user.name}</p> */}
                      <p className="title-background">
                        المدينه:{element.city}

                      </p>
                      <p className="title-background">
                     <CgSpaceBetween/> {element.space}  <MdBedroomChild/> {element.bedRooms}  <MdLiving/> {element.LivingRoom} 
                     <MdBathroom/> {element.bathRoom}  <MdOutlineMapsHomeWork/> {element.roleA}  <MdRealEstateAgent/> {element.propertyAge}
                      </p>
                 
                
                      {/* <button className="btn"  > تفاصيل أكثر </button> */}
                      {role == 3 && element.user ==idU? <>
                        <button className="btn"  onClick={() => {  deleteAqar(element._id, i); }}> حذف </button>
                      <button className="btn"  onClick={() => {history.push("/UpdateRent/" + element._id); }}> تحرير </button>

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
                          className="imgAqar"
                          src={element.img}
                          alt="..."
                        />
                      </div>
                    </td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
        );
      }) 
      
      : 
   // {/* //////////////////////////////////////////////////////// */}

      Aqar.map((element, i) => {
        return (
          <div  key={element._id}>
            <div className="wrapper" key={element._id}>
              <div className="card" >
                <table>
                  <tr>
                    <td>
                      <span className="title-background">
                        عنوان العقار : {element.name}
                      </span>
                      <p className="title-background">
                        وصف :{element.description}
                      </p>

                      <p className="title-background">
                        المدينه:{element.city}
                      </p>
                      <p className="title-background">
                     <CgSpaceBetween/> {element.space}  <MdBedroomChild/> {element.bedRooms}  <MdLiving/> {element.LivingRoom} 
                     <MdBathroom/> {element.bathRoom}  <MdOutlineMapsHomeWork/> {element.roleA}  <MdRealEstateAgent/> {element.propertyAge}
                      </p>
                 
                
                      {/* <p>{element.user.name}</p> */}
                      {/* <button className="btn"  onClick={() => {  (Aqardetails(element._id));}}> تفاصيل أكثر </button> */}
                      {role == 3 && element.user ==idU? <>
                        <button className="btn"  onClick={() => {  deleteAqar(element._id, i); }}> حذف </button>
                      <button className="btn"  onClick={() => {history.push("/UpdateRent/" + element._id); }}> تحرير </button>

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
                  </tr>
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
