import React, { useContext, useState } from "react";
import Board from "./Board";
import { CardContext } from "./CardContext";

let roundSubmits = 0;

export default function Player({ playerid }) {
  const [state, setState] = useContext(CardContext);
  let playerSubmit = 0;

  // get the players hand
  const getHand = (p) => {
    let hand = [];
    if (p === 0) hand = state.playerOne; // player one
    if (p === 1) hand = state.playerTwo; // player two
    if (p === 2) hand = state.playerThree; // player three
    if (p === 3) hand = state.playerFour; // player four
    return hand;
  };

  // checks and adds number of submits per expedition card round
  const handlePlayerSubmits = () => {
    roundSubmits++;
    playerSubmit++;
    if (roundSubmits == state.numPlayers) {
      console.log("all players have submitted");
      playerSubmit = 0;
    }
    if ((playerSubmit = 1)) {
      return playerSubmit;
    }
  };

  const checkForPlayerSubmit = (options) => {
    return playerSubmit;
  };

  // called from the board component
  const resetBoard = (playerid, boardid) => {
    // create a copy of the treasure deck
    let treasureDeck = state.treasureDeck.slice();
    // get the players hand
    let hand = getHand(playerid);
    // select the finished card
    let finishedCard = hand.current[boardid];
    // push to complete deck
    hand.complete.push(finishedCard);
    // get a new card
    let newCard = treasureDeck[0];
    // remove old card and add new card to the players hand
    hand.current.splice(boardid, 1, newCard);
    // remove card from deck
    treasureDeck.shift();

    // save deck and hand to state
    if (playerid === 0)
      setState((state) => ({ ...state, treasureDeck, playerOne: hand })); // player one
    if (playerid === 1)
      setState((state) => ({ ...state, treasureDeck, playerTwo: hand })); // player two
    if (playerid === 2)
      setState((state) => ({ ...state, treasureDeck, playerThree: hand })); // player three
    if (playerid === 3)
      setState((state) => ({ ...state, treasureDeck, playerFour: hand })); // player four

    // returns the new card -- necessary for the board to be cleared immediately
    return newCard;
  };

  const CreateBoards = () => {
    let hand = getHand(playerid);

    // create <board> components for each current card
    let playerComponentArr = [];

    hand.current.forEach((card, i) => {
      playerComponentArr.push([
        <Board
          playerid={playerid}
          boardid={i}
          key={playerid * 2 + i}
          grid={card.grid}
          color={card.color}
          value={card.value}
          resetBoard={(p, b) => resetBoard(p, b)}
          handlePlayerSubmits={handlePlayerSubmits}
          checkForPlayerSubmit={checkForPlayerSubmit}
        />,
      ]);
    });
    return playerComponentArr;
  };

  const getScore = (p) => {
    if (p === 0) return state.playerOne.score(); // player one
    if (p === 1) return state.playerTwo.score(); // player two
    if (p === 2) return state.playerThree.score(); // player three
    if (p === 3) return state.playerFour.score(); // player four
  };

  return (
    <div style={{ display: "flex" }}>
      <h3 style={({ margin: "20px" }, { alignSelf: "center" })}>
        Player {playerid + 1}
      </h3>
      {CreateBoards().map((board) => {
        return board;
      })}
      Completed cards: {getScore(playerid).completedCards}
      <br />
      Score: {getScore(playerid).score}
    </div>
  );
}
