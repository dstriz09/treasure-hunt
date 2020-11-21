import React from "react";
import { TREASURES, randomTreasure } from './cards';

export default function App() {
  let treasureCards = TREASURES;
  let card = randomTreasure(treasureCards);
  let grid = card[0].grid;

  return (
    <div className="App">
      <h1>Treasure-Hunt</h1>
      <p>
        {grid.map((item) => (
          <p>{item}</p>
        ))}
      </p>
    </div>
  );
}
