import classes from "./style.module.css";

const Table = (props) => {
  const headers = props.headers.map(
    (column, index) =>
      column.sortable ? (
        <div
          className={`
            ${classes["col-" + (index + 1)]} 
            ${classes["col-sortable"]} 
            ${classes["col-clickable"]}`}
          key={column.key}
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
        >
          {column.label}
        </div>
      )
    // <div
    //   className={`${classes["col-" + (index + 1)]} ${classes["col-sortable"]}`}
    //   key={column.key}
    //   onClick={column.sortable ? () => sortingChangeHandler(column.key) : null}
    // >
    //   {column.label}
    //   {column.sortable && (
    //     <div className={classes["icon-container"]}>
    //       <i className="gg-chevron-left"></i>
    //       <i className="gg-chevron-right"></i>
    //     </div>
    //   )}
    // </div>
  );

  return (
    <div className={classes["table-container"]}>
      <ul className={classes["table-responsive"]}>
        <li key="headers" className={classes["table-header"]}>
          {headers}
        </li>
        {props.children}
      </ul>
    </div>
  );
};

export default Table;
