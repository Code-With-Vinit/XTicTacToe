import React from 'react';
import useTicTacToe from '../Hooks/useTicTacToe';





function TicTacToe() {

  const {board,handleClick,getStatusMessage,resetGame,Xwin,Owin,drawCnt,resetAll,playAgain}=useTicTacToe()
 
  console.log(board);
  return (
    <div className='game'>
      <h1>Tic-Tac-Toe</h1>
      <div className='status'>
         <span>X:{Xwin}</span> <span>Draws:{drawCnt}</span> <span>O:{Owin}</span>
      </div>
     
      {getStatusMessage()}

      <div className='board'>
        {
          board.map((b,index)=>{
            return <button className='cell' key={index} onClick={()=>handleClick(index)} disabled={b!==null}>
              {b}
            </button>
          })
        }
      </div>

      <div className='btn-div'>
        <button className='reset-btn' onClick={resetGame}>{playAgain?"Play Again":"Restart Round"}</button>
        <button className='reset-btn'onClick={resetAll}>Reset All</button>
      </div>
    </div>
  )
}

export default TicTacToe
