import React from "react";
import "../styles/preview.css";
import Profileimg from "../images/profile.jpg";

const Preview = () => {
  return (
    <div>
      <div className="preview-container">
        <div>
          <button className="download-btn">Download</button>
        </div>
        <div className="sections">
          <div className="left-section">
            <div className="inside-left">
              <div>
                <img src={Profileimg} alt="Profile" className="profile-imgs" />
              </div>
              <div>Your Name</div>
              <div>Describe Yourself in one Line </div>
              <div>Your Position</div>
              <div>City, Name</div>
            </div>
          </div>
          <div>
            <div className="right-section">
              <div>About</div>
              <div>Experieance</div>
              <div>Education</div>
              <div>Skill</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preview;
