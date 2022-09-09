import { useContext, useEffect, useState } from "react";
import { ModalContext } from "../../../context/Modal";

import Button from "../../UI/Button";
import CheckBox from "../../UI/CheckBox";
import NoData from "../../UI/NoData";
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

const ToDoList = () => {
  const { handleModal } = useContext(ModalContext);

  const [tableData, setTableData] = useState([]);

  //Get to dos from API
  async function Init() {
    try {
      let response = await fetch(process.env.REACT_APP_API_URL + "todos", {
        method: "GET",
      });
      let data = await response.json();
      setTableData(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    Init();
  }, []);

  //Open modal "new to do"
  const clickHandler = () => {
    handleModal(<ToDoItemForm init={Init} />);
  };

  //Conditional rendering for the component
  let tableDataContent = <NoData message="No records found" />;
  if (tableData.length > 0) {
    tableDataContent = tableData.map((column) => (
      <ToDoItem
        key={column.id}
        id={column.id}
        name={column.name}
        priority={column.priority}
        dueDate={column.dueDate}
        isDone={column.isDone}
        init={Init}
      />
    ));
  }

  return (
    <>
      <Button
        label="+ New To Do"
        type="button"
        align="left"
        onClick={clickHandler}
      />
      <Table id={0} headers={TABLE_HEADERS}>
        {tableDataContent}
      </Table>
    </>
  );
};

export default ToDoList;
