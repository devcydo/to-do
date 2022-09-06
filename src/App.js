import React, { useState } from "react";

import Button from "./components/UI/Button";
import ControlFilter from "./components/ToDos/ControlFilter";
import ToDoList from "./components/ToDos/ToDoList";
import ToDoItemForm from "./components/ToDos/ToDoItemForm";

import "./App.css";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModalHandler = () => {
    setIsModalOpen(true);
  };

  const hideModalHandler = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="App">
      {isModalOpen && <ToDoItemForm onClose={hideModalHandler} />}
      <ControlFilter />
      <Button
        label="+ New To Do"
        type="button"
        align="left"
        onClick={showModalHandler}
      />
      <main>
        <ToDoList/>
      </main>
    </div>
  );
}

export default App;
