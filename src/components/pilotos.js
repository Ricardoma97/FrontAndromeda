import React, { useState, useEffect } from "react";
import Navi from './navi.js';
	
class Pilotos extends React.Component{
constructor(props) {
    super(props);
  }
  render(){
  return (
    <div>
    <Navi/>
    <h1>PILOTOS</h1>
    </div>
    );
}	
}
export default Pilotos;