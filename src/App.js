import './index.css';
import Box from './box.js';
import React, {useState} from 'react';
import makeGrid from './makeGrid.js';
import {solveBoard} from './solverFunction.js';
import LoggerComponent from './loggerComponent.js';
import Result from './result.js';
import boardGenerator from './boardGenerator.js';

const initialState = {
  grid: makeGrid(),
  logs: [],
  speed: 0
};

function App() {
  const [state, setState] = useState(initialState);

  let board = [];

  function cellChange(e, r, c) {
    let temp = [...state.grid];
    temp[r][c] = +e.target.value;
    setState({...state, ...{grid:temp}});
  }

  for (let i = 0; i < 9; i += 1){
    let row = [];
    for (let j = 0; j < 9; j += 1)
      row.push(<Box 
        key={(i*10)+j}
        row={i.toString()} 
        col={j.toString()} 
        val={state.grid[i][j]} 
        changer={cellChange}/>
      );
    board.push(row);
  }

  function print() {
    let start = performance.now()
    solveBoard(state.grid, state.logs);
    let end = performance.now();
    let ts = ((end-start)/1000).toFixed(3);
    state.logs.push(`Board Solved in ${ts} Seconds`);
    setState({grid: state.grid,logs: state.logs, speed: ts}); }

  function resetBoard() {
    setState({grid: makeGrid(),logs: [], speed: 0});
  }

  function prettyPrint(){
    resetBoard();
    setState({grid: [...boardGenerator()], logs: [], speed: 0});
  }

  return (
    <div>
      <h1>Sudoku Solver</h1>
      <div className="grid-container">
        {board}
      </div>
      {state.logs.length > 0 && <Result duration={state.speed} />}
      {state.logs.length > 0 && <LoggerComponent logs={state.logs} />}
      <div className="buttons-grid">
        <button className="green" onClick={resetBoard}>Reset</button>
        <button className="yellow" onClick={prettyPrint}>Random</button>
        <button className="blue" onClick={print}>Solve</button>
      </div>
    </div>
  );
}

export default App;
