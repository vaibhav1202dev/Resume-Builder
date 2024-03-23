import React, { useState } from "react";
import "../styles/modal.css";

const EducationModal = ({ onSave, onClose }) => {
  const [educationData, setEducationData] = useState("");

  const handleChange = (e) => {
    setEducationData(e.target.value);
  };

  const handleSave = () => {
    onSave(educationData);
    setEducationData("");
    onClose();
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <h3>Add Education</h3>
        <div>School / College</div>
        <input type="text" placeholder="Ex: Goverment Engineering Collage" />
        <div>Degree</div>
        <input type="text" placeholder="Ex: Bachelor of Engineering" />
        <div>Field of Study</div>
        <input type="text" placeholder="Ex: Computer Engineering" />
        <div>Start Year</div>
        <input type="date" />
        <div>End Year</div>
        <input type="date" />
        <div>Grade</div>
        <input type="text" placeholder="Ex: 8.5/10 CGPA" />

        <input
          type="text"
          placeholder="Enter Education"
          value={educationData}
          onChange={handleChange}
          className="modal-all"
        />
        <button onClick={handleSave}>Save</button>
      </div>
    </div>
  );
};

export default EducationModal;
