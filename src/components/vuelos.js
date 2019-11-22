import React, { useState, useEffect } from "react";
import Navi from './navi.js';
	
class Vuelos extends React.Component{
constructor(props) {
    super(props);
  }
  render(){
  return (
    <div>
    <Navi/>
    <h1>Vuelos</h1>
    </div>
    );
}	
}
export default Vuelos;