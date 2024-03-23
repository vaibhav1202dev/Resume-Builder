import React, { useState } from "react";
import "../styles/heropage.css";
import { FiPlusCircle } from "react-icons/fi";
import AboutModal from "./AboutModal";
import ExperienceModal from "./ExperienceModal";
import EducationModal from "./EducationModal";
import SkillModal from "./SkillModal";
import { Link } from "react-router-dom";

const HeroPage = () => {
  const [showAboutModal, setShowAboutModal] = useState(false);
  const [showExperienceModal, setShowExperienceModal] = useState(false);
  const [showEducationModal, setShowEducationModal] = useState(false);
  const [showSkillModal, setShowSkillModal] = useState(false);

  const [aboutData, setAboutData] = useState("");
  const [experienceData, setExperienceData] = useState("");
  const [educationData, setEducationData] = useState("");
  const [skillData, setSkillData] = useState("");

  const handleOpenModal = (modalName) => {
    switch (modalName) {
      case "about":
        setShowAboutModal(true);
        break;
      case "experience":
        setShowExperienceModal(true);
        break;
      case "education":
        setShowEducationModal(true);
        break;
      case "skill":
        setShowSkillModal(true);
        break;
      default:
        break;
    }
  };

  const handleCloseModal = (modalName) => {
    switch (modalName) {
      case "about":
        setShowAboutModal(false);
        break;
      case "experience":
        setShowExperienceModal(false);
        break;
      case "education":
        setShowEducationModal(false);
        break;
      case "skill":
        setShowSkillModal(false);
        break;
      default:
        break;
    }
  };

  const handleSaveData = (modalName, data) => {
    switch (modalName) {
      case "about":
        setAboutData(data);
        break;
      case "experience":
        setExperienceData(data);
        break;
      case "education":
        setEducationData(data);
        break;
      case "skill":
        setSkillData(data);
        break;
      default:
        break;
    }
    handleCloseModal(modalName);
  };

  return (
    <>
      <div>
        <div className="hero-container">
          <div>
            <span
              className="title-text"
              onClick={() => handleOpenModal("about")}
            >
              About
            </span>
            <span className="plus-icon-1">
              <FiPlusCircle />
            </span>
            {aboutData && <div className="saved-data">{aboutData}</div>}
            {showAboutModal && (
              <AboutModal
                onSave={(data) => handleSaveData("about", data)}
                onClose={() => handleCloseModal("about")}
              />
            )}
          </div>
          <div>
            <span
              className="title-text"
              onClick={() => handleOpenModal("experience")}
            >
              Experience
            </span>
            <span className="plus-icon-2">
              <FiPlusCircle />
            </span>
            {experienceData && (
              <div className="saved-data">{experienceData}</div>
            )}
            {showExperienceModal && (
              <ExperienceModal
                onSave={(data) => handleSaveData("experience", data)}
                onClose={() => handleCloseModal("experience")}
              />
            )}
          </div>
          <div>
            <span
              className="title-text"
              onClick={() => handleOpenModal("education")}
            >
              Education
            </span>
            <span className="plus-icon-3">
              <FiPlusCircle />
            </span>
            {educationData && <div className="saved-data">{educationData}</div>}
            {showEducationModal && (
              <EducationModal
                onSave={(data) => handleSaveData("education", data)}
                onClose={() => handleCloseModal("education")}
              />
            )}
          </div>
          <div>
            <span
              className="title-text"
              onClick={() => handleOpenModal("skill")}
            >
              Skill
            </span>
            <span className="plus-icon-4">
              <FiPlusCircle />
            </span>
            {skillData && <div className="saved-data">{skillData}</div>}
            {showSkillModal && (
              <SkillModal
                onSave={(data) => handleSaveData("skill", data)}
                onClose={() => handleCloseModal("skill")}
              />
            )}
          </div>
        </div>
        <Link to="resume">
          {" "}
          <button className="preview-button">Preview</button>{" "}
        </Link>
      </div>
    </>
  );
};

export default HeroPage;
