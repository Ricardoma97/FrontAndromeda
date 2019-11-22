import React, { useState, useEffect } from "react";
import Navi from './navi.js';
	
class Users extends React.Component{
constructor(props) {
    super(props);
  }
  render(){
  return (
    <div>
    <Navi/>
    <h1>USERS</h1>
    </div>
    );
}	
}
export default Users;