import Card from "../../UI/Card";
import MetricsItem from "../MetricsItem";

import classes from "./styles.module.css";

const Metrics = () => {
  return (
    <Card>
      <div className={classes["flex-container"]}>
        <div className={classes["flex-left"]}>
          Average time to finish tasks
          <div className={classes["average-container"]}>
            22:05 minutes
          </div>
        </div>
        <div className={classes["flex-right"]}>
          Average time to finish tasks by priority
          <MetricsItem priority={"Low"} time={"22:05"} timeLabel={"min"} />
          <MetricsItem priority={"Medium"} time={"22:05"} timeLabel={"min"} />
          <MetricsItem priority={"High"} time={"22:05"} timeLabel={"min"} />
        </div>
      </div>
    </Card>
  );
};

export default Metrics;
