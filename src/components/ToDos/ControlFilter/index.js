import { useReducer } from "react";

import Button from "../../UI/Button";
import Card from "../../UI/Card";
import Input from "../../UI/Input";
import Select from "../../UI/Select";

import { reducer } from "../../../utils/reducers";
import { data } from "../../../utils/reducers/state";

const PRIORITY_OPTIONS = [
  { id: 1, value: "default", label: "All" },
  { id: 2, value: "1", label: "High" },
  { id: 3, value: "2", label: "Medium" },
  { id: 4, value: "3", label: "Low" },
];

const STATE_OPTIONS = [
  { id: 1, value: "default", label: "All" },
  { id: 2, value: true, label: "Done" },
  { id: 3, value: false, label: "Undone" },
];

const ControlFilter = (props) => {
  const { Init } = props;

  //Update values for filtering data
  const [state, dispatch] = useReducer(reducer, data);
  const changeInputHandler = (event) => {
    dispatch({
      type: "changeValue",
      field: "name",
      value: event.target.value,
    });
  };

  const changeSelectPriorityHandler = (event) => {
    dispatch({
      type: "changeValue",
      field: "priority",
      value: event.target.value,
    });
  };

  const changeSelectStateHandler = (event) => {
    dispatch({
      type: "changeValue",
      field: "isDone",
      value: event.target.value,
    });
  };

  //Button submit
  const submitHandler = (event) => {
    event.preventDefault();
    Init(state);
  };

  return (
    <Card>
      <form onSubmit={submitHandler}>
        <Input
          label="Name"
          onChange={changeInputHandler}
          input={{
            id: "name",
            type: "text",
            placeholder: "Enter name",
            maxLength: "120",
          }}
        />
        <Select
          label="Priority"
          onChange={changeSelectPriorityHandler}
          input={{
            id: "priority",
            type: "select",
          }}
          options={PRIORITY_OPTIONS}
        />
        <Select
          label="State"
          onChange={changeSelectStateHandler}
          input={{
            id: "isDone",
            type: "select",
          }}
          options={STATE_OPTIONS}
        />
        <Button label="Search" type="submit" align="right" />
      </form>
    </Card>
  );
};

export default ControlFilter;
