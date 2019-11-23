import React, { useState, useEffect } from "react";
import Navi from './navi.js';
import axios from 'axios';
import { BrowserRouter as Router,Switch,Route,Link,Redirect} from "react-router-dom";
import pfp from '../Userpfp.jpg';

function NewVuelo (){
  const[token,setToken]=useState([window.localStorage.getItem('token')]);
  const[gotData,setGotData]=useState(false);
  const[data,setdata]=useState([]);
  const[id,setId]=useState();
  const[idToDelete,setidToDelete]=useState(null);
  const[idToUpdate,setidToUpdate]=useState(null);
  const[destino,setdestino]=useState('');
  const[tipoDeVuelo,settipoDeVuelo]=useState('');
  const[arrivalDate,setarrivalDate]=useState('');
  const[launchDate,setlaunchDate]=useState('');
  const[capacidad,setcapacidad]=useState();
  const[name,setname]=useState('');
  const[birthday,setbirthday]=useState('');
  const[direccion,setdireccion]=useState('');
  const[mail,setmail]=useState('');
  const[numeberOfFlights,setnumeberOfFlights]=useState();
  const[idReferencia,setidReferencia]=useState('');
  const[dataDestinos,setdataDestinos]=useState([]);

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
  function handleidReferenciaChange(e){
    setidReferencia(e.target.value.toString());
  }


  function getPilotos(){
    var AuthStr = 'Bearer '.concat({token});
    axios.get('https://andromedaapi.herokuapp.com/pilotos/',{headers: {Authorization: `Bearer ${token}`}})
    .then((response) => setdata(response.data.result))
    .catch((error) => {
     console.log('error ' + error);
    });
  }
  function getDestinos(){
    var AuthStr = 'Bearer '.concat({token});
    axios.get('https://andromedaapi.herokuapp.com/destinos/',{headers: {Authorization: `Bearer ${token}`}})
    .then((response) => setdataDestinos(response.data.result))
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
      getDestinos();
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
    axios.post('https://andromedaapi.herokuapp.com/vuelos/',{
    "destino":`${destino}`,
    "tipoDeVuelo":`${tipoDeVuelo}`,
    "arrivalDate":`${arrivalDate}`,
    "launchDate":`${launchDate}`,
    "capacidad":`${capacidad}`,
    "piloto":{
      "id_referencia":`${idReferencia}`,
      "name":`${name}`,
      "birthday":`${birthday}`,
      "direccion":`${direccion}`,
      "mail":`${mail}`,
      "numeberOfFlights":`${numeberOfFlights}` 
    }
  },{headers: {Authorization: `Bearer ${token}`}})
      .then((response) => {
        alert('Creado con exito');
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
    <h2>Nuevo Vuelo</h2>
    <p>Es posible Seleccionar pilotos y destinos disponibles</p>
    {/*<p>{token}</p>*/}
    <input id="Destino"type="text" placeholder="Destino" value={destino} onChange={handledestinoChange}/>
    <input id="Tipo_de_vuelo" type="text" placeholder="Tipo de Vuelo" value={tipoDeVuelo} onChange={handletipoDeVueloChange}/>
    <input id="Arrival Date" type="date" placeholder="Arrival Date" value={arrivalDate} onChange={handlearrivalDateChange}/>
    <input id=""type="date" placeholder="Launch Date" value={launchDate} onChange={handlelaunchDateChange}/>
    <input id=""type="number" placeholder="Capacidad" value={capacidad} onChange={handlecapacidadChange}/>
    <input id=""type="text" placeholder="Nombre del Piloto" value={name} onChange={handlenameChange}/>
    <input id=""type="text" placeholder="Birthday" value={birthday} onChange={handlebirthdayChange}/>
    <input id=""type="text" placeholder="Direccion" value={direccion} onChange={handledireccionChange}/>
    <input id=""type="text" placeholder="Mail" value={mail} onChange={handlemailChange}/>
    <input id=""type="number" placeholder="Numero de vuelos" value={numeberOfFlights} onChange={handlenumeberOfFlightsChange}/>
    <input id=""type="text" placeholder="id de Referencia" value={idReferencia} onChange={handleidReferenciaChange}/>
    <button onClick={signUp}>signUp</button>
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
                  <td> {dat._id}</td>
                  <td>{dat.name} </td>
                  <td>{dat.mail}</td>
                  <td>{dat.birthday}</td>
                  <td>{dat.direccion}</td>
                  <td>{dat.numeberOfFlights}</td>
                  <button onClick={()=>{
                    setname(`${dat.name}`);
                    setmail(`${dat.mail}`);
                    setbirthday(`${dat.birthday}`);
                    setdireccion(`${dat.direccion}`);
                    setnumeberOfFlights(`${dat.numeberOfFlights}`);
                    setidReferencia(`${dat._id}`)
                  }}>Seleccionar</button>
                </tr>
              ))}
                 </tbody>
            </table>
    </div>
    </div>
    <div className="container">
    <div id="tabla">
            <table>
                <thead>
                    <h5>Todos los destinos</h5>
                    <tr>
                        <th>Photo</th>
                        <th>Id</th>
                        <th>Nombre</th>
                    </tr>
                </thead>
                <tbody>
                    {dataDestinos.length <= 0
            ? 'NO DB ENTRIES YET'
            : dataDestinos.map((dat) => (
                <tr style={{ padding: '10px' }} key={data._id}>
                  <td><img src={pfp} className="pfp"/></td>
                  <td> {dat._id}</td>
                  <td>{dat.name} </td>
                  <button onClick={()=>{
                    setdestino(`${dat.name}`);
                  }}>Seleccionar</button>
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