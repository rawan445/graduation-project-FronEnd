import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import "./Aqar.css";

///
function Aqar({ token }) {

  const history = useHistory();
  const [Aqar, setAqar] = useState([]);
  const [valueInput, setvalueInput] = useState("");
//
  useEffect(async () => {
    const res = await axios.get("http://localhost:5000/Aqars", {
      headers: { authorization: `Bearer ${token}` },
    });
    setAqar(res.data);
  }, []);

  //serch

  function setvalue(e) {
    let v = e.target.value;
    setvalueInput(v);
  }
  function serch(e) {
    let newArr = Aqar.filter((item) => item.City == valueInput);
    setAqar(newArr);
  }
  //Aqar details
  const Aqardetails = (id) => {
    console.log("hhhhhhhhhhhh");
    history.push("/Aqardetails/" + id);
  };
//Aqar delet
const deleteAqar = async (id, index)=>{
   
  const deletedAqar = await axios.delete(`http://localhost:5000/Aqar/`+id,{
    headers:{authorization: "Bearer " + token},
  });
  console.log((deletedAqar.data));
  if (deletedAqar.data === "deleted"){
    const copiedArr= [...Aqar];
  copiedArr.splice(index,1);
  setAqar(copiedArr);
  }
}

  return (
    <div>
      <h1>ابحث عن عقارات للبيع و للايجار في السعودية</h1>
      <div>
        <button className="btn" onClick={serch}>
          ابحث
        </button>
        <input
          className="input"
          id="input"
          onChange={setvalue}
          type="text"
          placeholder="المدينة"
        />


        
      </div>
      {Aqar.map((element, i) => {
        return (
          <div>
            <div className="wrapper" key={element._id}>
              <div className="card">
                <table>
                  <tr>
                    <td>
                      <span className="title-background">
                        عنوان العقار : {element.TitleAqar}
                      </span>
                  

                      <p className="title-background">
                        {" "}
                        المدينه:{element.City}{" "}
                      </p>
                      <button className="btn"  onClick={() => {  (Aqardetails(element._id));}}> تفاصيل أكثر </button>
                      <button className="btn"  onClick={() => {  deleteAqar(element._id, i); }}> حذف </button>
                      {element.n}
                    </td>

                    <td>
                      <div className="myDiv"></div>
                    </td>
                    <td style={{ width: "30%" }}>
                      
                      <div className="xx">
                        <img
                          className="imgAqar"
                          src={element.imgAqar}
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
