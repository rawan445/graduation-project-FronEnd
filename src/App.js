import React, { useState, useEffect } from "react";
import {Route } from 'react-router-dom';

import Home from './components/Navbar&Home/Home';
import SignUp from './components/recording/SignUp';
import Login from './components/recording/Login';
import Navbar from "./components/Navbar&Home/Navbar"
import Buy from "./components/Buy/Buy"
import Rent from "./components/rent/Rent"
import AddBuy from "./components/Buy/AddBuy";
import AddRent from "./components/rent/AddRent";
import BuyDetails from "./components/Buy/BuyDetails";
import RentDetails from "./components/rent/RentDetails";
import UpdateBuy from "./components/Buy/UpdateBuy";
import UpdateRent from "./components/rent/UpdateRent";
import Admin from "./components/Admin/Admin";
import UserAdmin from "./components/Admin/user/UserAdmin";
import BuyAdmin from "./components/Admin/Buy/BuyAdmin";
import RentAdmin from "./components/Admin/Rent/RentAdmin";
import UpdateUserAdmin from "./components/Admin/user/UpdateUserAdmin"
import AddUserAdmin from "./components/Admin/user/AddUserAdmin";
import AddBuyAdmin from "./components/Admin/Buy/AddBuyAdmin";
import Consultation from "./components/consultation/Consultation";
import UpdateBuyAdmin from "./components/Admin/Buy/UpdateBuyAdmin";
import AddRentAdmin from "./components/Admin/Rent/AddRentAdmin";
import Company from "./components/company/Company"
import Addcompany from "./components/company/Addcompany"
import CompanyDetails from "./components/company/CompanyDetails"
import UpdateCompany from "./components/company/UpdateCompany";
import CompAdmin from "./components/Admin//companyAdmin/CompAdmin"
import UpdateCompAdmin from "./components/Admin//companyAdmin/UpdateCompAdmin"
import AddCompAdminAdmin from "./components/Admin/companyAdmin/AddCompAdminAdmin"
import UpdateRentAdmin from "./components/Admin//Rent/UpdateRentAdmin"
require("dotenv").config();

export default function App() {
console.log("bbbbbbb : ",process.env.REACT_APP_BACKEND_URL );

  const [token, setToken] = useState("");
  const [role, setRole] = useState(0);
  const [name, setname] = useState(""); 
   const [idU, setid] = useState("");
   

  
  useEffect(async() => { 
    if (!token) {
      const token = JSON.parse(localStorage.getItem("token"))
      setToken(token)
    }
  if (!role) {
      const role = JSON.parse(localStorage.getItem("role :"))
      setRole(role) 
}
if (!role) {
      const role = JSON.parse(localStorage.getItem("name"))
      setname(role) 
}
if (!role) {
      const role = JSON.parse(localStorage.getItem("id"))
      setid(role)
}
}, [token])

  return (
    <div>
    
      <Navbar token={token} setToken={setToken}  role={role}  setRole={setRole}  setid={setid}name={name} setname={setname}/>  
      <Route exact path="/" component={Home} />
      <Route exact path="/SignUp" component={SignUp} />
      <Route exact path= "/login" render={() => ( <Login setToken = {setToken}  setRole={setRole}  setname={setname}setid={setid}/>  ) }/>
      <Route  exact   path="/Buy" render={() => { return <Buy token={token} role={role} name={name}  idU={idU}/>;}} />
      <Route  exact   path="/Rent" render={() => { return <Rent token={token} role={role}  name={name}  idU={idU}/>;}} />
      <Route  exact   path="/Company" render={() => { return <Company token={token}role={role} name={name}  idU={idU} />;}} />
      <Route  exact   path="/CompanyDetails/:id" render={() => { return <CompanyDetails token={token} />;}} />
      <Route  exact   path="/BuyDetails/:id" render={() => { return <BuyDetails token={token} role={role} name={name}  idU={idU}/>;}} />
      <Route  exact   path="/RentDetails/:id" render={() => { return <RentDetails token={token}role={role} name={name}  idU={idU} />;}} />

    

      {role == 1 ? <> 
        <Route exact path= "/Admin"      render={() => ( <Admin    token={token} setToken={setToken}   setRole={setRole} />  )} />
        <Route exact path= "/UserAdmin"  render={() => ( <UserAdmin token={token} setToken={setToken}   setRole={setRole}/>  )} />
        <Route exact path= "/RentAdmin" render={() => ( <RentAdmin token={token} setToken={setToken}   />  )} />
        <Route exact path= "/BuyAdmin"  render={() => ( <BuyAdmin  token={token} setToken={setToken}   />  )} />
        <Route exact path= "/CompAdmin"  render={() => ( <CompAdmin  token={token} setToken={setToken}   />  )} />
        
        <Route  exact   path="/UpdateUserAdmin/:id" render={() => { return <UpdateUserAdmin token={token}  setRole={setRole} />;}} />
        <Route  exact   path="/AddUserAdmin" render={() => { return <AddUserAdmin token={token} />;}} />
        <Route  exact   path="/AddBuyAdmin" render={() => { return <AddBuyAdmin token={token} />;}} />
        <Route  exact   path="/UpdateBuyAdmin/:id" render={() => { return <UpdateBuyAdmin token={token} />;}} />
        <Route  exact   path="/AddRentAdmin" render={() => { return <AddRentAdmin token={token} />;}} />
        <Route  exact   path="/AddCompAdminAdmin" render={() => { return <AddCompAdminAdmin token={token} />;}} />
        <Route  exact   path="/UpdateCompAdmin/:id" render={() => { return <UpdateCompAdmin token={token} />;}} />
        <Route  exact   path="/UpdateRentAdmin/:id" render={() => { return <UpdateRentAdmin token={token} />;}} />

        
        </>
    : role == 2 ? <> 
      <Route  exact   path="/Addcompany" render={() => { return <Addcompany token={token} />;}} />
      <Route  exact   path="/Consultation" render={() => { return <Consultation token={token} role={role} />;}} />

      <Route  exact   path="/UpdateCompany/:id" render={() => { return <UpdateCompany token={token}  />;}} />

      
      
    </> :  role == 3 ? <> 
      <Route  exact   path="/AddBuy" render={() => { return <AddBuy token={token} />;}} />
      <Route  exact   path="/Consultation" render={() => { return <Consultation token={token}  role={role}/>;}} />
      <Route  exact   path="/AddRent" render={() => { return <AddRent token={token} />;}} />
      <Route  exact   path="/UpdateBuy/:id" render={() => { return <UpdateBuy token={token} />;}} />
      <Route  exact   path="/UpdateRent/:id" render={() => { return <UpdateRent token={token} role={role}/>;}} />    

   </> :""
  
  } 
    </div>
  );
}


