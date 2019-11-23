import React, { useState, useEffect } from "react";
import Navi from './navi.js';
import { BrowserRouter as Router,Switch,Route,Link,Redirect} from "react-router-dom";
import BtnLogin from './btnLogin.js'
import logo from '../Andromeda_logo.jpeg';
import axios from 'axios';


function Home(){
  const[token,setToken]=useState([window.localStorage.getItem('token')]);
  const[usuario,setUsuario]= useState('');
  const[contraseña,setContraseña]= useState('');
  const[lol,setlol]=useState(0);

  function handleUserChange(e){
    setUsuario(e.target.value.toString());
  }
  function handlePasswordChange(e){
    setContraseña(e.target.value.toString());
  }
  function login(){
    console.log('lol');
    console.log(`${usuario}`);
    console.log(`${contraseña}`);
    axios.post('https://andromedaapi.herokuapp.com/users/login',{
    "name":`${usuario}`,
    "password":`${contraseña}`})
      .then((response) => {
        setToken(response.data.accessToken);
        window.localStorage.setItem('token',(response.data.accessToken))
        window.localStorage.setItem('logedIn',true);
        //history.push("./Users") 
      })
        .catch((error) => {
     console.log('error ' + error);
    })
     setlol({lol}+1);
  };
    return(
      !window.localStorage.getItem('logedIn')?(
      <div>
      <Navi/>
      <Router>
        <div className="inicio container">
          <div className="row">
            <div className="col s12">
              <img src={logo} alt="lol" className="andromedaLogo"/>
              {/*<p>{token}</p>*/}
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
                <button className="BtnAzul" onClick={login} >Login</button>  
              </div>
            </div>
            {/*<div className="col s3 offset-s1" >
              <div className="buttonGenerico" >
                <BtnLogin/>
              </div>
            </div>*/}
          </div>
        </div>
      </Router>
      </div>):(<Redirect to="/users"/>)
    );
}
export default Home;