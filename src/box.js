import React from 'react';
import './index.css';
import {redBoxLocations} from './redBoxLocations.js';

function Box({row, col, val, changer}){
	val = val !== 0 ? val : "";
	let bgColor = "#ff4d4d";
	if (redBoxLocations.includes(row+col))
		bgColor = "#333333";
	return (
		<input 
			style={{backgroundColor: bgColor}}
			className="box"
			type="number"
			min="1"
			max="9"
			value={val}
			onChange={(e)=> changer(e,row, col)}
		/>
	);
}

export default Box;