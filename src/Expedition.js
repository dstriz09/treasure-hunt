import React, { useContext } from "react";
import { CardContext, NewExpeditionDeck } from "./CardContext";

export default function Expedition() {
  const [state, setState] = useContext(CardContext);

  function handleRoundChange() {
    if (state.currentRound < 7) {
      setState(state => ({ ...state, currentRound: state.currentRound + 1 }));
    } else {
      // generate new expedition deck and reset round to 1
      setState(state => ({ ...state, currentRound: 1, expeditionDeck: NewExpeditionDeck() }));
    }
  }

  return (
    <div>
      <div>
        <div>
          Expedition card #{state.currentRound}/7
        </div>
        Current expedition card: <b>{state.expeditionDeck[state.currentRound].name}</b>
        {state.expeditionDeck[state.currentRound].rawShape.map((item,i) => (
          <div key={i}>{item}</div>
        ))}
      </div>
      <button onClick={() => handleRoundChange()}>Next expedition card</button>
    </div>
  )
}