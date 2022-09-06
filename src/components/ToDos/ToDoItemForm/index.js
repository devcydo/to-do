import Button from "../../UI/Button";
import Input from "../../UI/Input";
import Modal from "../../UI/Modal";

const ToDoItemForm = (props) => {
  return (
    <Modal onClose={props.onClose}>
      <form>
        <Input
          label="Name"
          input={{
            id: "name",
            type: "text",
          }}
        />
        
        <Button label="Add" type="submit" />
      </form>
    </Modal>
  );
};

export default ToDoItemForm;
