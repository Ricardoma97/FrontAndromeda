import React, { useState, useEffect } from "react";
import Navi from './navi.js';
import axios from 'axios';
import { BrowserRouter as Router,Switch,Route,Link,Redirect} from "react-router-dom";
import pfp from '../Userpfp.jpg';

function Vuelos (){
  const[data,setData]=useState([]);
  const[datapilotos,setDatapilotos]=useState([]);
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
    //getVuelos();
    //console.log({id});
    if(!`${data}`){
      getVuelos();
      console.log('no habia data');
    }if(!`${data}`){
      getVuelos();
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
  function getVuelos(){
    var AuthStr = 'Bearer '.concat({token});
    axios.get('http://localhost:3001/vuelos/',{headers: {Authorization: `Bearer ${token}`}})
    .then((response) => setData(response.data.result))
    .catch((error) => {
     console.log('error ' + error);
    });
  }
  function getPilotos(){
    var AuthStr = 'Bearer '.concat({token});
    axios.get('http://localhost:3001/pilotos/',{headers: {Authorization: `Bearer ${token}`}})
    .then((response) => setDatapilotos(response.data.result))
    .catch((error) => {
     console.log('error ' + error);
    });
  }
  function consolelogVuelos(){
    console.log({data});
    setTabla({data})
  }


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
                    <h5>Todos los vuelos</h5>
                    <tr>
                        <th>Id</th>
                        <th>Destino</th>
                        <th>Tipo De Vuelo</th>
                        <th>Dia de Arrivo</th>
                        <th>Dia de Lanzamiento</th>
                        <th>Capacidad</th>
                        <th>Foto del piloto</th>
                        <th>Id del piloto</th>
                        <th>Nombre del piloto</th>
                    </tr>
                </thead>
                <tbody>
                    {data.length <= 0
            ? 'NO DB ENTRIES YET'
            : data.map((dat) => (
                <tr style={{ padding: '10px' }} key={data._id}>
                  <td style={{ color: 'gray' }}> {dat._id}</td>
                  <td>{dat.destino} </td>
                  <td>{dat.tipoDeVuelo} </td>
                  <td>{dat.arrivalDate} </td>
                  <td>{dat.launchDate} </td>
                  <td>{dat.capacidad} </td>
                  <td><img src={pfp} className="pfp"/></td>
                  <td>{dat.piloto.id_referencia} </td>
                  <td>{dat.piloto.name} </td>
                  <td style={{ color: 'gray' }}>{dat.mail}</td>
                </tr>
              ))}
                 </tbody>
            </table>
        </div>
    <Link to="/newVuelo">
      <button >Nuevo Vuelo</button>
    </Link>
    </div>
    </div>
      ) : (<Redirect to="/"/>)
    );
   
  }

export default Vuelos;
/*{
  "_id": "5dd8aca49e0a95613ca8503d",
  "destino": "Neptune",
  "tipoDeVuelo": "VIP",
  "arrivalDate": "1997-07-02T00:00:00.000Z",
  "launchDate": "1997-07-02T00:00:00.000Z",
  "capacidad": 1000,
  "piloto": {
    "id_referencia": "5dad12241737723f9009a3dc",
    "photo": "prueba.url",
    "name": "James Gun",
    "birthday": "1997-07-02T00:00:00.000Z",
    "direccion": "La calle",
    "mail": "prueba@gmail.com",
    "numeberOfFlights": 1
  },
  "__v": 0
}
*/