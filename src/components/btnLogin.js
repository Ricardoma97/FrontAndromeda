import React from 'react'
import auth from '../auth.js'

export const BtnLogin = props=>{
	
	return(
		<div>
		    <button class="BtnAzul"
			    onClick={()=>{
			    	console.log('LOL')
			    	auth.login(()=>{
			    		
			           });
			    }}
			to ="/pilotos">Login Admin</button>
        </div>
    );
};
export default BtnLogin;