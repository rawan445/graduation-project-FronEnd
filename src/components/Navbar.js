import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"
///
export default function Navbar({ token, setToken }) {
  return (
    <>

<div className="himg"></div>
    <div className="topnav">
      
      {token ? (
        <ul className="ul">
          
          <li className="li">
            <Link to="/Aqar">عقارات </Link>
          </li>
      
          <li className="li">
            <Link to="/AddAqar">إضافة عقار </Link>
          </li >
          <li className="li">
            <Link to="/Comp"> الشركات العقارية </Link>
          </li>

          <li className="liq">
            <Link  to="/login"  onClick={() => { setToken(""); localStorage.setItem("token", JSON.stringify(""));  }}  >  تسجيل خروج </Link>
          </li>
        </ul>
      ) : (
        <ul className="ul">
          <li className="li">
               <Link  className="link" to="/login" onClick={() => {setToken(); }} >  دخول </Link>
          </li>
          <li className="li">
            <Link className="link" to="/SignUp" onClick={() => {setToken(); }}>سجل معنا </Link>
          </li>
        </ul>
      )}
    </div>
    </>
  );
}
