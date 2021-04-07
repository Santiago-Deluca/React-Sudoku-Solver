import React from 'react';
import './index.css';

function Result({duration}){
	return (
		<div style={{color: "white"}}>
			<h2>
				Board Solved in <span style={{color:"#66ff66"}}>{`${duration}`}</span> seconds. Check the log below for the steps.
			</h2>
		</div>
		);
}

export default Result;