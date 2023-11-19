import React from 'react';
import {useState, useEffect} from 'react';
import './App.css';
import GameOver from './GameOver.js'

function Board(){
  let [boardArr, setBoardArr] = useState(() => {
    // getting stored value
    const saved = localStorage.getItem("boardArr");
    const initialValue = JSON.parse(saved);
    return initialValue || new Array(9).fill({value: ' '})
  });
  let [winner, setWinner] = useState('')
  let [toggle, setToggle] = useState('X');
  let [gameOver, setGameOver] = useState(false)

  let displayBoard = boardArr.map((n, index) => 
    <div key={index} id={index} className='space col-4 fs-2'>{n.value}</div>
    )
  // could I have attached onClick here to pass in index ^^ ? but then i have 9 click handlers
  
    function XorO(e){
    // if the game isnt over
     if (gameOver === false){
      // if they click a space and that space is empty
      if (e.target.className !== 'row' && e.target.innerHTML === ' ' ){
        console.log('e.target.id ' + e.target.id)
        // the value of item in array equals the toggle
        let copyBoard = [...boardArr]
        copyBoard[e.target.id] = {value: toggle}
        setBoardArr(copyBoard)
        // reset the board
        toggle === "X" ? setToggle('O') : setToggle('X') 
        //run a function to see if anyone has won
        
        }
      }
    }
 
    useEffect (() => {
      localStorage.setItem("boardArr", JSON.stringify(boardArr));

      const possWins = [[0,1,2],
                        [3,4,5],
                        [6,7,8],
                        [0,3,6],
                        [1,4,7],
                        [2,5,8],
                        [0,4,8],
                        [2,4,6]]
            
        function didItWin([a,b,c]){
          console.log( boardArr)
          if (
            (boardArr[a].value !== ' ' && boardArr[a].value === boardArr[b].value && boardArr[b].value === boardArr[c].value) 
          ){
              setGameOver(true) 
              setWinner(boardArr[a].value)
          } 
          return
        }

      possWins.map(subArr => didItWin(subArr)); 

    }, [boardArr])


  return(
    <div className='container'>
      <div className='row rowboard' onClick={XorO}> 
        {displayBoard}
      </div>
      <div className='row'>
        {gameOver && <GameOver winner={winner} setBoardArr={setBoardArr}/>}
      </div>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <h1><b>Tic Tac Toe</b></h1>
      <Board />
    </div>
  );
}

// highlight winning row
// reset button

export default App;
