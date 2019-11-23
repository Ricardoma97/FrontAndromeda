import React, { useState, useEffect } from "react";
import Navi from './navi.js';
import { BrowserRouter as Router,Switch,Route,Link,Redirect} from "react-router-dom";

function Vuelos(){
  return (
    window.localStorage.getItem('logedIn') ? (
    <div>
    <Navi/>
    <h1>Vuelos</h1>
    </div>) : (<Redirect to="/"/>)
    );
}	

export default Vuelos;