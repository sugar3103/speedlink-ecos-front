import React from "react";
import "./index.scss"

function Modal(props) {
  const closeModal = value => {
    var modal = document.getElementById(props.modalId);
    modal.style.display = "none";
  };

  return (
    <div id={props.modalId} className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <p className="modal-title">View Status</p>
          <span
            className="closeModal"
            // @ts-ignore
            onClick={() => closeModal()}
          >
            &times;
          </span>
        </div>
        <div className="modal-body">
          <p>{props.title}</p>
          <p>the Modal opened with ID : {props.modalId}</p>
        </div>
      </div>
    </div>
  );
}

export default Modal;
