import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { FaUserPlus, FaUserAltSlash, FaUserEdit } from "react-icons/fa";
import { GiReturnArrow } from "react-icons/gi";
// import { GrUserAdmin } from "react-icons/gr";

import "./UserAdmin.css";
import axios from "axios";
export default function User({ token }) {
  const history = useHistory();
  const [User, setUser] = useState([]);
  const [role, setrole] = useState("");

  useEffect(async () => {
    const res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/users`, {
      headers: { authorization: `Bearer ${token}` },
    });
    setUser(res.data);
  }, [token]);

  // console.log("uuuu", User);
  const deleteUser = async (id, index) => {
    // console.log("id : ", id, "token : ", token);

    const deletedAqar = await axios.delete(`${process.env.REACT_APP_BACKEND_URL}/user/`+ id, {
      headers: { authorization: "Bearer " + token },
    });
    console.log("delete : ", deletedAqar.data);
    if (deletedAqar.status === 203) {
      const copiedArr = [...User];
      copiedArr.splice(index, 1);
      setUser(copiedArr);
    }
  };
  const updateH = async (id, i) => {
    console.log("hi");
    const upd = await axios.put(
      `${process.env.REACT_APP_BACKEND_URL}/user/` + id,
      { role },
      {
        headers: { authorization: "Bearer " + token },
      }
    );
    console.log("id :", id);
    console.log(upd.data, "here");
    const cop = [...User];
    cop[i] = upd.data;
    setUser(cop);
    <h1>تم تعديل</h1>
  };
  return (
    <div>
      <hr />
      <h2>المستخدمين</h2>
      <button onClick={() => { history.push("/Admin"); }}className="tt"><GiReturnArrow /> </button>
      <button onClick={() => {history.push("/AddUserAdmin");}} className="tt"><FaUserPlus /> </button>
      <hr />

      {User.map((element, i) => {
        return (
          <div  key={element._id}>
            <table className="table">
              <tr className="tr">
                <th>تحرير</th>
                <th>صلاحيات</th>
                <th>حذف</th>
                <th>اسم مستخدم </th>
              </tr>

              <tr className="tr">
              
                <td className="ttt"  onClick={() => {  history.push("/UpdateUserAdmin/" + element._id); }} > <FaUserEdit />  </td>
              <td>
                {element.role !=1 ?<>
                
                  <select onChange={(e) => { setrole(e.target.value); }} >
                    <option value="2">منشأة</option>
                    <option value="3">عضو</option>
                  </select>
                                    <button lassName="but" onClick={() => {  updateH(element._id, i) }} > تعديل  </button></>

                                    :"........مدير الموقع"
                                  }
                </td>
                {element.role !=1 ?<>

                <td className="ttt" onClick={() => {  deleteUser(element._id, i);  }} > <FaUserAltSlash /></td> </> :"...."
                                  }
                <td> {element.name} </td>
              </tr>
            </table>
          </div>
        );
      })}
    </div>
  );
}
