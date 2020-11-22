import React from "react";
import Board from "./Board";
import Expedition from "./Expedition"
import CardContextProvider from "./CardContext"

export default function App() {
  
  return (
    <div className="App">
      <CardContextProvider>
        <h1>Treasure-Hunt</h1>
        <Expedition />
        <Board />
      </CardContextProvider>
    </div>
  );
}
