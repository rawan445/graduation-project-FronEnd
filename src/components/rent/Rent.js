import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import "./Rent.css";

///
function Aqar({ token }) {

  const history = useHistory();
  const [Aqar, setAqar] = useState([]);
  const [valueInput, setvalueInput] = useState("");
//
  useEffect(async () => {
    const res = await axios.get("http://localhost:5000/Rents", {
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
    let newArr = Aqar.filter((item) => item.city == valueInput);
    setAqar(newArr);
  }
  //
  const add = () => {
    history.push("/AddRent");
  };
  //Aqar details
  const Aqardetails = (id) => {
    history.push("/RentDetails/" + id);
  };

  return (
    <div>
                            <button className="btn"  onClick={() => {  (add());}}> اضافه </button>

      <h1>ابحث عن عقارات للايجار في السعودية</h1>
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
                        {element.name}
                      </span>
                      <p className="title-background">
                        {element.description}{" "}
                      </p>

                      <p className="title-background">
                        المدينه:{element.city}{" "}
                      </p>
                      <button className="btn"  onClick={() => {  (Aqardetails(element._id));}}> تفاصيل أكثر </button>
                      <button className="btn" > حذف </button>
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
      })}
    </div>
  );
}

export default Aqar;
