import { useState } from "react";
import classes from "./style.module.css";

const Input = (props) => {
  const { value = "" } = props;
  const [input, setInput] = useState(value);

  const inputHandler = (event) => {
    setInput(event.target.value);
  };

  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input key={props.input.id} {...props.input} onChange={inputHandler} value={input} />
      {props.input.maxLength && (
        <label className={classes["character-counter"]}>
          {input.length} / {props.input.maxLength}
        </label>
      )}
    </div>
  );
};

export default Input;
