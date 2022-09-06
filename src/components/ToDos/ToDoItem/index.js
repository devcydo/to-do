import { useContext } from "react";

import { ModalContext } from "../../../context/Modal";

import Action from "../../UI/Action";
import classes from "./style.module.css";

const ToDoItem = (props) => {
  const { id, done, name, priority, dueDate } = props;

  const { handleModal } = useContext(ModalContext);

  const editHandler = () => {
    console.log("Edit item" + id);
  };

  const deleteHandler = () => {
    handleModal("Delete Item" + id);
  };

  return (
    <li key={props.id} className={`${classes["table-row"]} ${classes['row-']}`}>
      <div className={classes["col-1"]}>{done}</div>
      <div className={classes["col-2"]}>{name}</div>
      <div className={classes["col-3"]}>{priority}</div>
      <div className={classes["col-4"]}>{dueDate}</div>
      <div className={`${classes["col-5"]} ${classes["action-hide"]}`}>
        <Action label="Edit" onClick={editHandler} variant="yellow" />
        /
        <Action label="Delete" onClick={deleteHandler} variant="red" />
      </div>
    </li>
  );
};

export default ToDoItem;
