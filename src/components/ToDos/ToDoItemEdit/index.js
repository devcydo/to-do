import { useContext, useEffect, useState } from "react";

import { ModalContext } from "../../../context/Modal";

import Button from "../../UI/Button";
import Input from "../../UI/Input";
import Select from "../../UI/Select";

const PRIORITY_OPTIONS = [
  { id: 1, value: "1", label: "High" },
  { id: 2, value: "2", label: "Medium" },
  { id: 3, value: "3", label: "Low" },
];

const ToDoItemEdit = (props) => {
  const { handleModal } = useContext(ModalContext);

  //Handle form and values
  const submitHandler = async (event) => {
    event.preventDefault();

    try {
      let toDo = {
        id: props.id,
        name: event.target.name.value,
        dueDate: event.target.dueDate.value,
        priority: event.target.priority.value,
      };

      let response = await fetch(
        process.env.REACT_APP_API_URL + "todos/" + props.id,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(toDo),
        }
      );

      if (response.status === 200) {
        handleModal();
        props.init();
      }
    } catch (error) {
      console.log(error);
    }
  };

  //Validations (not letting the user select an old date)
  const getTodayDate = () => {
    let d = new Date();

    let month = (d.getMonth() + 1).toString();
    let day = d.getDate().toString();
    let year = d.getFullYear();

    if (month.length < 2) {
      month = "0" + month;
    }
    if (day.length < 2) {
      day = "0" + day;
    }

    return [year, month, day].join("-").toString();
  };

  return (
    <form onSubmit={submitHandler}>
      <Input
        label="Name"
        value={props.name}
        input={{
          id: "name",
          placeholder: "Enter name",
          type: "text",
          maxLength: "120",
          required: true,
        }}
      />

      <Input
        label="Due to"
        value={props.dueDate}
        input={{
          id: "dueDate",
          placeholder: "Enter due date",
          type: "date",
          min: getTodayDate(),
        }}
      />

      <Select
        label="Priority"
        optionSelected={props.priority}
        input={{
          id: "priority",
          type: "select",
        }}
        options={PRIORITY_OPTIONS}
      />

      <Button label="Edit" type="submit" align="center" />
    </form>
  );
};

export default ToDoItemEdit;
