import { useEffect, useState } from "react";

const initialBoard=()=>Array(9).fill(null);


const useTicTacToe=()=>{
     const [board,setBoard]=useState(initialBoard());
     const [Xwin,setXwin]=useState(0);
     const [Owin,setOwin]=useState(0);
     const [drawCnt,setDrawCnt]=useState(0);
     const [isNext,setIsNext]=useState(true);
     const [playAgain,setPlayAgain]=useState(false);

     const WinningPatterns=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]

    const calculateWinner=(currentBoard)=>{
        for(let i=0;i<WinningPatterns.length;i++)
        {
            const [a,b,c]=WinningPatterns[i];
            if(currentBoard[a] && currentBoard[a]===currentBoard[b] && currentBoard[a]===currentBoard[c])
            {
                return currentBoard[a];
            }
        }
        return null;
     }

    useEffect(()=>{
        const winner=calculateWinner(board);
        if(!board.includes(null) || winner)
        {
            setPlayAgain(true);
        }
        if(winner==="X")
        {
            setXwin(prev=>prev+1);
        }
        else if(winner==="O")
        {
            setOwin(prev=>prev+1);
        }
        else if(!board.includes(null) && !winner )
        {
            setDrawCnt(prev=>prev+1);
        }
    },[board])
     
     

     const handleClick=(index)=>{
        const winner=calculateWinner(board);
        console.log("winner is ",winner);
        if(winner || board[index])
        {
            return;
        }

        const newBoard=[...board];
        newBoard[index]=isNext?"X":"O";
        setBoard(newBoard);
        setIsNext(!isNext);
     }

     const getStatusMessage=()=>{
        const winner=calculateWinner(board);
        if(winner)
        {
            return <p>Winner:{winner}</p>
        }
        if(!board.includes(null))
        {
            return <p>Draw</p>
        }
        return <p>Turn:{isNext? "X":"O"}</p>
     }

     const resetGame=()=>{
        setBoard(initialBoard);
        setPlayAgain(prev=>!prev);
        setIsNext(true);
     }

     const resetAll=()=>{
        setBoard(initialBoard);
        setOwin(0);
        setXwin(0);
        setDrawCnt(0);
        setPlayAgain(false);
        setIsNext(true);
     }

     return {board,Xwin,Owin,drawCnt,calculateWinner,handleClick,getStatusMessage,resetGame,resetAll,playAgain}

}

export default useTicTacToe;
