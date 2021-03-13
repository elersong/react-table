import "./InputModal.css";
import React, { useState } from "react";

export default function InputModal({ show, hide, headers, saveToParent }) {
  const defaultFormDataAsEntries = headers.map((header) => [header, ""]);
  const [formData, setFormData] = useState(
    Object.fromEntries(defaultFormDataAsEntries)
  );
  //console.log(formData)

  const handleInputChange = (e) => {
    let changedFormData = { ...formData };
    changedFormData[e.target.name] = e.target.value;
    setFormData(() => changedFormData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    saveToParent(formData);
    setFormData(() => defaultFormDataAsEntries);
    hide();
  };

  const fields = headers.map((title) => {
    return (
      <React.Fragment>
        <label htmlFor={title}>{title}</label>
        <input
          style={{ display: "block" }}
          type="text"
          id={title}
          name={title}
          onChange={handleInputChange}
          value={formData[title]}
          required
        ></input>
      </React.Fragment>
    );
  });

  if (!show) return null;
  return (
    <div className="modal" id="myModal">
      <div className="modal-content">
        <h2>Create New Record</h2>
        <form id="newRecordForm" onSubmit={handleSubmit}>
          {fields}
          <button style={{ backgroundColor: "lightgreen" }} type="submit">
            Create
          </button>
        </form>
        <div className="actions">
          <button
            style={{ backgroundColor: "red" }}
            onClick={hide}
            className="toggle-button"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
