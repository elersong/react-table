import "./InputModal.css";
import React from "react";

export default function InputModal({ show, hide }) {
  if (!show) return null;
  return (
    <div className="modal" id="myModal">
      <div className="modal-content">
        <h2>Modal Window</h2>
        <div className="content">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis
          deserunt corrupti, ut fugit magni qui quasi nisi amet repellendus non
          fuga omnis a sed impedit explicabo accusantium nihil doloremque
          consequuntur.
        </div>
        <div className="actions">
          <button onClick={hide} className="toggle-button">
            OK
          </button>
        </div>
      </div>
    </div>
  );
}
