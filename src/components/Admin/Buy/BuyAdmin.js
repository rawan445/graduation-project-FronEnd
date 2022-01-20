import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { HiOutlineDocumentAdd } from "react-icons/hi";
import { GiReturnArrow } from "react-icons/gi";

import "./BuyAdmin.css";

export default function BuyAdmin(props) {
  const { token, settoken } = props;

  const [BuyA, setBuyA] = useState([]);
  const history = useHistory();

  useEffect(async () => {
    const res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/Buys`, {});
    setBuyA(res.data);
    console.log("Data : ", res.data);
  }, []);

  const deleteUser = async (id, index) => {
    console.log("id : ", id, "token : ", token);

    const deletedAqar = await axios.delete(
      `${process.env.REACT_APP_BACKEND_URL}/BuyAdmin/` + id,
      {
        headers: { authorization: "Bearer " + token },
      }
    );
    if (deletedAqar.data === "deleted") {
      const copiedArr = [...BuyA];
      copiedArr.splice(index, 1);
      setBuyA(copiedArr);
    }
  };
  return (
    <div>
      <hr />
      <h2>إعلانات البيع </h2>

      <button onClick={() => { history.push("/Admin"); }} > <GiReturnArrow /></button>
      <button onClick={() => { history.push("/AddBuyAdmin"); }}><HiOutlineDocumentAdd /> </button>
      <hr />

      {BuyA.map((element, i) => {
        return (
          <div  key={element._id}>
            <table className="table">
              <tr className="tr">
                <th>تحرير</th>
                <th>حذف</th>
                <th>اسم اعلان البيع</th>
              </tr>

              <tr className="tr">
                <td onClick={() => {  history.push("/UpdateBuyAdmin/" + element._id);    }}  > ✏️  </td>
                <td onClick={() => {  deleteUser(element._id, i); }}  > 🗑︎</td>
                <td>{element.name}</td>
              </tr>
            </table>
          </div>
        );
      })}
    </div>
  );
}
