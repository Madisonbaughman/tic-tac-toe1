import React from 'react';
import {useState} from 'react';
import './App.css';

function Board(){
  let [boardArr, setBoardArr] = useState(() => new Array(9).fill({value: ' '}))
  let [toggle, setToggle] = useState('X');

  let displayBoard = boardArr.map((n, index) => 
    <div key={index} id={index} className='space col-4'>{n.value}</div>
    )
  // could I have attached onClick here to pass in index ^^ ? but then i have 9 click handlers
  
  function XorO(e){
    
    if (e.target.className !== 'row' && e.target.innerHTML === ' ' ){
      console.log(e.target.id)
      // the value of item in array equals the toggle
      let copyBoard = [...boardArr]
      copyBoard[e.target.id] = {value: toggle}
      setBoardArr(copyBoard)
      // reset the board
      toggle === "X" ? setToggle('O') : setToggle('X') 
      //run a fucntion to see if anyone has won
      
    }
  }

  return(
    <div className='container'>
      <div className='row' onClick={XorO}> 
        {displayBoard}
      </div>
    </div>

  )
}



function App() {
  return (
    <div className="App">
      <h1>Tic Tac Toe</h1>
      <Board />
    </div>
  );
}

export default App;
