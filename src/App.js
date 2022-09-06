import React, { useState } from "react";

import { ModalProvider } from "./context/Modal";

import ControlFilter from "./components/ToDos/ControlFilter";
import Metrics from "./components/ToDos/Metrics";
import ToDoList from "./components/ToDos/ToDoList";

import "./App.css";

function App() {
  return (
    <div className="App">
      <ModalProvider>
        <ControlFilter />
        <ToDoList />
        <Metrics />
      </ModalProvider>
    </div>
  );
}

export default App;
