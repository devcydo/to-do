import React, { useReducer, useState } from "react";

import { ModalProvider } from "./context/Modal";

import ControlFilter from "./components/ToDos/ControlFilter";
import Metrics from "./components/ToDos/Metrics";
import ToDoList from "./components/ToDos/ToDoList";

import "./App.css";
import { buildParams } from "./utils/functions/Params";

function App() {
  const [tableData, setTableData] = useState([]);

  async function Init(state) {
    let params = "";
    if(state) params= buildParams(state)
    console.log(params);

    try {
      let response = await fetch(
        process.env.REACT_APP_API_URL + "todos?" + params,
        {
          method: "GET",
        }
      );
      let data = await response.json();
      setTableData(data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="App">
      <ModalProvider>
        <ControlFilter Init={Init}/>
        <ToDoList Init={Init} tableData={tableData}/>
        <Metrics tableData={tableData} />
      </ModalProvider>
    </div>
  );
}

export default App;
