import React from "react";

function OptionSelect(props) {
  const styling = {
    customSelect: {
      background: "#232329",
      color: "white",
      verticalAlign: "middle",
      fontSize: "15px"
    }
  };
  return (
    <span>
      <select style={styling.customSelect} onChange={props.onChange}>
        {props.arrayOption.map(ele => (
          <option key={ele} style={styling.customSelect} value={ele}>
            {ele}
          </option>
        ))}
      </select>
    </span>
  );
}

export default OptionSelect;
