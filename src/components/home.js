import React, { useState, useEffect } from "react";
import Navi from './navi.js';
import { BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import BtnLogin from './btnLogin.js'
import logo from '../Andromeda_logo.jpeg';

function Home(){
  function handleUserChange(e){
    setUsuario(e.target.value);
  }
  function handlePasswordChange(e){
    setContraseña(e.target.value);
  }
  const[usuario,setUsuario]= useState("");
  const[contraseña,setContraseña]= useState("");
    return(
      <Router>
        <div className="inicio container">
          <div className="row">
            <div className="col s12">
              <img src={logo} alt="lol" className="andromedaLogo"/>
            </div>
          </div>
          <div className="row">
            <div className="col s6 offset-s3">
              <input type="text" placeholder="Usuario" value={usuario} onChange={handleUserChange}/>
              <input type="text" placeholder="Contraseña" value={contraseña} onChange={handlePasswordChange}/>
            </div>
          </div>
          <div className="row">
            <div className="col s3 offset-s3">
              <div className="buttonGenerico">
                <button className="BtnAzul">Login User</button>  
              </div>
            </div>
            <div className="col s3 offset-s1" >
              <div className="buttonGenerico" >
                <BtnLogin/>
              </div>
            </div>
          </div>
        </div>
      </Router>
    );
}
export default Home;