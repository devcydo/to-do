import { useState } from "react";
import classes from "./style.module.css";

const Select = (props) => {
  const { optionSelected } = props;

  const [value, setValue] = useState(optionSelected);

  const onChangeHandler = (event) => {
    setValue(event.target.value);
  }

  const options = props.options.map((option) =>
      <option key={option.id} value={option.value}>
        {option.label}
      </option>
  );

  return (
    <div className={classes.select}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <select {...props.input} value={value} onChange={onChangeHandler}>
        {options}
      </select>
    </div>
  );
};

export default Select;
