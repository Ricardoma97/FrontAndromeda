import React, { useState, useEffect } from "react";
import './App.css';
import { BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import auth from './auth.js'
import Home from './components/home.js'
import Pilotos from './components/pilotos.js'
import Users from './components/users.js'
import NewUsers from './components/newUser.js'
import Vuelos from './components/vuelos.js'
import Estaciones from './components/estaciones.js'
import Tickets from './components/tickets.js'
import Destinos from './components/destinos.js'
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
          <Route path="/Users" exact component={Users}>
            <Users />
          </Route>
          <Route path="/newUser" exact component={NewUsers}>
            <NewUsers />
          </Route>
          <Route path="/Estaciones" exact component={Estaciones}>
            <Estaciones /> 
          </Route>
          <Route path="/Tickets" exact component={Tickets}>
            <Tickets /> 
          </Route>
          <Route path="/Vuelos" exact component={Vuelos}>
            <Vuelos /> 
            </Route>
             <Route path="/Destinos" exact component={Destinos}>
            <Destinos /> 
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
