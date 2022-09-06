import Card from "../../UI/Card";

import classes from "./styles.module.css";

const Metrics = () => {
  return (
    <Card>
      <div className={classes["flex-container"]}>
        <div className={classes["flex-left"]}>Average time to finish tasks</div>
        <div className={classes["flex-right"]}>
          Average time to finish tasks by priority
        </div>
      </div>
    </Card>
  );
};

export default Metrics;
