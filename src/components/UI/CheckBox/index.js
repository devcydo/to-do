import React from "react";

import classes from "./style.module.css";

const CheckBox = (props) => {
  return (
    <div>
      <input
        type="checkbox"
        id="checkbox"
        checked={props.checked}
        onChange={props.onChange}
      />
    </div>
  );
};

export default CheckBox;
