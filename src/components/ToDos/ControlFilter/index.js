import Button from "../../UI/Button";
import Card from "../../UI/Card";
import Input from "../../UI/Input";
import Select from "../../UI/Select";

const PRIORITY_OPTIONS = [
  { id: 1, value: "default", label: "All" },
  { id: 2, value: "1", label: "High" },
  { id: 3, value: "2", label: "Medium" },
  { id: 4, value: "3", label: "Low" },
];

const STATE_OPTIONS = [
  { id: 1, value: "default", label: "All" },
  { id: 2, value: true, label: "Done" },
  { id: 3, value: false, label: "Undone" },
];

const ControlFilter = (props) => {
  const { Init } = props;

  const submitHandler = async (event) => {
    event.preventDefault();

    try {

      //Build params
      let params = "";

      if (event.target.name.value !== "")
        params += `name=${event.target.name.value}`;
      
      if (event.target.priority.value !== "default") {
        params += params !== "" ? `&` : ``;
        params += `priority=${event.target.priority.value}`;
      }

      if (event.target.isDone.value !== "default") {
        params += params !== "" ? `&` : ``;
        params += `isDone=${event.target.isDone.value}`;
      }

      Init(params);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Card>
      <form onSubmit={submitHandler}>
        <Input
          label="Name"
          input={{
            id: "name",
            type: "text",
            placeholder: "Enter name",
            maxLength: "120",
          }}
        />
        <Select
          label="Priority"
          input={{
            id: "priority",
            type: "select",
          }}
          options={PRIORITY_OPTIONS}
        />
        <Select
          label="State"
          input={{
            id: "isDone",
            type: "select",
          }}
          options={STATE_OPTIONS}
        />
        <Button label="Search" type="submit" align="right" />
      </form>
    </Card>
  );
};

export default ControlFilter;
