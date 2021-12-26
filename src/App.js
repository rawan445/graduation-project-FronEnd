import React, { useState, useEffect } from "react";
import {Route } from 'react-router-dom';
import Home from './components/Home';
import SignUp from './components/SignUp';
import Login from './components/Login';
import Navbar from "./components/Navbar";

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
import UserAdmin from "./components/Admin/UserAdmin";
import CompAdmin from "./components/Admin/CompAdmin";
import BuyAdmin from "./components/Admin/BuyAdmin";
import RentAdmin from "./components/Admin/RentAdmin";
export default function App() {
  
  const [token, setToken] = useState("");

  useEffect(() => { 
    if (!token) {
        const token = JSON.parse(localStorage.getItem("token"))
        setToken(token)
    }

}, [])

  return (
    <div>
      <Navbar token={token} setToken={setToken} />  
      <Route exact path="/" component={Home} />
      <Route   exact path="/SignUp" component={SignUp} />

      <Route  exact   path="/Buy" render={() => { return <Buy token={token}  />;}} />
      <Route  exact   path="/Rent" render={() => { return <Rent token={token}  />;}} />

      <Route  exact   path="/AddBuy" render={() => { return <AddBuy token={token} />;}} />
      <Route  exact   path="/AddRent" render={() => { return <AddRent token={token} />;}} />

      <Route  exact   path="/BuyDetails/:id" render={() => { return <BuyDetails token={token} />;}} />
      <Route  exact   path="/RentDetails/:id" render={() => { return <RentDetails token={token} />;}} />

      
      <Route  exact   path="/UpdateBuy/:id" render={() => { return <UpdateBuy token={token} />;}} />
      <Route  exact   path="/UpdateRent/:id" render={() => { return <UpdateRent token={token} />;}} />

      
      <Route  exact   path="/Comp" render={() => { return <Comp token={token} />;}} />
      <Route  exact   path="/CompDecor" render={() => { return <CompDecor token={token} />;}} />

      <Route exact path= "/login" render={() => ( <Login setToken = {setToken}  />  ) }/>

      <Route exact path= "/Admin" render={() => ( <Admin  token={token} />  )} />
      <Route exact path= "/UserAdmin" render={() => ( <UserAdmin  token={token}  />  )} />
      <Route exact path= "/CompAdmin" render={() => ( <CompAdmin token={token}   />  )} />
      <Route exact path= "/BuyAdmin" render={() => ( <BuyAdmin token={token}   />  )} />
      <Route exact path= "/RentAdmin" render={() => ( <RentAdmin token={token}   />  )} />

    </div>
  );
}

