import React, { useState } from "react";
import Square from "./Square";
import { TREASURES } from "./cards";

export default function Board() {
  const randomTreasure =
    TREASURES[Math.floor(Math.random() * TREASURES.length)].grid;
  const [gameBoard, setGameboard] = useState(randomTreasure);
  const [turn, setTurn] = useState([
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ]);

  function handleClick(r, c) {
    let squares = gameBoard.slice();
    let turnBoard = turn.slice();

    if (squares[r][c] !== 1 && turnBoard[r][c] !== 1) {
      squares[r][c] = "X";
      turnBoard[r][c] = 1;
    } else if (turnBoard[r][c] === 1) {
      squares[r][c] = 0;
      turnBoard[r][c] = 0;
    }

    setGameboard(squares);
    setTurn(turnBoard);
  }

  //where r (rows) and c (columns) are 0-3
  function renderSquare(r, c) {
    return <Square value={gameBoard[r][c]} onClick={() => handleClick(r, c)} />;
  }

  function handleSubmit() {
    //need to validate the 'turn' information still
    console.log(turn);
    setTurn([
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
    ]);
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
      <button onClick={() => handleSubmit()}>submit</button>
    </div>
  );
}
