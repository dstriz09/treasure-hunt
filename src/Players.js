import React, { useContext, useState } from "react";
import Board from "./Board";
import { CardContext } from "./CardContext";

export default function Player(props) {
  const [boardsArr, setBoardsArr] = useState([]);
  const [state, setState] = useContext(CardContext);

  const CreateBoards = () => {
    // each player can have two cards so that is hardcoded here
    const numBoards = 2;
    let currentPlayerTemp = [];

    // equation to get starting board id by player num
    let startingBoardID = props.playerid * 2;
    console.log('a', props.playerid)

    for (let i = 0; i < numBoards; i++) {
      currentPlayerTemp.push([
        <Board playerId={i} boardid={startingBoardID++} />
      ])
    }

    return currentPlayerTemp
  }

  return (
    <div style={{ display: "flex" }}>
      <h3 style={({ margin: "20px" }, { alignSelf: "center" })}>
        Player {props.playerid + 1}
      </h3>
      {
        CreateBoards().map((board) => {
          return board;
        })
      }
    </div>
  )
}