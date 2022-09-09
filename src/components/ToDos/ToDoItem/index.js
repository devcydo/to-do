import { useContext, useState } from "react";

import { ModalContext } from "../../../context/Modal";

import Action from "../../UI/Action";
import CheckBox from "../../UI/CheckBox";
import ToDoItemDelete from "../ToDoItemDelete";
import ToDoItemEdit from "../ToDoItemEdit";
import classes from "./style.module.css";

const ToDoItem = (props) => {
  const { id, isDone, name, priority, dueDate = "-" } = props;

  const { handleModal } = useContext(ModalContext);
  const [done, setDone] = useState(isDone);

  const setDoneHandler = async () => {
    try {
      let response = await fetch(
        process.env.REACT_APP_API_URL + "todos/" + id + "/done",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status !== 200) {
        throw new Error("Error");
      }

      setDone(!done);
    } catch (error) {
      console.log(error);
    }
  };

  const setUndoneHandler = async () => {
    try {
      let response = await fetch(
        process.env.REACT_APP_API_URL + "todos/" + id + "/undone",
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status !== 200) {
        throw new Error("Error");
      }

      setDone(!done);
    } catch (error) {
      console.log(error);
    }
  };

  const editHandler = () => {
    handleModal(
      <ToDoItemEdit
        id={id}
        name={name}
        priority={priority}
        dueDate={dueDate != null ? dueDate : ""}
        init={props.init}
      />
    );
  };

  const deleteHandler = () => {
    handleModal(<ToDoItemDelete id={id} init={props.init} />);
  };

  //Is to do done?
  let checkBox = <CheckBox onChange={setDoneHandler} checked={done} />;
  if (done) {
    checkBox = <CheckBox onChange={setUndoneHandler} checked={done} />;
  }

  return (
    <li key={props.id} className={`${classes["table-row"]} ${classes["row-"]}`}>
      <div className={classes["col-1"]}>{checkBox}</div>
      <div className={classes["col-2"]}>{name}</div>
      <div className={classes["col-3"]}>{priority}</div>
      <div className={classes["col-4"]}>{dueDate ? dueDate : "-"}</div>
      <div className={`${classes["col-5"]} ${classes["action-hide"]}`}>
        <Action label="Edit" onClick={editHandler} variant="yellow" />
        /
        <Action label="Delete" onClick={deleteHandler} variant="red" />
      </div>
    </li>
  );
};

export default ToDoItem;
