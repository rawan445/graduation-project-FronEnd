import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
export default function User({token}) {
    const history = useHistory();
    const [User, setUser] = useState([])
    
    useEffect(async () => {
        const res = await axios.get("http://localhost:5000/users", {
          headers: {authorization: `Bearer ${token}` },
        });
        setUser(res.data);
      }, [token]);
      console.log("token",token);
    return (
        <div>
     <hr/>
<button onClick={() => {history.push("/Admin"); }}>الرجوع للوحة التحكم</button>  
<button>اضافه مستخدم</button>  

<hr/>
    
{User.map((element, i) => {
        return (<>

<table className="table">
  <tr className="tr">
    <th >تحرير</th>
    <th>حذف</th>
    <th>اسم مستخدم </th>
  </tr>
  <tr className="tr">
    <td>✏️</td>
    <td>🗑︎</td>
    <td>{element.name}</td>
  </tr>
  
</table>
</>
)
})}

        </div>
    )
}
