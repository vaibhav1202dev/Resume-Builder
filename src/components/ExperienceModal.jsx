import React, { useState } from "react";
import "../styles/experiencemodal.css";

const ExperienceModal = ({ onSave, onClose }) => {
  const [experienceData, setExperienceData] = useState("");

  const handleChange = (e) => {
    setExperienceData(e.target.value);
    setTitle(e.target.value);
  };

  const handleSave = () => {
    onSave(experienceData);
    setExperienceData("");

    onClose();
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close-exp" onClick={onClose}>
          &times;
        </span>
        <h3>Add Experience</h3>
        <div>Title</div>
        <input
          type="text"
          placeholder="Ex:React Developer"
          value={experienceData}
          onChange={handleChange}
        />
        <div>Company Name</div>
        <input type="text" placeholder="Ex: Amazon" />
        <input type="checkbox" />{" "}
        <span>I am currently working in this role</span>
        <div>Strat month Year</div>
        <input type="date" />
        <input
          type="text"
          placeholder="Enter Experience"
          // value={experienceData}
          // onChange={handleChange}
          className="modal-all"
        />
        <button onClick={handleSave}>Save</button>
      </div>
    </div>
  );
};

export default ExperienceModal;
