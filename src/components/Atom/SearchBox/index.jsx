import React from "react";
import "./index.scss";

function SearchBox(props) {
  return (
    <>
      <label style={{ float: "left" }}>{props.title} </label>
      <br></br>
      <input
        className="searchBox-input-search"
        type="search"
        name="search[]"
        autoComplete="off"
        onChange={props.onInputChange}
        list={props.sublistId}
        placeholder={props.placeholder}
      />
      <div className="searchBox-option">
        <datalist id={props.sublistId}>
          {props.sublistArray.map((ele, index) => (
            <option key={index}>{ele}</option>
          ))}
        </datalist>
      </div>
    </>
  );
}

export default SearchBox;
