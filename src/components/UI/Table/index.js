import classes from "./style.module.css";

const Table = (props) => {
  const headers = props.headers.map((column, index) => (
    <div className={`${classes['col-'+(index+1)]}`}>{column.label}</div>
  ))

  return(
    <div className={classes['table-container']}>
      <ul className={classes['table-responsive']}>
        <li key="headers" className={classes['table-header']}>
          {headers}
        </li>
        {props.children}
      </ul>
    </div>
  )
}

export default Table;