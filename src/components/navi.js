import React from "react";
import { Router,Switch,Route,Link,Redirect} from "react-router-dom";
import{ useState, useEffect } from "react";

function Navi(){
    const[lol,setlol]=useState(0);
    return(
      window.localStorage.getItem('logedIn')?(
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
              <Link to="/Destinos">Destinos</Link>
            </li>
            <li>
              <Link to="/Users">Users</Link>
            </li>
            <div>
              <button onClick={()=>{window.localStorage.removeItem('token'); window.localStorage.removeItem('logedIn'); setlol({lol}+1);}}>Log out</button>
            </div>
          </ul>
        </nav>
      </div>
      ):(<div> You are not loged in</div>)
    );
}
export default Navi;