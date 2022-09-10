import Card from "../../UI/Card";
import MetricsItem from "../MetricsItem";

import classes from "./styles.module.css";

import { getDaysFromMinutes, getDifferenceInMinutes, getHoursFromMinutes } from "../../../utils/functions/TimeDifference";

const Metrics = (props) => {
  const { tableData } = props;

  //Amount of time
  let timeHigh = [];
  let timeMedium = [];
  let timeLow = [];

  //Populate arrays
  for (let i = 0; i < tableData.length; i++) {
    if (tableData[i].isDone) {
      let t = 0;

      let oldDate = new Date(tableData[i].createdAt);
      let newDate = new Date(tableData[i].doneAt);

      t = getDifferenceInMinutes(oldDate, newDate);

      if (tableData[i].priority === 1) timeHigh.push(t);
      else if (tableData[i].priority === 2) timeMedium.push(t);
      else timeLow.push(t);
    }
  }

  //Average of each priority
  let averageItems = 0;
  let high =
    timeHigh.length > 0
      ? parseInt(timeHigh.reduce((a, b) => a + b) / timeHigh.length)
      : 0;
  let medium =
    timeMedium.length > 0
      ? parseInt(timeMedium.reduce((a, b) => a + b) / timeMedium.length)
      : 0;
  let low =
    timeLow.length > 0
      ? parseInt(timeLow.reduce((a, b) => a + b) / timeLow.length)
      : 0;

  //Average (general)
  averageItems += high !== 0 ? 1 : 0;
  averageItems += medium !== 0 ? 1 : 0;
  averageItems += low !== 0 ? 1 : 0;
  
  let average = (high + medium + low) / averageItems;
  let timeLabel = "m";

  if (average > 1440) {
    average = getDaysFromMinutes(average);
    timeLabel = "d";
  } else if (average > 60) {
    average = getHoursFromMinutes(average);
    timeLabel = "h";
  }

  return (
    <Card>
      <div className={classes["flex-container"]}>
        <div className={classes["flex-left"]}>
          Average time to finish tasks
          <div className={classes["average-container"]}>
            {parseInt(average)} {timeLabel}
          </div>
        </div>
        <div className={classes["flex-right"]}>
          Average time to finish tasks by priority
          <MetricsItem priority={"Low"} time={low} />
          <MetricsItem priority={"Medium"} time={medium} />
          <MetricsItem priority={"High"} time={high} />
        </div>
      </div>
    </Card>
  );
};

export default Metrics;
