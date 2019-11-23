import React, { useState, useEffect } from "react";
import Navi from './navi.js';
import axios from 'axios';
import { BrowserRouter as Router,Switch,Route,Link,Redirect} from "react-router-dom";

function NewUser (){
  const[token,setToken]=useState([window.localStorage.getItem('token')]);
  const[gotData,setGotData]=useState(false);
  const[id,setId]=useState(1);
  const[idToDelete,setidToDelete]=useState(null);
  const[idToUpdate,setidToUpdate]=useState(null);
  const[name,setname]=useState('');
  const[password,setpassword]=useState('');
  const[type,settype]=useState('');
  const[mail,setmail]=useState('');
  const[direccion,setdireccion]=useState('');

   function handlenameChange(e){
    setname(e.target.value.toString());
  }
   function handlepasswordChange(e){
    setpassword(e.target.value.toString());
  }
   function handletypeChange(e){
    settype(e.target.value.toString());
  }
   function handlemailChange(e){
    setmail(e.target.value.toString());
  }
   function handledireccionChange(e){
    setdireccion(e.target.value.toString());
  }

  /*function getDataFromDb(){
    axios(options)
      .then((response) => console.log(response));
  };*/

  function signUp(){
    axios.post('http://localhost:3001/users/',{
    "name":`${name}`,
    "password":`${password}`,
    "type":`${type}`,
    "mail":`${mail}`,
    "direccion":`${direccion}` 
  },{headers: {Authorization: `Bearer ${token}`}})
      .then((response) => {
        alert(response);
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
    <input type="text" placeholder="Password" value={password} onChange={handlepasswordChange}/>
    <input type="text" placeholder="Type" value={type} onChange={handletypeChange}/>
    <input type="text" placeholder="Mail" value={mail} onChange={handlemailChange}/>
    <input type="text" placeholder="Direccion" value={direccion} onChange={handledireccionChange}/>
    <button onClick={signUp}>signUp</button>
    
    </div>
    </div>
      ) : (<Redirect to="/"/>)
    );
   
  }

export default NewUser;