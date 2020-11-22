import React from "react";
import Board from "./Board";
import Expedition from "./Expedition"
import { EXPEDITIONS } from "./cards";

export default function App() {

  // Pick expedition card
  // const randomExpedition = EXPEDITIONS[Math.floor(Math.random() * EXPEDITIONS.length)];

  const randomEx = () => EXPEDITIONS[Math.floor(Math.random() * EXPEDITIONS.length)];
  
  return (
    <div className="App">
      <h1>Treasure-Hunt</h1>
      <Expedition ex={randomEx}/>
      <br /><br />
      <Board />
    </div>
  );
}
