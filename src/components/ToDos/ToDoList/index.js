import CheckBox from "../../UI/CheckBox";
import Table from "../../UI/Table";
import ToDoItem from "../ToDoItem";

const TABLE_HEADERS = [
  { label: "Select", orderable: false },
  { label: "Name", orderable: false },
  { label: "Priority", orderable: true },
  { label: "Due date", orderable: true },
  { label: "Actions", orderable: false },
];

const ROWS = [
  { id: "T1", name: "Task 1", priority: "High", dueDate: "2022-08-12", done: false },
  { id: "T2", name: "Task 2", priority: "Low", dueDate: "2022-08-12", done: false },
  { id: "T3", name: "Task 3", priority: "Medium", dueDate: "2022-08-12", done: false },
  { id: "T4", name: "Task 4", priority: "Medium", dueDate: "2022-08-12", done: false },
  { id: "T5", name: "Task 5", priority: "High", dueDate: "2022-08-12", done: false },
  { id: "T6", name: "Task 6", priority: "Low", dueDate: "2022-08-12", done: false },
];

const ToDoList = () => {
  const rows = ROWS.map((column) => (
    <ToDoItem
      id={column.id}
      name={column.name}
      priority={column.priority}
      dueDate={column.dueDate}
      done={
        <CheckBox 
        />
      }
    />
  ));

  return (
    <Table headers={TABLE_HEADERS}>
      {rows}
    </Table>
  );
};

export default ToDoList;
