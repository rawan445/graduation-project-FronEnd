import React, { useState, useEffect } from "react";
import {Route } from 'react-router-dom';

import Home from './components/Home';
import SignUp from './components/recording/SignUp';
import Login from './components/recording/Login';
import Navbar from "./components/Navbar"
import Buy from "./components/Buy/Buy"
import Rent from "./components/rent/Rent"
import AddBuy from "./components/Buy/AddBuy";
import AddRent from "./components/rent/AddRent";
import BuyDetails from "./components/Buy/BuyDetails";
import RentDetails from "./components/rent/RentDetails";
import UpdateBuy from "./components/Buy/UpdateBuy";
import UpdateRent from "./components/rent/UpdateRent";
import Comp from "./components/Comp"; 
import CompDecor from "./components/CompDecor";
import Admin from "./components/Admin/Admin";
import UserAdmin from "./components/Admin/user/UserAdmin";
import CompAdmin from "./components/Admin/CompAdmin";
import BuyAdmin from "./components/Admin/Buy/BuyAdmin";
import RentAdmin from "./components/Admin/Rent/RentAdmin";
import UpdateUserAdmin from "./components/Admin/user/UpdateUserAdmin"
import AddUserAdmin from "./components/Admin/user/AddUserAdmin";
import AddBuyAdmin from "./components/Admin/Buy/AddBuyAdmin";
export default function App() {
  
  const [token, setToken] = useState("");
  const [role, setRole] = useState(0);

  
  useEffect(async() => { 
    if (!token) {
        const token = JSON.parse(localStorage.getItem("token"))
        setToken(token)
    }
  
  if (!role) {
    const role = JSON.parse(localStorage.getItem("role :"))
    setRole(role)
    
}
}, [token])

  return (
    <div>
    
      <Navbar token={token} setToken={setToken}  role={role} />  
      <Route exact path="/" component={Home} />
      <Route exact path="/SignUp" component={SignUp} />
      <Route exact path= "/login" render={() => ( <Login setToken = {setToken}  setRole={setRole} />  ) }/>

      <Route  exact   path="/Buy" render={() => { return <Buy token={token}  />;}} />
      <Route  exact   path="/AddBuy" render={() => { return <AddBuy token={token} />;}} />
      <Route  exact   path="/BuyDetails/:id" render={() => { return <BuyDetails token={token} />;}} />
      <Route  exact   path="/UpdateBuy/:id" render={() => { return <UpdateBuy token={token} />;}} />

      <Route  exact   path="/Rent" render={() => { return <Rent token={token}  />;}} />
      <Route  exact   path="/AddRent" render={() => { return <AddRent token={token} />;}} />
      <Route  exact   path="/RentDetails/:id" render={() => { return <RentDetails token={token} />;}} />
      <Route  exact   path="/UpdateRent/:id" render={() => { return <UpdateRent token={token} />;}} />
      <Route  exact   path="/Comp" render={() => { return <Comp token={token} />;}} />
      <Route  exact   path="/CompDecor" render={() => { return <CompDecor token={token} />;}} />  
   

      {role == 1 ? <> 
        <Route exact path= "/Admin"      render={() => ( <Admin    token={token} setToken={setToken}   setRole={setRole} />  )} />
        <Route exact path= "/UserAdmin"  render={() => ( <UserAdmin token={token} setToken={setToken}   setRole={setRole}/>  )} />
        <Route exact path= "/CompAdmin"  render={() => ( <CompAdmin token={token} setToken={setToken}   setRole={setRole}/>  )} />
        <Route exact path= "/RentAdmin" render={() => ( <RentAdmin token={token} setToken={setToken}   />  )} />
        <Route exact path= "/BuyAdmin"  render={() => ( <BuyAdmin  token={token} setToken={setToken}   />  )} />

        <Route  exact   path="/UpdateUserAdmin/:id" render={() => { return <UpdateUserAdmin token={token} />;}} />
        <Route  exact   path="/AddUserAdmin" render={() => { return <AddUserAdmin token={token} />;}} />
        <Route  exact   path="/AddBuyAdmin" render={() => { return <AddBuyAdmin token={token} />;}} />

        
  
        </>
    :<>
    {console.log("role !!")}
    
    </>
  
  }

        
      
    
    </div>
  );
}


