import { useState } from "react";
import classes from "./style.module.css";

const Input = (props) => {
  const [input, setInput] = useState("");

  const inputHandler = (event) => {
    setInput(event.target.value);
  };

  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input {...props.input} onChange={inputHandler} value={input} />
      {props.input.maxLength && (
        <label className={classes["character-counter"]}>
          {input.length} / {props.input.maxLength}
        </label>
      )}
    </div>
  );
};

export default Input;
