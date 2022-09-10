import { useEffect, useState, useReducer } from "react";
import { reducer } from "../../../utils/reducers";
import { data } from "../../../utils/reducers/state";

import classes from "./style.module.css";

const Table = (props) => {
  const [state, dispatch] = useReducer(reducer, data);

  const [sortDueDate, setSortDueDate] = useState("");
  const [sortPriority, setSortPriority] = useState("");
  const [dueIcon, setDueIcon] = useState(
    <div className={classes["icon-container"]}>
      <i className="gg-chevron-left"></i>
      <i className="gg-chevron-right"></i>
    </div>
  );
  const [priorityIcon, setPriorityIcon] = useState(
    <div className={classes["icon-container"]}>
      <i className="gg-chevron-left"></i>
      <i className="gg-chevron-right"></i>
    </div>
  );

  const handleSortingChange = (accessor) => {
    if (accessor.target.id === "2") {
      if (sortPriority === "asc") {
        setSortPriority("desc");
        setPriorityIcon(<i className="gg-chevron-up"></i>);
      } else {
        setSortPriority("asc");
        setPriorityIcon(<i className="gg-chevron-down"></i>);
      }
    }
    if (accessor.target.id === "3") {
      if (sortDueDate === "asc") {
        setSortDueDate("desc");
        setDueIcon(<i className="gg-chevron-down"></i>);
      } else {
        setSortDueDate("asc");
        setDueIcon(<i className="gg-chevron-up"></i>);
      }
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
  useEffect(() => {
    props.init(state);
  }, [state]);

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
        {index === 2 ? priorityIcon : dueIcon}
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
