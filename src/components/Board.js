import React, { useContext, useState } from "react";
import Square from "./Square";
import { validateShape } from "../helpers/Shapes";
import { CardContext } from "./CardContext";
import { toast } from "react-toastify";
import { warnToast, successToast, errorToast } from "../helpers/Toasts";

export default function Board({
  playerid,
  boardid,
  grid,
  color,
  value,
  resetBoard,
  handlePlayerSubmits,
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
  const debugMode = false;

  // Handles individual square clicks
  function handleClick(r, c) {
    // disallow if a player has already submitted a shape
    if (state.roundSubmits[playerid] === 1) return;

    let squares = grid.slice();
    let turnBoard = turn.slice();
    if (!squares[r][c] && !turnBoard[r][c]) {
      // disallow more clicks than there are squares in each shapes
      let max = state.expeditionDeck[state.currentRound].squares;
      if (turnBoard.flat().filter(Boolean).length >= max) {
        toast.warn("Oops! Too many squares selected", warnToast);
        return;
      }

      squares[r][c] = "x";
      turnBoard[r][c] = "x";
    } else if (turnBoard[r][c] === "x") {
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

  const handleValidation = () => {
    // In debug mode, all shapes/clicks are valid
    if (debugMode) return true;
    // Only allow one submission per player
    if (state.roundSubmits[playerid] === 1) return false;
    // if the shape doesn't match the expedition card, return false
    if (!validateShape(turn, state.expeditionDeck[state.currentRound])) return false;
    console.log("Shape is valid!");
    // convert "x"s to 1s
    grid.forEach((row, x) => {
      row.forEach((cell, y) => {
        if (cell === "x") grid[x][y] = 2;
      });
    });

    setGameboard(grid);
    setTurn(blankBoard);

    // Sees if number of submissions in the round matches the number of players
    handlePlayerSubmits();
    return true;
  };

  // Handles board submit
  function handleSubmit() {
    let isValid = handleValidation();

    if (isValid) {
      // See if board is complete
      isBoardComplete(gameBoard);
    } else {
      // send error toast
      toast.error("Invalid shape. Please try again.", errorToast);
    }
  }

  function isBoardComplete(board) {
    let flat = board.flat();
    let removeFalsy = flat.filter(Boolean);
    if (removeFalsy.length === 16) {
      setTurn(blankBoard);
      const newGrid = resetBoard(playerid, boardid);
      setGameboard(newGrid.grid);
      toast.success("🎉 Card completed!", successToast);
    }
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
