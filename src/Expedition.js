import React, { useState } from "react";
import { EXPEDITIONS } from "./cards";

export default function Expedition() {

  const randomExpedition =
    EXPEDITIONS[Math.floor(Math.random() * EXPEDITIONS.length)];
  const [expeditionCard, setExpeditionCard] = useState(randomExpedition);
  const [expeditionRound, setExpeditionRound] = useState(1);

  function handleRoundChange() {
    setExpeditionCard(randomExpedition);
    if (expeditionRound < 7) {
      setExpeditionRound(round => round + 1);
    } else {
      setExpeditionRound(1);
    }
  }

  return (
    <div>
      <div>
        <div>
          Expedition card #{expeditionRound}/7
        </div>
        Current expedition card: <b>{expeditionCard.name}</b>
        {expeditionCard.rawShape.map((item,i) => (
          <div key={i}>{item}</div>
        ))}
      </div>
      <button onClick={() => handleRoundChange()}>Next expedition card</button>
    </div>
  )
}