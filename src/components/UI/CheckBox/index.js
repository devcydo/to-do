import React, { useState } from "react";

import classes from "./style.module.css";

const CheckBox = () => {
  const [isChecked, setIsChecked] = useState(false);

  const checkHandler = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div>
      <input
        type="checkbox"
        id="checkbox"
        checked={isChecked}
        onChange={checkHandler}
      />
    </div>
  );
};

export default CheckBox;
