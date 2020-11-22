import React, { useContext } from "react";
import { CardContext } from "./CardContext";
import { EXPEDITIONS } from "./cards";

export default function Expedition() {
  const [state, setState] = useContext(CardContext);

  function handleRoundChange() {
    const randomExpedition = EXPEDITIONS[Math.floor(Math.random() * EXPEDITIONS.length)];
    setState(state => ({ ...state, currentExpedition: randomExpedition }));
    if (state.currentRound < 7) {
      setState(state => ({ ...state, currentRound: state.currentRound + 1 }));;
    } else {
      setState(state => ({ ...state, currentRound: 1 }));;
    }
  }

  return (
    <div>
      <div>
        <div>
          Expedition card #{state.currentRound}/7
        </div>
        Current expedition card: <b>{state.currentExpedition.name}</b>
        {state.currentExpedition.rawShape.map((item,i) => (
          <div key={i}>{item}</div>
        ))}
      </div>
      <button onClick={() => handleRoundChange()}>Next expedition card</button>
    </div>
  )
}