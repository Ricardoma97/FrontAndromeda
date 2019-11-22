import React from "react";
import { BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";

class Navi extends React.Component{
   
  render(){
    return(
    <div>
        <nav>          
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Pilotos">Pilotos</Link>
            </li>
            <li>
              <Link to="/Estaciones">Estaciones</Link>
            </li>
            <li>
              <Link to="/Tickets">Tickets</Link>
            </li>
            <li>
              <Link to="/Vuelos">Vuelos</Link>
            </li>
            <li>
              <Link to="/Users">Users</Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}
export default Navi;