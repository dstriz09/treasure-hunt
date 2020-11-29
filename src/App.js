import React from "react";
import MultiSelect from "./MultiSelect";
import CardContextProvider from "./CardContext";

export default function App() {
  return (
    <div className="App">
      <CardContextProvider>
        <h1>Treasure-Hunt</h1>
        <MultiSelect />
      </CardContextProvider>
    </div>
  );
}
