import React from "react";

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
