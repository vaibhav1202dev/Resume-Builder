import React, { useState } from "react";
import "../styles/skillmodal.css";
const SkillModal = ({ onSave, onClose }) => {
  const [skillData, setSkillData] = useState("");
  const [skills, setSkills] = useState([]);

  const handleChange = (e) => {
    setSkillData(e.target.value);
  };

  const handleAddSkill = () => {
    if (skillData.trim() !== "") {
      setSkills([...skills, skillData]);
      setSkillData("");
    }
  };

  const handleSave = () => {
    onSave(skills.join(", "));
    onClose();
  };

  return (
    <div className="modal-skill">
      <div className="modal-content">
        <span className="close-skill" onClick={onClose}>
          &times;
        </span>
        <h3>Add Skill</h3>
        <input
          type="text"
          placeholder="Enter Skill"
          value={skillData}
          onChange={handleChange}
          className="input-skill"
        />
        <button onClick={handleAddSkill} className="add-btn">
          Add
        </button>{" "}
        <div className="skills-list">
          {skills.map((skill, index) => (
            <div key={index}>{skill}</div>
          ))}
        </div>
        <button onClick={handleSave}>Save</button>
      </div>
    </div>
  );
};

export default SkillModal;
