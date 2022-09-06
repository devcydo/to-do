import classes from "./style.module.css";

const Select = (props) => {
  const options = props.options.map((option) =>
      <option key={option.id} value={option.value}>
        {option.label}
      </option>
  );

  return (
    <div className={classes.select}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <select {...props.input} defaultValue="default">
        {options}
      </select>
    </div>
  );
};

export default Select;
