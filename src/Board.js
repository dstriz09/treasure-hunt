import React, { useState } from "react";
import Square from "./Square";

export default function Board() {
  const [gameBoard, setGameboard] = useState([
    [0, 0, 0, 0],
    [0, 1, 0, 0],
    [0, 0, 1, 0],
    [0, 0, 0, 0],
  ]);

  function handleClick(r, c) {
    let squares = gameBoard.slice();
    if (squares[r][c] !== 1) {
      squares[r][c] = "X";
    }
    setGameboard(squares);
    console.log(gameBoard);
  }

  //where r (rows) and c (columns) are 0-3
  function renderSquare(r, c) {
    return <Square value={gameBoard[r][c]} onClick={() => handleClick(r, c)} />;
  }

  return (
    <div>
      <div className="board-row">
        {renderSquare(0, 0)}
        {renderSquare(0, 1)}
        {renderSquare(0, 2)}
        {renderSquare(0, 3)}
      </div>
      <div className="board-row">
        {renderSquare(1, 0)}
        {renderSquare(1, 1)}
        {renderSquare(1, 2)}
        {renderSquare(1, 3)}
      </div>
      <div className="board-row">
        {renderSquare(2, 0)}
        {renderSquare(2, 1)}
        {renderSquare(2, 2)}
        {renderSquare(2, 3)}
      </div>
      <div className="board-row">
        {renderSquare(3, 0)}
        {renderSquare(3, 1)}
        {renderSquare(3, 2)}
        {renderSquare(3, 3)}
      </div>
    </div>
  );
}
