import React, { useState } from "react";
import { EXPEDITIONS, TREASURES } from "./cards";

// Create the context. Empty function allows us to call setState
export const CardContext = React.createContext([{}, () => {}]);

export const NewExpeditionDeck = () => {
  return shuffle(EXPEDITIONS);
};

export const NewTreasureDeck = () => {
  return shuffle(TREASURES);
};

const shuffle = (deck) => {
  return deck
    .map((a) => ({ sort: Math.random(), value: a }))
    .sort((a, b) => a.sort - b.sort)
    .map((a) => a.value);
};

const score = function () {
  let score = {
    score: 0,
    completedCards: 0,
  };
  if (this.complete.length === 0) return score;

  this.complete.forEach((card, i) => {
    score.score += card.value;
    score.completedCards += 1;
  });
  return score;
};

const CardContextProvider = (props) => {
  const [state, setState] = useState({
    expeditionDeck: NewExpeditionDeck(),
    treasureDeck: NewTreasureDeck(),
    currentRound: 1, // seven rounds per phase
    currentPhase: 1, // four phases per game
    numPlayers: null,
    playerOne: { current: [], complete: [], score, },
    playerTwo: { current: [], complete: [], score, },
    playerThree: { current: [], complete: [], score, },
    playerFour: { current: [], complete: [], score, },
    roundSubmits: [0, 0, 0, 0],
    coins: [0, 0, 0, 0],
    coinBonus: [1, 2, 3, 4, 5, 6],
  });

  return (
    <CardContext.Provider value={[state, setState]}>
      {props.children}
    </CardContext.Provider>
  );
};

export default CardContextProvider;
