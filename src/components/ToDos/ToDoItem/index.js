import Action from "../../UI/Action";
import classes from "./style.module.css";

const ToDoItem = (props) => {
  const editHandler = () => {
    console.log("Edit item" + props.id);
  };

  const deleteHandler = () => {
    console.log("Delete item" + props.id);
  };

  return (
    <li key={props.id} className={classes["table-row"]}>
      <div className={classes["col-1"]}>{props.done}</div>
      <div className={classes["col-2"]}>{props.name}</div>
      <div className={classes["col-3"]}>{props.priority}</div>
      <div className={classes["col-4"]}>{props.dueDate}</div>
      <div className={`${classes["col-5"]} ${classes["action-hide"]}`}>
        <Action label="Edit" onClick={editHandler} variant="yellow" />
        /
        <Action label="Delete" onClick={deleteHandler} variant="red" />
      </div>
    </li>
  );
};

export default ToDoItem;
