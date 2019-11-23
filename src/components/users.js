import React, { useState, useEffect } from "react";
import Navi from './navi.js';
import axios from 'axios';
import { BrowserRouter as Router,Switch,Route,Link,Redirect} from "react-router-dom";
import pfp from '../Userpfp.jpg';

function Users (){
  const[data,setData]=useState([]);
  const[gotData,setGotData]=useState(false);
  const[id,setId]=useState(1);
  const[intervalIsSet,setintervalIsSet]=useState(false);
  const[idToDelete,setidToDelete]=useState(null);
  const[idToUpdate,setidToUpdate]=useState(null);
  const[objectToUpdate,setobjectToUpdate]=useState(null);
  const[token,setToken]=useState([window.localStorage.getItem('token')]);
  const[tabla,setTabla]=useState();

  useEffect(()=>{
    console.log('se cargo el comp user');
    console.log({data})
    //getUsers();
    //console.log({id});
    if(!`${data}`){
      getUsers();
      console.log('no habia data');
    }
    //getDataFromDb();
    if (!intervalIsSet) {
      /*let interval = setInterval(getDataFromDb, 10000);*/
      //console.log('wut?');
      //setintervalIsSet(interval);
    }
  });

  function lol(argument){
    setId(id+1);
  };
  /*function getDataFromDb(){
    axios(options)
      .then((response) => console.log(response));
  };*/
  function checkToken(){
    console.log({token});
    window.localStorage.setItem('token',JSON.stringify({token}));
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
      .then((response) => {
        setToken(response.data.accessToken);
        window.localStorage.setItem('token',(response.data.accessToken));
        window.localStorage.setItem('logedIn',true);
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
    {/*<p>{token}</p>*/}
   {/* <ul>
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
    </ul>*/}
    <div id="tabla">
            <table>
                <thead>
                    <h5>Todos los usuarios</h5>
                    <tr>
                        <th>Photo</th>
                        <th>Id</th>
                        <th>Nombre</th>
                        <th>Mail</th>
                    </tr>
                </thead>
                <tbody>
                    {data.length <= 0
            ? 'NO DB ENTRIES YET'
            : data.map((dat) => (
                <tr style={{ padding: '10px' }} key={data._id}>
                  <td><img src={pfp} className="pfp"/></td>
                  <td style={{ color: 'gray' }}> {dat._id}</td>
                  <td>{dat.name} </td>
                  <td style={{ color: 'gray' }}>{dat.mail}</td>
                </tr>
              ))}
                 </tbody>
            </table>
        </div>
    <Link to="/newUser">
      <button >Nuevo usuario</button>
    </Link>
    </div>
    </div>
      ) : (<Redirect to="/"/>)
    );
   
  }

export default Users;