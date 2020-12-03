import React, { useContext, useState } from "react";
import NumPlayers from "./NumPlayers";
import GameRoom from "./GameRoom";
import Players from "./Players";
import { CardContext } from "./CardContext";

export default function GameSetup({}) {
  const [state, setState] = useContext(CardContext);
  const [startGame, setStartGame] = useState(false);
  const [playersArr, setPlayersArr] = useState([]);

  const handleSubmit = (e, numPlayers) => {
    e.preventDefault();
    setState((state) => ({ ...state, numPlayers }));
    createPlayers(numPlayers);
    assignTreasures(numPlayers);
    setStartGame(true);
  };

  const createPlayers = (players) => {
    let temp = [];
    for (let i = 0; i < players; i++) {
      temp.push(<Players playerid={i} key={i} />);
    }
    setPlayersArr(temp);
  };

  // assign treasures to each player
  const assignTreasures = (players) => {
    // get details from state
    let treasureDeck = state.treasureDeck.slice();
    let currentTreasure = 0;

    // for each player
    for (let p = 0; p < players; p++) {
      // for each board [2 is hardcoded here]
      for (let b = 0; b < 2; b++) {
        // for player one
        if (p === 0) {
          let hand = state.playerOne;
          if (hand.current.length >= 2) return; // players can have two cards max
          hand.current.push(treasureDeck[currentTreasure++]);
          setState((state) => ({ ...state, playerOne: hand }));

          // for player two
        } else if (p === 1) {
          let hand = state.playerTwo;
          if (hand.current.length >= 2) return; // players can have two cards max
          hand.current.push(treasureDeck[currentTreasure++]);
          setState((state) => ({ ...state, playerTwo: hand }));

          // for player three
        } else if (p === 2) {
          let hand = state.playerThree;
          if (hand.current.length >= 2) return; // players can have two cards max
          hand.current.push(treasureDeck[currentTreasure++]);
          setState((state) => ({ ...state, playerThree: hand }));

          // for player four
        } else if (p === 3) {
          let hand = state.playerFour;
          if (hand.current.length >= 2) return; // players can have two cards max
          hand.current.push(treasureDeck[currentTreasure++]);
          setState((state) => ({ ...state, playerFour: hand }));
        }
      }
    }
    // remove used treasure cards from deck
    treasureDeck = treasureDeck.slice(currentTreasure);
    setState((state) => ({ ...state, treasureDeck }));
  };

  const handleNewGame = () => {
    setStartGame(false);
    // to do: reset state to starting values
  };

  return (
    <div>
      {startGame ? (
        <GameRoom handleNewGame={handleNewGame} playersArr={playersArr} />
      ) : (
        <NumPlayers handleSubmit={handleSubmit} />
      )}
    </div>
  );
}
