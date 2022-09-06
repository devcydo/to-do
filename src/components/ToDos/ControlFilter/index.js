import Button from "../../UI/Button";
import Card from "../../UI/Card";
import Input from "../../UI/Input";
import Select from "../../UI/Select";

const PRIORITY_OPTIONS = [
  { id: 1, value: "default", label: "All" },
  { id: 2, value: "high", label: "High" },
  { id: 3, value: "medium", label: "Medium" },
  { id: 4, value: "low", label: "Low" },
];

const STATE_OPTIONS = [
  { id: 1, value: "default", label: "All" },
  { id: 2, value: "done", label: "Done" },
  { id: 3, value: "undone", label: "Undone" },
];

const ControlFilter = () => {
  return (
    <Card>
      <Input
        label="Name"
        input={{
          id: "name",
          type: "text",
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
          id: "state",
          type: "select",
        }}
        options={STATE_OPTIONS}
      />
      <Button label="Search" type="button" align="right" />
    </Card>
  );
};

export default ControlFilter;
