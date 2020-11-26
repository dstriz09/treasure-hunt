import React, { useContext, useState } from "react";
import Board from "./Board";
import { CardContext } from "./CardContext";

export default function Player({ playerid }) {
  const [state, setState] = useContext(CardContext);

  // called from the board component
  const resetBoard = (playerid, boardid) => {
    let hand = [];
    // create a copy of the treasure deck
    let treasureDeck = state.treasureDeck.slice();

    // create a copy of the players hand
    if (playerid === 0) hand = state.playerOne; // player one
    if (playerid === 1) hand = state.playerTwo; // player two 
    if (playerid === 2) hand = state.playerThree; // player three
    if (playerid === 3) hand = state.playerFour; // player four

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
    if (playerid === 0) setState(state => ({ ...state, treasureDeck, playerOne: hand }));; // player one
    if (playerid === 1) setState(state => ({ ...state, treasureDeck, playerTwo: hand }));; // player two 
    if (playerid === 2) setState(state => ({ ...state, treasureDeck, playerThree: hand }));; // player three
    if (playerid === 3) setState(state => ({ ...state, treasureDeck, playerFour: hand }));; // player four

    // returns the new card -- necessary for the board to be cleared immediately
    return newCard;
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