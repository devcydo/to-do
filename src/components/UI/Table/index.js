import classes from "./style.module.css";

const Table = (props) => {
  const headers = props.headers.map((column, index) =>
    column.sortable ? (
      <div
        key={index}
        className={`
            ${classes["col-" + (index + 1)]} 
            ${classes["col-sortable"]} 
            ${classes["col-clickable"]}`}
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
        <li className={classes["table-header"]}>
          {headers}
        </li>
        {props.children}
      </ul>
    </div>
  );
};

export default Table;
