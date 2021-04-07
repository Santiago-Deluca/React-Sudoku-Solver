import React from 'react';
import './index.css';

function LoggerComponent({logs}){
	let toDisplay = logs.map((val, i) => <div key={i} className="splP">{val}</div>);
	return (
		<div className="loggerBox">
			{toDisplay}
		</div>);
}

export default LoggerComponent;