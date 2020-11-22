import React, { useState } from "react";
import { EXPEDITIONS } from "./cards";

// Create the context. Empty function allows us to call setState
export const CardContext = React.createContext([{}, () => {}]);

const CardContextProvider = (props) => {
  const randomExpedition = EXPEDITIONS[Math.floor(Math.random() * EXPEDITIONS.length)];

  const [state, setState] = useState({
    currentExpedition: randomExpedition,
    currentRound: 1,
  });
  return (
    <CardContext.Provider value={[state, setState]}>
      {props.children}
    </CardContext.Provider>
  )
};

export default CardContextProvider;
