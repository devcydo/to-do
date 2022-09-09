import classes from "./styles.module.css";

const NoData = (props) => {
  return (
    <div className={classes.container}>
      {props.message}
    </div>
  )
}

export default NoData;