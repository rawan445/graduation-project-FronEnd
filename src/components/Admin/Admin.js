import React from 'react'
import { useHistory } from "react-router-dom";

import './Admin.css'
export default function Admin() {
    const history = useHistory();

    return (
        <div>
            Admin 
            <h4>لوحة التحكم</h4>
     <hr/>
        <button onClick={() => {history.push("/RentAdmin"); }}> اعلان ايجار عقار</button>  
        <button onClick={() => {history.push("/BuyAdmin");  }}>  اعلان بيع عقار</button>  
        <button onClick={() => {history.push("/CompAdmin"); }}> شركات عقارية</button>  
        <button onClick={() => {history.push("/UserAdmin"); }}> مستخدم     </button>  
 

        </div>
    )
}
