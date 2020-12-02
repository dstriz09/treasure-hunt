import React, { useContext, useState, useEffect } from "react";
import Square from "./Square";
import { validateShape } from "./shapes/Shapes";
import { CardContext } from "./CardContext";
import { toast } from "react-toastify";

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

  function handleClick(r, c) {
    let squares = grid.slice();
    let turnBoard = turn.slice();
    // Handles individual square clicks
    if ((!squares[r][c] && !turnBoard[r][c]) || squares[r][c] === 3) {
      // disallow if a player has already submitted a shape
      if (state.roundSubmits[playerid] === 1) return;
      // disallow more clicks than there are squares in each shapes
      let max = state.expeditionDeck[state.currentRound].squares;
      if (turnBoard.flat().filter(Boolean).length >= max) {
        toast.warn("Oops! Too many squares selected", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        return;
      }

      //if a player selects a coin, it adds it to the total
      if (squares[r][c] === 3) {
        setHasCoin(true);
      }

      squares[r][c] = "x";
      turnBoard[r][c] = "x";
    } else if (turnBoard[r][c] === "x") {
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

  //Every time coinUpdate updates (which is whenever a coin gets added), this fuction runs
  useEffect(() => {
    //add the coins to score when players reach 4, 8, and 12.
    //Do this with state.coinBonus.pop() to assign the score and remove it from the array
  }, [coinUpdate]);

  // Handles board submit
  function handleSubmit() {
    const isValid = validateShape(
      turn,
      state.expeditionDeck[state.currentRound]
    );

    if (state.roundSubmits[playerid] === 1) return;
    // If the shape matches the expedition card
    if (isValid) {
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

      // Checks for coins and adds
      if (hasCoin) {
        let playerCoins = state.coins;
        let count = coinUpdate;
        playerCoins[playerid] += 1;
        setState((state) => ({ ...state, coins: playerCoins }));
        setHasCoin(false);
        setCoinUpdate((count += 1));
      }

      // See if board is complete
      if (isBoardComplete(gameBoard)) {
        setTurn(blankBoard);
        const newGrid = resetBoard(playerid, boardid);
        setGameboard(newGrid.grid);
        setRevert(newGrid.grid);
        toast.success("🎉 Card completed!", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    } else {
      toast.error("Invalid shape. Please try again.", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
    // }
  }

  function isBoardComplete(board) {
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
