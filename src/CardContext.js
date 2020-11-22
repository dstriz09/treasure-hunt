import React, { useState } from "react";
import { EXPEDITIONS } from "./cards";

// Create the context. Empty function allows us to call setState
export const CardContext = React.createContext([{}, () => {}]);

export const newExpeditionDeck = () => {
  let shuffled = EXPEDITIONS
  .map((a) => ({sort: Math.random(), value: a}))
  .sort((a, b) => a.sort - b.sort)
  .map((a) => a.value)
  return shuffled;
}

const CardContextProvider = (props) => {
  const [state, setState] = useState({
    expeditionDeck: newExpeditionDeck(),
    currentRound: 1,
  });
  
  return (
    <CardContext.Provider value={[state, setState]}>
      {props.children}
    </CardContext.Provider>
  )
};

export default CardContextProvider;
