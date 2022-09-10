import { getDaysFromMinutes, getHoursFromMinutes } from "../../../utils/functions/TimeDifference";
import classes from "./styles.module.css";

const MetricsItem = (props) => {

  let time = props.time;
  let timeLabel = "m"

  if(props.time > 1440){
    time = getDaysFromMinutes(props.time);
    timeLabel = "d"
  }
  else if (props.time > 60) {
    time = getHoursFromMinutes(props.time);
    timeLabel = "h"
  }

  return (
    <div className={classes.container}>
      <div className={classes.title}>{props.priority}:&nbsp;</div>
      <div>
        {time} {timeLabel}
      </div>
    </div>
  );
};

export default MetricsItem;
