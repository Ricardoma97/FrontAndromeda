import React, { useState, useEffect } from "react";
import Navi from './navi.js';
import axios from 'axios';
import { BrowserRouter as Router,Switch,Route,Link,Redirect} from "react-router-dom";

function NewPiloto (){
  const[token,setToken]=useState([window.localStorage.getItem('token')]);
  const[gotData,setGotData]=useState(false);
  const[id,setId]=useState(1);
  const[name,setname]=useState('');
  const[birthday,setbirthday]=useState('');
  const[mail,setmail]=useState('');
  const[direccion,setdireccion]=useState('');
  const[numberOfFlights,setnumberOfFlights]=useState(1);

   function handlenameChange(e){
    setname(e.target.value.toString());
  }
   function handlebirthdayChange(e){
    setbirthday(e.target.value.toString());
  }
   function handlemailChange(e){
    setmail(e.target.value.toString());
  }
   function handledireccionChange(e){
    setdireccion(e.target.value.toString());
  }
  function handlenumberOfFlightsChange(e){
      setnumberOfFlights(e.target.value.toString());
    }

  /*function getDataFromDb(){
    axios(options)
      .then((response) => console.log(response));
  };*/

  function signUp(){
    axios.post('http://localhost:3001/pilotos/',{
    "name":`${name}`,
    "birthday":`${birthday}`,
    "direccion":`${direccion}`,
    "mail":`${mail}`,
    "numberOfFlights":`${numberOfFlights}`
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
    <div class="container">
    <h2>Nuevo Piloto</h2>
    {/*<p>{token}</p>*/}
    <input type="text" placeholder="Name" value={name} onChange={handlenameChange}/>
    <input type="date" placeholder="Birthday" value={birthday} onChange={handlebirthdayChange}/>
    <input type="text" placeholder="Direccion" value={direccion} onChange={handledireccionChange}/>
    <input type="text" placeholder="Mail" value={mail} onChange={handlemailChange}/>
    <input type="number" placeholder="NumberOfFlights" value={numberOfFlights} onChange={handlenumberOfFlightsChange}/>
    <button onClick={signUp}>signUp</button>
    
    </div>
    </div>
      ) : (<Redirect to="/"/>)
    );
   
  }

export default NewPiloto;

/*
{"_id":{"$oid":"5dd89208b6f846567448b324"}
,"photo":"prueba.url",
"name":"Ricardo Prueba",
"birthday":{"$date":{"$numberLong":"867801600000"}},
"direccion":"La calle",
"mail":"prueba@gmail.com",
"numeberOfFlights":{"$numberInt":"1"},
"__v":{"$numberInt":"0"}}*/