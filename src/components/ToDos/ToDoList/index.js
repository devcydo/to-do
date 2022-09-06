import { useContext, useState } from "react";
import { ModalContext } from "../../../context/Modal";

import Button from "../../UI/Button";
import CheckBox from "../../UI/CheckBox";
import Table from "../../UI/Table";
import ToDoItem from "../ToDoItem";
import ToDoItemForm from "../ToDoItemForm";

const TABLE_HEADERS = [
  { key: "select", label: "Select", sortable: false },
  { key: "name", label: "Name", sortable: false },
  { key: "priority", label: "Priority", sortable: true },
  { key: "dueDate", label: "Due date", sortable: true },
  { key: "actions", label: "Actions", sortable: false },
];

//1 High
//2 Medium
//3 Low

const ROWS = [
  {
    id: "T1",
    name: "Task 1",
    priority: "1",
    dueDate: "2022-08-11",
    done: false,
  },
  {
    id: "T2",
    name: "Task 2",
    priority: "3",
    dueDate: "2022-08-10",
    done: false,
  },
  {
    id: "T3",
    name: "Task 3",
    priority: "2",
    dueDate: "2022-08-12",
    done: false,
  },
  {
    id: "T4",
    name: "Task 4",
    priority: "2",
    dueDate: "2022-08-07",
    done: false,
  },
  {
    id: "T5",
    name: "Task 5",
    priority: "1",
    dueDate: "2022-08-12",
    done: false,
  },
  {
    id: "T6",
    name: "Task 6",
    priority: "3",
    dueDate: "2022-08-12",
    done: false,
  },
];

const ToDoList = () => {
  const { handleModal } = useContext(ModalContext);

  const [tableData, setTableData] = useState(ROWS);

  const clickHandler = () => {
    handleModal(<ToDoItemForm />);
  };

  return (
    <>
      <Button
        label="+ New To Do"
        type="button"
        align="left"
        onClick={clickHandler}
      />
      <Table headers={TABLE_HEADERS}>
        {tableData.map((column) => (
          <ToDoItem
            id={column.id}
            name={column.name}
            priority={column.priority}
            dueDate={column.dueDate}
            done={<CheckBox />}
          />
        ))}
      </Table>
    </>
  );
};

export default ToDoList;
