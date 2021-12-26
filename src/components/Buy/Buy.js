import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import "./Buy.css";

///
function Aqar({ token }) {

  const history = useHistory();
  const [Aqar, setAqar] = useState([]);
  const [valueInput, setvalueInput] = useState("");
  const [serch, setSerch] = useState([]);

//
  useEffect(async () => {
    const res = await axios.get("http://localhost:5000/Buys", {
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

  const deletedAqar = await axios.delete('http://localhost:5000/Buy/'+id,{
    headers:{authorization: "Bearer " + token},
  });
  console.log("delete : ",deletedAqar.data);
  if (deletedAqar.data === "deleted"){
    const copiedArr= [...Aqar];
  copiedArr.splice(index,1);
  setSerch(copiedArr);
  }
  // const deletedAqar = a\wait axios.delete(`http://localhost:5000/Buy/`+id,{
  //   headers:{authorization: "Bearer " + token},
  // });
  // console.log((deletedAqar.data));
  // if (deletedAqar.data === "deleted"){
  //   const copiedArr= [...Aqar];
  // copiedArr.splice(index,1);
  // setSerch(copiedArr);
  // }
}

  return (
    <div>
                            <button className="btn"  onClick={() => {  (add());}}> اضافه اعلان جديد </button>

      <h1>ابحث عن عقارات للبيع في السعودية</h1>
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
          <div>
            <div className="wrapper" key={element._id}>
              <div className="card">
                <table>
                  <tr>
                    <td>
                      <span className="title-background">
                        عنوان العقار : {element.name}
                      </span>
                      <p className="title-background">
                        وصف :{element.description}{" "}
                      </p>
                      <p className="title-background">
                        المدينه:{element.city}{" "}
                      </p>
                      {/* <button className="btn"  > تفاصيل أكثر </button> */}
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
          <div>
            <div className="wrapper" key={element._id}>
              <div className="card" >
                <table>
                  <tr>
                    <td>
                      <span className="title-background">
                        عنوان العقار : {element.name}
                      </span>
                      <p className="title-background">
                        وصف :{element.description}{" "}
                      </p>

                      <p className="title-background">
                        المدينه:{element.city}{" "}
                      </p>
                      {/* <p>{element.user.name}</p> */}
                      {/* <button className="btn"  onClick={() => {  (Aqardetails(element._id));}}> تفاصيل أكثر </button> */}
                      <button className="btn"  onClick={() => {  deleteAqar(element._id, i); }}> حذف </button>
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
