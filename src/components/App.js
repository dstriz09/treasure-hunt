import React from "react";
import MultiSelect from "./MultiSelect";
import CardContextProvider from "./CardContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App() {
  return (
    <div className="App">
      <CardContextProvider>
        <h1>Treasure-Hunt</h1>
        <MultiSelect />
        <ToastContainer />
      </CardContextProvider>
    </div>
  );
}
