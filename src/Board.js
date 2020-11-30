import React, { useContext, useState } from "react";
import Square from "./Square";
import { validateShape } from "./shapes/Shapes";
import { CardContext } from "./CardContext";

export default function Board({
  playerid,
  boardid,
  grid,
  color,
  value,
  resetBoard,
}) {
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

    if (!squares[r][c] && !turnBoard[r][c]) {
      // disallow more clicks than there are squares in each shapes
      let max = state.expeditionDeck[state.currentRound].squares;
      if (turnBoard.flat().filter(Boolean).length >= max) return

      squares[r][c] = "x";
      turnBoard[r][c] = "x";
    } else if (turnBoard[r][c] === "x") {
      squares[r][c] = 0;
      turnBoard[r][c] = 0;
    }

    setGameboard(squares);
    setTurn(turnBoard)
  }

  //where r (rows) and c (columns) are 0-3
  function renderSquare(r, c) {
    return <Square value={gameBoard[r][c]} onClick={() => handleClick(r, c)} />;
  }

  function handleSubmit() {
    const isValid = validateShape(
      turn,
      state.expeditionDeck[state.currentRound]
    );

    if (isValid) {
      console.log("Shape is valid!");

      // convert "x"s to 1s
      grid.forEach((row, x) => {
        row.forEach((cell, y) => {
          if (cell === "x") grid[x][y] = 2;
        })
      })

      setGameboard(grid)
      setTurn(blankBoard);

      // See if board is complete
      if (isBoardComplete(gameBoard)) {
        setTurn(blankBoard);

        const newGrid = resetBoard(playerid, boardid);
        setGameboard(newGrid.grid);
      }
    } else {
      alert("BAD SHAPE. TRY AGAIN");
    }
  }

  function isBoardComplete (board) {
    let flat = board.flat();
    let removeFalsy = flat.filter(Boolean);
    return removeFalsy.length === 16;
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
