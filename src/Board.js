import React, { useContext, useState } from "react";
import Square from "./Square";
import { validateShape } from "./shapes/Shapes";
import { CardContext } from "./CardContext";

export default function Board({ playerid, boardid, grid, color, value, resetBoard}) {
  const [state, setState] = useContext(CardContext);
  const [gameBoard, setGameboard] = useState(grid);
  const blankBoard = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ];

  const [turn, setTurn] = useState(blankBoard);

  function handleClick(r, c) {
    let squares = grid.slice();
    let turnBoard = turn.slice();

    if (squares[r][c] !== 1 && turnBoard[r][c] !== 1 && squares[r][c] !== "X") {
      squares[r][c] = 1;
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
    const isValid = validateShape(
      turn,
      "original",
      state.expeditionDeck[state.currentRound]
    );

    if (isValid) {
      console.log("Shape is valid!");
      setTurn(blankBoard);
    } else {
      alert("BAD SHAPE. TRY AGAIN");
    }

    // See if board is complete
    if (isBoardComplete(gameBoard)) {
      console.log('card complete', playerid, boardid)

      setTurn(blankBoard);

      const newGrid = resetBoard(playerid, boardid);
      setGameboard(newGrid.grid);
    }
  }

  function isBoardComplete (board) {
    let currentRowSums = []; 
    const add = (total, num) => total + num;
    gameBoard.forEach(row => {
      currentRowSums.push(row.reduce(add));
    })
    return currentRowSums.reduce(add) === 16;
  }

  return (
    <div style={{ margin: "20px" }} boardid={boardid}>
      <p>Points: {value}</p>
      <p>Color: {color}</p>
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
