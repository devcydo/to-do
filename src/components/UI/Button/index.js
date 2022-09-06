import classes from "./style.module.css";

const Button = (props) => {

  return (
    <div className={ `${classes['button-container']} ${classes['button-'+props.align]}` }>
      <button
        onClick={props.onClick}
        type={props.type}
        className={classes.button}
      >
        {props.label}
      </button>
    </div>
  );
};

export default Button;
