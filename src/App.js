import React, { useState, useEffect } from "react";
import logo from './Andromeda_logo.jpeg';
import './App.css';
import { BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import NameForm from './components/input1.js'
import Navi from './components/navi.js'
import auth from './auth.js'
import BtnLogin from './components/btnLogin.js'
import Pilotos from './components/pilotos.js'
import Users from './components/users.js'
import Vuelos from './components/vuelos.js'
import Estaciones from './components/estaciones.js'
import Tickets from './components/tickets.js'

function App() {
  return (
    <Router>
      <div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/Pilotos" component={Pilotos}>
            <Pilotos/>
          </Route>
          <Route path="/Users" component={Users}>
            <Users />
          </Route>
          <Route path="/Estaciones" component={Estaciones}>
            <Estaciones /> 
          </Route>
          <Route path="/Tickets" component={Tickets}>
            <Tickets /> 
          </Route>
          <Route path="/Vuelos" component={Vuelos}>
            <Vuelos /> 
          </Route>
          <Route path="/" >
            <Home /> 
          </Route>
          
        </Switch>
      </div>
    </Router>
  );
}



function Home() {
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
  <div class="inicio container">
    <div class="row">
      <div class="col s12">
        <img src={logo} alt="lol" class="andromedaLogo"/>
      </div>
    </div>
    <div class="row">
      <div class="col s6 offset-s3">
        <input type="text" placeholder="Usuario"value={usuario} onChange={handleUserChange}/>
        <input type="text" placeholder="Contraseña" value={contraseña} onChange={handlePasswordChange}/>
      </div>
    </div>
    <div class="row">
      <div class="col s3 offset-s3">
        <div class="buttonGenerico">
          <button class="BtnAzul">Login User</button>  
        </div>
      </div>
      <div class="col s3 offset-s1">
        <div class="buttonGenerico">
          <BtnLogin/>
        </div>
      </div>
    </div>
    </div>
    </Router>
  );

}

export default App;
