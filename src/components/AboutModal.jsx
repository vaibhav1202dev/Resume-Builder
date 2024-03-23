import React, { useState } from "react";
import "../styles/aboutmodal.css";

const AboutModal = ({ onSave, onClose }) => {
  const [aboutData, setAboutData] = useState("");

  const handleChange = (e) => {
    setAboutData(e.target.value);
  };

  const handleSave = () => {
    onSave(aboutData);
    setAboutData("");
    onClose();
  };

  return (
    <div className="modal-abt">
      <div className="modal-content-abt">
        <span className="close-abt" onClick={onClose}>
          &times;
        </span>
        <h3>Add About</h3>
        <input
          type="text"
          placeholder="Enter About"
          value={aboutData}
          onChange={handleChange}
          className="modal-all-abt"
        />
        <button onClick={handleSave} className="save-abt-btn">
          Save
        </button>
      </div>
    </div>
  );
};

export default AboutModal;
