import { useState } from "react";

const initialBoard=()=>Array(9).fill(null);


const useTicTacToe=()=>{
     const [board,setBoard]=useState(initialBoard());

     const [isNext,setIsNext]=useState(true);

     const WinningPatterns=[]

     const calculateWinner=()=>{}

     const handleClick=()=>{}

     const getStatusMessage=()=>{}

     const resetGame=()=>{

     }

     return {board,calculateWinner,handleClick,getStatusMessage,resetGame}

}

export default useTicTacToe;
