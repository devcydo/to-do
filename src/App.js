import React, { useState } from "react";

import { ModalProvider } from "./context/Modal";

import ControlFilter from "./components/ToDos/ControlFilter";
import Metrics from "./components/ToDos/Metrics";
import ToDoList from "./components/ToDos/ToDoList";

import "./App.css";

function App() {
  const [tableData, setTableData] = useState([]);

  async function Init(params = "") {
    try {
      let response = await fetch(process.env.REACT_APP_API_URL + "todos?" + params, {
        method: "GET",
      });
      let data = await response.json();
      setTableData(data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="App">
      <ModalProvider>
        <ControlFilter Init={Init} />
        <ToDoList Init={Init} tableData={tableData} />
        <Metrics />
      </ModalProvider>
    </div>
  );
}

export default App;
