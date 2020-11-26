import React, { useContext, useState } from "react";
import Board from "./Board";
import { CardContext } from "./CardContext";

export default function Player({ playerid }) {
  // const [boardsArr, setBoardsArr] = useState([]);
  const [state, setState] = useContext(CardContext);


  const resetBoard = (playerid, boardid) => {

    console.log('card complete2222', playerid, boardid)
    let hand = [];
    let treasureDeck = state.treasureDeck.slice();

    // for player one
    if (playerid === 0){
      // create a copy of the players hand
      let hand = state.playerOne;
      // select the finished card
      let finishedCard = hand.current[boardid];
      // push to complete deck
      hand.complete.push(finishedCard);
      // get a new card
      let newCard = treasureDeck[0]
      // remove old card and add new card to the players hand
      hand.current.splice(boardid, 1, newCard)
      // remove card from deck
      treasureDeck.shift()
      // save deck and hand to state
      setState(state => ({ ...state, treasureDeck, playerOne: hand }));

      // return the current grid to set as active
      return newCard;

    // for player two
    } else if (playerid === 1) {
      let hand = state.playerTwo;
      // hand.current.push(treasureDeck[currentTreasure++])
      // setState(state => ({ ...state, playerTwo: hand }));

    // for player three
    } else if (playerid === 2) {
      let hand = state.playerThree;
      // hand.current.push(treasureDeck[currentTreasure++])
      // setState(state => ({ ...state, playerThree: hand }));

    // for player four
    } else if (playerid === 3){
      let hand = state.playerFour;
      // hand.current.push(treasureDeck[currentTreasure++])
      // setState(state => ({ ...state, playerFour: hand }));
    }

  }

  const CreateBoards = () => {
    
    let hand = [];
    if (playerid === 0) hand = state.playerOne.current; // player one
    if (playerid === 1) hand = state.playerTwo.current; // player two 
    if (playerid === 2) hand = state.playerThree.current; // player three
    if (playerid === 3) hand = state.playerFour.current; // player four

    // create <board> components for each current card
    let playerComponentArr = [];
    hand.forEach((card, i) => {
      playerComponentArr.push([
        <Board 
          playerid={playerid}
          boardid={i}
          grid={card.grid}
          color={card.color}
          value={card.value}
          resetBoard={(p, b) => resetBoard(p, b)}
        />
      ])
    })
    return playerComponentArr
  }

  return (
    <div style={{ display: "flex" }}>
      <h3 style={({ margin: "20px" }, { alignSelf: "center" })}>
        Player {playerid + 1}
      </h3>
      {
        CreateBoards().map((board) => {
          return board;
        })
      }
    </div>
  )
}