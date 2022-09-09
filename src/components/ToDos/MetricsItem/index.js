import classes from "./styles.module.css";

const MetricsItem = (props) => {
  return (
    <div className={classes.container}>
      <div className={classes.title}>{props.priority}:&nbsp;</div>
      <div>
        {props.time} {props.timeLabel}
      </div>
    </div>
  );
};

export default MetricsItem;
