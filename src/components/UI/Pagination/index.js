import classes from "./styles.module.css";

const Pagination = (props) => {
  const { current = 1, totalItems, perPage, onChange } = props;

  //Get total number of pages needed
  const getTotalPages = () => {
    return Math.ceil(totalItems / perPage);
  };

  const total = getTotalPages();

  let links = [];
  for (let i = 1; i <= total; i++) {
    links.push(
      <li
        onClick={() => direct(i)}
        key={i}
        className={current === i ? classes.active : ""}
      >
        {i}
      </li>
    );
  }

  const next = () => {
    const { perPage, current, onChange } = props;
    const total = getTotalPages();

    if (current < total) {
      const start = current * perPage;
      const end = (current + 1) * perPage;
      onChange && onChange({ start, end, current: current + 1 });
    }
  };

  const prev = () => {
    const total = getTotalPages();

    if (current > 1 && current <= total) {
      const start = (current - 2) * perPage;
      const end = (current - 1) * perPage;
      onChange && onChange({ start, end, current: current - 1 });
    }
  };

  const direct = (i) => {
    if (current !== i) {
      const start = (i - 1) * perPage;
      const end = i * perPage;
      onChange && onChange({ start, end, current: i });
    }
  };

  return (
    <ul className={classes.wrapper}>
      <li onClick={prev}>&lt;</li>
      {links}
      <li onClick={next}>&gt;</li>
    </ul>
  );
};

export default Pagination;
