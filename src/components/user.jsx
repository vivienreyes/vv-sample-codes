import React, { Component } from 'react';
import '../css/user.css';
import {showInput} from '../util/showinput.js';

class user extends Component {
    render() {
        return (
			<form id='user'>
            <div id="user">
	       	<label class= "bold">Name:</label>
   	            <input type="text" name="name" /><br /> <br/> 
        	<label class= "bold">Age: </label>
   	            <input type="text" name="age" /><br /> <br/>
	        <label class= "bold">Gender:</label> <br/>
	            <input type="radio" name="gender" value="Male" /> Male <br />
	            <input type="radio" name="gender" value="Female" /> Female <br /><br/>
	            <input class= "bold" type="submit" value="Submit" onclick = {showInput}/><br/>
			</div>
			
			<div className='result'>
			<p id="result_name"></p>
			<p id="result_age"></p>
			<p id="result_gender"></p>
            </div>
			</form>
		)
	}
}

	
export default user;
