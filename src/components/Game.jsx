import React from 'react';
import TicTacToeLogic from '../hooks/use-tic-toe';



const Game = () => {
 const{board,size,setSize,clickHandler,getMessage,requiredWins,setRequiredWins,xWins,oWins} = TicTacToeLogic()
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
          <input
            type='number'
            value={size}
            min='3'
            onChange={(e) => setSize(Number(e.target.value))}
            className='w-[50px] p-1 m-1 rounded-md bg-transparent'
            
          />
        </label>
        <label className='text-lg font-bold'>
          No of Wins:
          <input
            type="number"
            value={requiredWins}
            onChange={(e) => setRequiredWins(Number(e.target.value))}
            min="3"
            max={size}
            className='w-[50px] p-1 m-1 rounded-md bg-transparent'
          />
        </label>
      </div>
    </div>
  );
}

export default Game;
