import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"
///
export default function Navbar({ token, setToken ,role ,setRole ,name ,setid,setname}) {
console.log("role  NN:",role);

const logout =  ()=>{
  setToken(""); localStorage.setItem("token", JSON.stringify(""));
  setRole(""); localStorage.setItem("role :",JSON.stringify(""));
  setname(""); localStorage.setItem("name",JSON.stringify(""));
  setid(""); localStorage.setItem("id",JSON.stringify(""));


}
  return (
    <>

<div className="himg"></div>
    <div className="topnav">
      {console.log(token ,"tokfen")}
      {console.log(role ,"tokfen")}

      {token ? (<>
          {role == 1 ? 
          <ul className="ul">
          <li className="li"> <Link to="/Admin">لوحة التحكم</Link> </li>
          <details className="liq">
  <summary> <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/2048px-Circle-icons-profile.svg.png" style={{width:"0px"}}/> مرحبا {name}  </summary>
  <nav className="menu">
    <li className="liq">  <Link  to="/"  onClick={() => {  logout(); }}>  تسجيل خروج </Link> </li>

  </nav>
</details>
          </ul>
          
          : role == 2 ? 
            <ul className="ul">
           <li className="li"><Link to="/Company"> منشأت عقارية </Link>  </li>
           <li className="li"> <Link to="/Addcompany"> أضافة منشأة  </Link> </li>
           <li className="li">  <Link to="/Consultation">استشارات عقارية</Link> </li >

           <details className="liq">
  <summary> <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/2048px-Circle-icons-profile.svg.png" style={{width:"0px"}}/> مرحبا {name}  </summary>
  <nav className="menu">
    <li className="liq">  <Link  to="/"  onClick={() => {  logout(); }}>  تسجيل خروج </Link> </li>

  </nav>
</details>             </ul> 
           : role == 3 ? <>
              <ul className="ul">
         <li className="li"><Link to="/Company"> منشأت عقارية </Link>  </li>
           <li className="li"> <Link to="/Buy">اعلان بيع عقاري </Link>  </li>
          <li className="li">  <Link to="/rent">اعلان إيجار عقاري </Link> </li >
          <li className="li">  <Link to="/Consultation">استشارات عقارية</Link> </li >

           
          <details className="liq">
  <summary> <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/2048px-Circle-icons-profile.svg.png" style={{width:"0px"}}/> مرحبا {name}  </summary>
  <nav className="menu">
    <li className="liq">  <Link  to="/"  onClick={() => {  logout(); }}>  تسجيل خروج </Link> </li>

  </nav>
</details>            </ul>
           </>:""
          
          } 

         
     
        </>) : (
        <ul className="ul">
                     <li className="li"><Link to="/Company"> منشأت عقارية </Link>  </li>
                     <li className="li"> <Link to="/Buy">اعلان بيع عقاري </Link>  </li>
                     <li className="li">  <Link to="/rent">اعلان إيجار عقاري </Link> </li >
          {/* <li className="li">  <Link  className="link" to="/login" onClick={() => {setToken(); }} >  دخول </Link>  </li> */}
          <li className="liq">   <Link className="link" to="/SignUp" onClick={() => {setToken(); }}>سجل معنا </Link>  </li>
          <li className="liq">   <Link className="link" to="/" onClick={() => {setToken(); }}>دخول </Link>  </li>

        </ul>
      )}
    </div>
    </>
  );
}