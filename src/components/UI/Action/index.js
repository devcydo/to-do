import classes from "./style.module.css";

const Action = (props) => {
  return (
    <button
      onClick={props.onClick}
      type="button"
      className={`${classes.action} ${classes["action-"+props.variant]}`}
    >
      {props.label}
    </button>
  );
};

export default Action;
