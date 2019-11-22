import React, { useState, useEffect } from "react";
import Navi from './navi.js';
import axios from 'axios';

function Users (){
  const[data,setData]=useState([]);
  const[id,setId]=useState(1);
  const[intervalIsSet,setintervalIsSet]=useState(false);
  const[idToDelete,setidToDelete]=useState(null);
  const[idToUpdate,setidToUpdate]=useState(null);
  const[objectToUpdate,setobjectToUpdate]=useState(null);
  const[token,setToken]=useState('');
  const[tabla,setTabla]=useState([]);
  const options = {
    url: 'http://localhost:3001/users/',
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json;charset=UTF-8'
    },
    data: {
      "type":"Admin",
      "name":"Ricardo2000",
      "password":"123456",
      "mail":"ricardoma972000@gmail.com",
      "direccion":"Del sol 100"
    }
  };

  useEffect(()=>{
    console.log('se cargo el comp user');
    console.log({data})
    //console.log({id});
    //getDataFromDb();
    if (!intervalIsSet) {
      /*let interval = setInterval(getDataFromDb, 10000);*/
      //console.log('wut?');
      //setintervalIsSet(interval);
    }
  }
  );
  function lol(argument){
    setId(id+1);
  };
  function getDataFromDb(){
    axios(options)
      .then((response) => console.log(response));
  };
  function checkToken(){
    console.log({token})
  };
  function getUsers(){
    var AuthStr = 'Bearer '.concat({token});
    axios.get('http://localhost:3001/users/',{headers: {Authorization: `Bearer ${token}`}})
    .then((response) => setData(response.data.result))
    .catch((error) => {
     console.log('error ' + error);
    });
  }
  function consolelogusers(){
    console.log({data});
    setTabla({data})
  }
  function login(){
    axios.post('http://localhost:3001/users/login',{
    "name":"Ricardo13",
    "password":"123456"})
      .then((response) => setToken(response.data.accessToken))
  };
  return (
    <div>
    <Navi/>
    <h1>USERS {id}</h1>
    <h2>lol</h2>
    <ul>
          {data.length <= 0
            ? 'NO DB ENTRIES YET'
            : data.map((dat) => (
                <li style={{ padding: '10px' }} key={data._id}>
                  <span style={{ color: 'gray' }}> id: </span> {dat._id} <br />
                  <span style={{ color: 'gray' }}> name: </span>
                  {dat.name}
                  <span style={{ color: 'gray' }}> mail: </span> {dat.mail} <br />
                </li>
              ))}
    </ul>
    <button onClick={getDataFromDb}>MAS</button>
    <button onClick={login}>Login</button>
    <button onClick={checkToken}>checkToken</button>
    <button onClick={getUsers}>getUsers</button>
    <button onClick={consolelogusers}>consolelogusers</button>
    </div>
    );
   
  }

export default Users;