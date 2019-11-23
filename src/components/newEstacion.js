import React, { useState, useEffect } from "react";
import Navi from './navi.js';
import axios from 'axios';
import { BrowserRouter as Router,Switch,Route,Link,Redirect} from "react-router-dom";

function NewEstacion(){
  const[token,setToken]=useState([window.localStorage.getItem('token')]);
  const[gotData,setGotData]=useState(false);
  const[name,setname]=useState('');

   function handlenameChange(e){
    setname(e.target.value.toString());
  }

  /*function getDataFromDb(){
    axios(options)
      .then((response) => console.log(response));
  };*/

  function signUp(){
    axios.post('http://localhost:3001/estaciones/',{
    "name":`${name}`,
  },{headers: {Authorization: `Bearer ${token}`}})
      .then((response) => {
        alert('Se creo con exito el nuevo Piloto');
      })
  };

  function logout(){
    setToken('');
    window.localStorage.removeItem('token');
    window.localStorage.setItem('logedIn',false);
    this.forceUpdate();
  }

  return (
     window.localStorage.getItem('logedIn') ? (
    <div>
    <Navi/>
    <div className="container">
    <h2>Nuevo Usuario</h2>
    {/*<p>{token}</p>*/}
    <input type="text" placeholder="Name" value={name} onChange={handlenameChange}/>
    <button onClick={signUp}>signUp</button>
    
    </div>
    </div>
      ) : (<Redirect to="/"/>)
    );
   
  }

export default NewEstacion;