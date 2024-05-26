import React, { useState, useEffect } from 'react';


const initialBoard = (size) => Array(size * size).fill(null);

const TicTacToeLogic = () => {
  const [size, setSize] = useState(3);
  const [board, setBoard] = useState(initialBoard(size));
  const [xTurn, setXTurn] = useState(true);
  const [requiredWins, setRequiredWins] = useState(3); 
  const [xWins, setXWins] = useState(0);
  const [oWins, setOWins] = useState(0);
  const [draw,setDraw] = useState(0);
  const [finalWinner, setFinalWinner] = useState(null);

  const clickSound = new Audio('/click.mp3');
  const winSound = new Audio('/smallwin.wav');
  const finalWinSound = new Audio('/winner.mp3');
  const drawSound = new Audio('/draw.mp3');

  useEffect(() => {
    setBoard(initialBoard(size));
    setXTurn(true);
  }, [size]);

  useEffect(() => {
    if(requiredWins===undefined|| requiredWins<3) {setFinalWinner(null)}else{
      if (xWins >= requiredWins) setFinalWinner('X');
      if (oWins >= requiredWins) setFinalWinner('O');
    }
    
  }, [xWins, oWins, requiredWins]);

  const calculateWinner = (currentBoard) => {
    const lines = [];

    // Rows checking here
    for (let i = 0; i < size; i++) {
      lines.push(currentBoard.slice(i * size, i * size + size));
    }

    // Columns checking here
    for (let i = 0; i < size; i++) {
      const column = [];
      for (let j = 0; j < size; j++) {
        column.push(currentBoard[i + j * size]);
      }
      lines.push(column);
    }

    // Diagonals checking here
    const mainDiagonal = [];
    const antiDiagonal = [];
    for (let i = 0; i < size; i++) {
      mainDiagonal.push(currentBoard[i * (size + 1)]);
      antiDiagonal.push(currentBoard[(i + 1) * (size - 1)]);
    }
    lines.push(mainDiagonal, antiDiagonal);

    // Check for a winner
    for (const line of lines) {
      if (line.every(cell => cell === 'X')) return 'X';
      if (line.every(cell => cell === 'O')) return 'O';
    }

    return null;
  };


//  clicking logic
  const clickHandler = (index) => {
    if (finalWinner || board[index]) return;

    clickSound.play();

    const newBoard = [...board];
    newBoard[index] = xTurn ? 'X' : 'O';
    setBoard(newBoard);
    setXTurn(!xTurn);

    const winner = calculateWinner(newBoard);
    if (winner) {
      winSound.play();
      if (winner === 'X') setXWins(xWins + 1);
      if (winner === 'O') setOWins(oWins + 1);
      setBoard(initialBoard(size));
    }
  };

//   Message displaying logic
  const getMessage = () => {
    if (finalWinner) {
      finalWinSound.play();
      return `${finalWinner} is the ultimate winner!`;
    }
    const winner = calculateWinner(board);
    if (winner) {
      return `${winner} wins this round!`;
    }
    if (!board.includes(null)) {
      drawSound.play();
      setDraw(draw+1)
      setBoard(initialBoard(size));
      return `It's a draw!`;
    }
    return `Player ${xTurn ? 'X' : 'O'}'s turn`;
  };

  return { board, setSize, initialBoard, size, clickHandler, getMessage, setRequiredWins, xWins, oWins, finalWinner, requiredWins ,draw,finalWinner};
};

export default TicTacToeLogic;
