import React,{useState} from 'react';
import useTicTacToe from '../Hooks/useTicTacToe';





function TicTacToe() {

  const {board,calculateWinner,handleClick,getStatusMessage,resetGame}=useTicTacToe
 
  console.log(board);
  return (
    <div className='game'>
      <h1>Tic-Tac-Toe</h1>
      <div className='status'>
         <span>X:{}</span> <span>Draws:{}</span> <span>O:{}</span>
      </div>
     
      <p>Turn:{}</p>

      <div className='board'>
        {
          board.map((_,index)=>{
            return <button className='cell' key={index}>
              X
            </button>
          })
        }
      </div>

      <div className='btn-div'>
        <button className='reset-btn' onClick={resetGame}>Restart Round</button>
        <button className='reset-btn'>Reset All</button>
      </div>
    </div>
  )
}

export default TicTacToe
