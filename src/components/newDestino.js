import React, { useState, useEffect } from "react";
import Navi from './navi.js';
import axios from 'axios';
import { BrowserRouter as Router,Switch,Route,Link,Redirect} from "react-router-dom";

function NewDestino(){
  const[token,setToken]=useState([window.localStorage.getItem('token')]);
  const[gotData,setGotData]=useState(false);
  const[name,setname]=useState('');
  const[distance,setdistance]=useState(0);

   function handlenameChange(e){
    setname(e.target.value.toString());
  }
  function handledistanceChange(e){
    setdistance(e.target.value.toString());
  }

  /*function getDataFromDb(){
    axios(options)
      .then((response) => console.log(response));
  };*/

  function signUp(){
    axios.post('https://andromedaapi.herokuapp.com/destinos/',{
    "name":`${name}`,
    "distanceFromEarth":`${distance}`
  },{headers: {Authorization: `Bearer ${token}`}})
      .then((response) => {
        alert('Se creo con exito el nuevo Destino');
      })
  };

  return (
     window.localStorage.getItem('logedIn') ? (
    <div>
    <Navi/>
    <div className="container">
    <h2>Nuevo Destino</h2>
    {/*<p>{token}</p>*/}
    <input type="text" placeholder="Name" value={name} onChange={handlenameChange}/>
    <input type="number" placeholder="distance" value={distance} onChange={handledistanceChange}/>
    <button onClick={signUp}>signUp</button>
    
    </div>
    </div>
      ) : (<Redirect to="/"/>)
    );
   
  }

export default NewDestino;
/*{
  "_id": "5dd89214b6f846567448b325",
  "name": "tierra",
  "photo": "prueba.url",
  "distanceFromEarth": 10000,
  "__v": 0
}*/