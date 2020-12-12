import React, { useContext, useState, useEffect } from "react";
import Square from "./Square";
import { validateShape } from "../helpers/Shapes";
import { CardContext } from "./CardContext";
import { toast } from "react-toastify";
import { warnToast, successToast, errorToast } from "../helpers/Toasts";
import "./styles/board.css";

export default function Board({
  playerid,
  boardid,
  grid,
  color,
  value,
  resetBoard,
  handlePlayerSubmits,
  originalGrid,
}) {
  const [state, setState] = useContext(CardContext);
  const [gameBoard, setGameboard] = useState(grid);
  const [revert, setRevert] = useState(originalGrid);
  const blankBoard = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ];
  const [turn, setTurn] = useState(blankBoard);
  const [hasCoin, setHasCoin] = useState(false);
  const [coinUpdate, setCoinUpdate] = useState(0);
  const [triggerUseEffect, setTriggerUseEffect] = useState(0);
  const debugMode = false;

  // Handles individual square clicks
  function handleClick(r, c) {
    // disallow if a player has already submitted a shape
    if (state.roundSubmits[playerid] === 1) return;

    let squares = grid.slice();
    let turnBoard = turn.slice();
    // Handles individual square clicks
    if ((!squares[r][c] && !turnBoard[r][c]) || squares[r][c] === 3) {
      // disallow if a player has already submitted a shape
      if (state.roundSubmits[playerid] === 1) return;
      // disallow more clicks than there are squares in each shapes
      let max = state.expeditionDeck[state.currentRound].squares;
      if (turnBoard.flat().filter(Boolean).length >= max) {
        toast.warn("Oops! Too many squares selected", warnToast);
        return;
      }

      //if a player selects a coin, it adds it to the total
      if (squares[r][c] === 0) {
        squares[r][c] = "x";
      } else if (squares[r][c] === 3) {
        setHasCoin(true);
        squares[r][c] = "xc";
      }

      turnBoard[r][c] = "x";
    } else if (turnBoard[r][c].toString().includes("x")) {
      let originalBoard = revert.slice();
      squares[r][c] = originalBoard[r][c];
      turnBoard[r][c] = 0;

      //if a player deselects a coin, it removes it from the total
      if (squares[r][c] === 3) {
        setHasCoin(false);
      }
    }

    setGameboard(squares);
    setTurn(turnBoard);
  }

  //where r (rows) and c (columns) are 0-3
  function renderSquare(r, c) {
    return (
      <Square
        value={gameBoard[r][c]}
        onClick={() => {
          handleClick(r, c);
        }}
      />
    );
  }

  useEffect(() => {
    setRevert(originalGrid);
  }, [triggerUseEffect]);

  useEffect(() => {
    //add the coins to score when players reach 4, 8, and 12.
    //Do this with state.coinBonus.pop() to assign the score and remove it from the array
  }, [coinUpdate]);

  const handleValidation = () => {
    // In debug mode, all shapes/clicks are valid
    if (debugMode) return true;
    // Only allow one submission per player
    if (state.roundSubmits[playerid] === 1) return false;
    // if the shape doesn't match the expedition card, return false
    if (!validateShape(turn, state.expeditionDeck[state.currentRound])) return false;
    // convert "x"s to 1s
    grid.forEach((row, x) => {
      row.forEach((cell, y) => {
        if (cell.toString().includes("x")) grid[x][y] = 2;
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

    // Checks for coins and adds
    if (hasCoin) {
      let playerCoins = state.coins;
      let count = coinUpdate;
      playerCoins[playerid] += 1;
      setState((state) => ({ ...state, coins: playerCoins }));
      setHasCoin(false);
      setCoinUpdate((count += 1));
    }

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
      let triggerCount = triggerUseEffect + 1;
      setTriggerUseEffect(triggerCount);
      toast.success("🎉 Card completed!", successToast);
    }
  }

  return (
    <div className={"board-grid card-" + color} boardid={boardid}>
      <p>Points: {value}</p>
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
