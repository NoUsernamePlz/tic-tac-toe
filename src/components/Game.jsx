import React from 'react';
import TicTacToeLogic from '../hooks/use-tic-toe';



const Game = () => {
 const{board,size,setSize,clickHandler,getMessage,requiredWins,setRequiredWins,xWins,oWins,draw,finalWinner} = TicTacToeLogic()
 const message = getMessage()
  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: `repeat(${size}, 80px)`,
    gridTemplateRows: `repeat(${size}, 80px)`,
    maxWidth: `${size * 100}px`,
  };

  return (
    <div className='flex flex-col items-center justify-center min-h-screen  h-auto relative'>
      <h1 className='font-[900] text-6xl bg-gradient-to-r from-[#1023efb3]  to-[#034714] text-transparent bg-clip-text text-center mb-8 border-b-8 p-3 border-dashed border-spacing-3 border-black'>Tic Tac Toe</h1>
      <div className='font-bold text-xl text-white my-2'>{message}</div>
      <div className='flex justify-between items-center text-lg font-bold max-w-[350px] w-full my-6'>
        <div className=' p-2 '>X wins:<span className='font-bold mx-2 text-green-500 bg-black/30 px-1'>{xWins}</span></div>
        <div className=' p-2 '>Draw:<span className='font-bold mx-2 text-red-500 bg-black/30 px-1'>{draw}</span></div>
        <div className=' p-2 '>O wins:<span className='font-bold mx-2 text-blue-900 bg-black/30 px-1'>{oWins}</span></div>
        
      </div>
      <div style={gridStyle}>
        {board.map((box, i) => (
          <button key={i} className='w-[80px] h-[80px] bg-gradient-to-r from-[#149433] to-[#1066EF] font-bold text-red-900 text-center border-black border-2 hover:scale-110' onClick={()=>clickHandler(i)} disabled={box !== null}>
            {box}
          </button>
        ))}
      </div>
      <div className='mt-4 flex gap-10'>
        <label className='text-lg font-bold'>
          Grid Size:
         <div className='bg-black/30 rounded-md p-1 items-center text-center text-lg'><button className='w-5 h-5' onClick={()=>setSize(size+1)}>+</button>{size}<button disabled={size<=3?true:false} className={`w-5 h-5 ${size<=3?"cursor-not-allowed":""}`} onClick={()=>setSize(size-1)}>-</button></div> 
        </label>
        <label className='text-lg font-bold'>
          No of Wins:
           <div className='bg-black/30 rounded-md p-1 items-center text-center text-lg'><button className='w-5 h-5' onClick={()=>setRequiredWins(requiredWins+1)}>+</button>{requiredWins}<button disabled={requiredWins<=3?true:false} className={`w-5 h-5 ${requiredWins<=3?"cursor-not-allowed":""}`} onClick={()=>setRequiredWins(requiredWins-1)}>-</button></div> 
        </label>
      </div>
    </div>
  );
}

export default Game;
