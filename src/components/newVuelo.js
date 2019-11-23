import React, { useState, useEffect } from "react";
import Navi from './navi.js';
import axios from 'axios';
import { BrowserRouter as Router,Switch,Route,Link,Redirect} from "react-router-dom";
import pfp from '../Userpfp.jpg';

function NewVuelo (){
  const[token,setToken]=useState([window.localStorage.getItem('token')]);
  const[gotData,setGotData]=useState(false);
  const[data,setdata]=useState([]);
  const[id,setId]=useState(1);
  const[idToDelete,setidToDelete]=useState(null);
  const[idToUpdate,setidToUpdate]=useState(null);
  const[destino,setdestino]=useState('');
  const[tipoDeVuelo,settipoDeVuelo]=useState('');
  const[arrivalDate,setarrivalDate]=useState('');
  const[launchDate,setlaunchDate]=useState('');
  const[capacidad,setcapacidad]=useState(1);
  const[name,setname]=useState('');
  const[birthday,setbirthday]=useState('');
  const[direccion,setdireccion]=useState('');
  const[mail,setmail]=useState('');
  const[numeberOfFlights,setnumeberOfFlights]=useState(1);

   function handledestinoChange(e){
    setdestino(e.target.value.toString());
  }
  function handletipoDeVueloChange(e){
    settipoDeVuelo(e.target.value.toString());
  }
  function handlearrivalDateChange(e){
    setarrivalDate(e.target.value.toString());
  }
  function handlelaunchDateChange(e){
    setlaunchDate(e.target.value.toString());
  }
  function handlecapacidadChange(e){
    setcapacidad(e.target.value.toString());
  }
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
  function handlenumeberOfFlightsChange(e){
    setnumeberOfFlights(e.target.value.toString());
  }


  function getPilotos(){
    var AuthStr = 'Bearer '.concat({token});
    axios.get('http://localhost:3001/pilotos/',{headers: {Authorization: `Bearer ${token}`}})
    .then((response) => setdata(response.data.result))
    .catch((error) => {
     console.log('error ' + error);
    });
  }
  useEffect(()=>{
    console.log('se cargo el comp user');
    console.log({data})
    //getVuelos();
    //console.log({id});
    if(!`${data}`){
      getPilotos();
      console.log('no habia data');
    }
    //getDataFromDb();
  });
  /*function getDataFromDb(){
    axios(options)
      .then((response) => console.log(response));
  };*/
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

  function signUp(){
    axios.post('http://localhost:3001/vuelos/',{
    "destino":`${destino}`,
    "tipoDeVuelo":`${tipoDeVuelo}`,
    "arrivalDate":`${arrivalDate}`,
    "launchDate":`${launchDate}`,
    "capacidad":`${capacidad}`,
    "piloto":{
      "name":`${name}`,
      "birthday":`${birthday}`,
      "direccion":`${direccion}`,
      "direccion":`${direccion}`,
      "mail":`${mail}`,
      "numeberOfFlights":`${numeberOfFlights}` 
    }
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
    <input type="text" placeholder="Destino" value={destino} onChange={handledestinoChange}/>
    <input type="text" placeholder="Tipo de Vuelo" value={name} onChange={handlenameChange}/>
    <input type="date" placeholder="Arrival Date" value={name} onChange={handlenameChange}/>
    <input type="date" placeholder="Launch Date" value={name} onChange={handlenameChange}/>
    <input type="number" placeholder="capacidad" value={mail} onChange={handlemailChange}/>
    <input type="text" placeholder="Nombre del Piloto" value={direccion} onChange={handledireccionChange}/>
    <input type="text" placeholder="Direccion" value={direccion} onChange={handledireccionChange}/>
    <input type="text" placeholder="Direccion" value={direccion} onChange={handledireccionChange}/>
    <input type="text" placeholder="Direccion" value={direccion} onChange={handledireccionChange}/>
    <button onClick={signUp}>signUp</button>
    <p>Pilotos disponibles</p>
    <div id="tabla">
            <table>
                <thead>
                    <h5>Todos los pilotos</h5>
                    <tr>
                        <th>Photo</th>
                        <th>Id</th>
                        <th>Nombre</th>
                        <th>Mail</th>
                        <th>Fecha de nacimiento</th>
                        <th>Direccion</th>
                        <th>Numero de vuelos</th>
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
                  <td style={{ color: 'gray' }}>{dat.birthday}</td>
                  <td style={{ color: 'gray' }}>{dat.direccion}</td>
                  <td style={{ color: 'gray' }}>{dat.numeberOfFlights}</td>
                </tr>
              ))}
                 </tbody>
            </table>
    </div>
    </div>
    </div>
      ) : (<Redirect to="/"/>)
    );
   
  }

export default NewVuelo;
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