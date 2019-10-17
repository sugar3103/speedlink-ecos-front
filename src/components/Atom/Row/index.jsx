import React from "react";
import "./index.scss";
import Modal from "../Modal";

function Row(props) {
  const rowStyle = {
    width: "30px",
    maxWidth: "100px"
  };

  const checkBoxStyle = {
    width: "20px",
    height: "20px",
    backgroundColor: "#2a2a31",
    border: "1px solid #686969"
  };

  // const popupDelete = e => {
  //   alert(`Bạn có thật sự muốn xoá ID = ${props.id} `);
  // };

  return (
    <tr>
      <td className="checkbox-contain">
        <input
          type="checkbox"
          style={checkBoxStyle}
          id={`id${props.id}`}
          name="checkbox"
          onClick={props.click}
        />
        <Modal modalId={props.id} />
      </td>
      {props.columnList.map((ele, index) => (
        <td
          key={index}
          style={rowStyle}
          onClick={() => props.openModal({ modalId: props.id })}
        >
          {props[ele]}
        </td>
      ))}
      <td style={{ width: "100px", padding: "0 0 0 2%" }}>
        {/* <Link to={`/detail/${props.id}`}>
          <button className="row-action_btn row-action_btn-view">
            <span></span>
            <i className="fas fa-eye"></i>
          </button>
        </Link> */}

        <button
          className="row-action_btn row-action_btn-edit"
          onClick={() => props.openModal({ modalId: props.id })}
        >
          <span style={{ background: "#11535e" }}></span>
          <p>
            <i className="far fa-edit"></i>
          </p>
        </button>

        <button
          className="row-action_btn row-action_btn-delete"
          onClick={() => props.openModal({ modalId: props.id })}
        >
          <span style={{ background: "#862734" }}></span>
          <p>
            <i className="far fa-trash-alt"></i>{" "}
          </p>
        </button>
      </td>
    </tr>
  );
}

export default Row;
