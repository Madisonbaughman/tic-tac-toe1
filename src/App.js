import React from 'react';
import './App.css';

function Board(){
  const boardArr = new Array(9).fill('')

  let item = boardArr.map((n, index) => 
    <div key={index} className='space col-4'>{n}</div>
    )
  
  return(
    <div className='container'>
      <div className='row'> 
        {item}
      </div>
    </div>

    // <div className='board container' >
    //   <div className='first row'>
    //     <div className='space col'>kjjkl</div>
    //     <div className='space col' >{boardArr[1]}</div>
    //     <div className='space col' >{boardArr[2]}</div>
    //   </div>
    // </div>

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
