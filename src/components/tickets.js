import React, { useState, useEffect } from "react";
import Navi from './navi.js';
	
class Tickets extends React.Component{
constructor(props) {
    super(props);
  }
  render(){
  return (
    <div>
    <Navi/>
    <h1>Tickets</h1>
    </div>
    );
}	
}
export default Tickets;