import React, { useState } from "react";
import "../styles/profile.css";
import EditModal from "./EditModal";
import { FaLocationDot } from "react-icons/fa6";
import { HiOfficeBuilding } from "react-icons/hi";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { BsGlobe } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";

const Profile = () => {
  const [userData, setUserData] = useState({
    name: "Name",
    city: "City, Name",
    yourposition: "Your Position",
    describe: "Describe yourself in one line",
    linkedin: "",
    github: "",
    email: "email",
    number: "number",
  });

  const handleUserDataChange = (newUserData) => {
    setUserData(newUserData);
  };

  return (
    <div>
      <div className="edit-icon">
        <EditModal
          userData={userData}
          onUserDataChange={handleUserDataChange}
        />
      </div>
      <div className="details-section">
        <div className="profile-name ">{userData.name}</div>
        <br />
        <div>
          <span className="city">
            <FaLocationDot />
            {userData.city}
          </span>{" "}
          &nbsp;&nbsp;&nbsp;
          <span className="position">
            <HiOfficeBuilding />
            {userData.yourposition}
          </span>
          <div className="one-line">{userData.describe}</div>
        </div>
      </div>
      <div className="contact">
        <div className="contact-section">
          <span className="contact-1">
            <MdOutlineEmail />
            {userData.email}
          </span>{" "}
          &nbsp;
          <span className="contact-1">
            <FaPhoneAlt />
            {userData.number}
          </span>
        </div>
        <div className="contact-section">
          <span className="social">
            <FaLinkedin />
            Linkedin
          </span>
          <span className="social">
            <FaGithub />
            Github
          </span>
          <span className="social">
            <BsGlobe /> Portfolio
          </span>
        </div>
      </div>
    </div>
  );
};

export default Profile;
