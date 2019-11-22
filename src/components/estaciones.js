import React, { useState, useEffect } from "react";
import Navi from './navi.js';
	
class Estaciones extends React.Component{
constructor(props) {
    super(props);
  }
  render(){
  return (
    <div>
    <Navi/>
    <h1>ESTACIONES</h1>
    </div>
    );
}	
}
export default Estaciones;