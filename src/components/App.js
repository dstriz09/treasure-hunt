import React from "react";
import GameSetup from "./GameSetup";

import CardContextProvider from "./CardContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App() {
  return (
    <div className="App">
      <CardContextProvider>
        <h1>Treasure-Hunt</h1>
        <GameSetup />
        <ToastContainer />
      </CardContextProvider>
    </div>
  );
}
