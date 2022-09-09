import { useContext } from "react";
import { ModalContext } from "../../../context/Modal";
import Action from "../../UI/Action";

import classes from "./styles.module.css";

const ToDoItemDelete = (props) => {
  const { handleModal } = useContext(ModalContext)

  const deleteHandler = async () => {
    try {
      let response = await fetch(
        process.env.REACT_APP_API_URL + "todos/" + props.id,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        handleModal();
        props.init();
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      Are you sure you want to delete this item?
      <div className={`${classes["col-5"]} ${classes["action-hide"]}`}>
        <Action label="Cancel" onClick={()=>handleModal()} variant="yellow" />
        /
        <Action label="Delete" onClick={deleteHandler} variant="red" />
      </div>
    </div>
  );
}

export default ToDoItemDelete;