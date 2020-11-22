import React from "react";
import Board from "./Board";
import Expedition from "./Expedition"

export default function App() {
  return (
    <div className="App">
      <h1>Treasure-Hunt</h1>
      <Expedition />
      <br /><br />
      <Board />
    </div>
  );
}
