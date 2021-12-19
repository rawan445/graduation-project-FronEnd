import React, { useState, useEffect } from "react";
import {Route } from 'react-router-dom';
import Home from './components/Home';
import SignUp from './components/SignUp';
import Login from './components/Login';
import Aqar from "./components/Aqar"
import Navbar from "./components/Navbar";
import AddAqar from "./components/AddAqar";
import AqarDetails from "./components/AqarDetails";
import Comp from "./components/Comp"; 
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
     <Route  exact   path="/Aqar" render={() => { return <Aqar token={token}  />;}} />
     <Route  exact   path="/AddAqar" render={() => { return <AddAqar token={token} />;}} />
     <Route  exact   path="/AqarDetails/:id" render={() => { return <AqarDetails token={token} />;}} />
     <Route  exact   path="/Comp" render={() => { return <Comp token={token} />;}} />
     <Route exact path= "/login" render={() => ( <Login setToken = {setToken}  />  )
      }/>

    </div>
  );
}

