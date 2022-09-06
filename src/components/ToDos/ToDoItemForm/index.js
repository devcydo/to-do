import Button from "../../UI/Button";
import Input from "../../UI/Input";

const ToDoItemForm = () => {
  return (
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
  );
};

export default ToDoItemForm;
