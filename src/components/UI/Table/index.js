import { useEffect, useState, useReducer } from "react";
import { reducer } from "../../../utils/reducers";
import { data } from "../../../utils/reducers/state";

import classes from "./style.module.css";

const Table = (props) => {
  const [state, dispatch] = useReducer(reducer, data);

  const [sortDueDate, setSortDueDate] = useState("");
  const [sortPriority, setSortPriority] = useState("");

  const handleSortingChange = (accessor) => {
    if (accessor.target.id === "2"){
      sortPriority === "asc" ? setSortPriority("desc") : setSortPriority("asc");
    } 
    if (accessor.target.id === "3"){
      sortDueDate === "asc" ? setSortDueDate("desc") : setSortDueDate("asc");
    }
  };

  //Update state
  useEffect(() => {
    const changePriorityHandler = () => {
      dispatch({
        type: "changeValue",
        field: "sortPriority",
        value: sortPriority,
      });
    };

    const changeDueDateHandler = () => {
      dispatch({
        type: "changeValue",
        field: "sortDueDate",
        value: sortDueDate,
      });
    };

    changeDueDateHandler();
    changePriorityHandler();

  }, [sortDueDate, sortPriority]);

  //Reload table sorted
  useEffect(()=>{
    props.init(state)
  }, [state])

  const headers = props.headers.map((column, index) =>
    column.sortable ? (
      <div
        key={index}
        id={index}
        className={`
            ${classes["col-" + (index + 1)]} 
            ${classes["col-sortable"]} 
            ${classes["col-clickable"]}`}
        onClick={handleSortingChange}
      >
        {column.label}
        <div className={classes["icon-container"]}>
          <i className="gg-chevron-left"></i>
          <i className="gg-chevron-right"></i>
        </div>
      </div>
    ) : (
      <div
        className={`${classes["col-" + (index + 1)]} ${
          classes["col-sortable"]
        }`}
        key={index}
      >
        {column.label}
      </div>
    )
  );

  return (
    <div className={classes["table-container"]}>
      <ul className={classes["table-responsive"]}>
        <li className={classes["table-header"]}>{headers}</li>
        {props.children}
      </ul>
    </div>
  );
};

export default Table;
