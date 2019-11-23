import React, { useState, useEffect } from "react";
import './App.css';
import { BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import auth from './auth.js'
import Home from './components/home.js'
import Pilotos from './components/pilotos.js'
import NewPiloto from './components/newPiloto.js'
import Users from './components/users.js'
import NewUsers from './components/newUser.js'
import Vuelos from './components/vuelos.js'
import NewVuelo from './components/newVuelo.js'
import Estaciones from './components/estaciones.js'
import NewEstacion from './components/newEstacion.js'
import Tickets from './components/tickets.js'
import Destinos from './components/destinos.js'
import NewDestino from './components/newDestino.js'
import axios from 'axios'

class App extends React.Component {
  render(){
  return (
    <Router>
      <div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/Pilotos" exact component={Pilotos}>
            <Pilotos/>
          </Route>
          <Route path="/NewPiloto" exact component={NewPiloto}>
            <NewPiloto/>
          </Route>
          <Route path="/Users" exact component={Users}>
            <Users />
          </Route>
          <Route path="/NewUser" exact component={NewUsers}>
            <NewUsers />
          </Route>
          <Route path="/Estaciones" exact component={Estaciones}>
            <Estaciones /> 
          </Route>
          <Route path="/NewEstacion" exact component={NewEstacion}>
            <NewEstacion /> 
          </Route>
          <Route path="/Tickets" exact component={Tickets}>
            <Tickets /> 
          </Route>
          <Route path="/Vuelos" exact component={Vuelos}>
            <Vuelos /> 
            </Route>
          <Route path="/NewVuelo" exact component={NewVuelo}>
            <NewVuelo /> 
          </Route>
             <Route path="/Destinos" exact component={Destinos}>
            <Destinos /> 
          </Route>
          <Route path="/NewDestino" exact component={NewDestino}>
            <NewDestino /> 
          </Route>
          <Route path="/" exact component={Home} >
            <Home /> 
          </Route>
          
        </Switch>
      </div>
    </Router>
  );
  }
}



export default App;
