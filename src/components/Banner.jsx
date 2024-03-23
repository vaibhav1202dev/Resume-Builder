import React, { useState } from "react";
import "../styles/banner.css";
import Image1 from "../images/background.jpg";
import Image2 from "../images/profile.jpg";

const Banner = () => {
  const [profileImage, setProfileImage] = useState(Image2);

  const handleImageChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      const imageUrl = URL.createObjectURL(selectedFile);
      setProfileImage(imageUrl);
    }
  };

  return (
    <div className="banner-image">
      <img src={Image1} alt="Banner-Image" className="banner-img" />
      <label htmlFor="profile-image-input">
        <img src={profileImage} alt="Profile-Image" className="profile-img" />
        <input
          id="profile-image-input"
          type="file"
          accept="image/*" // Allow only image files
          style={{ display: "none" }} // Hide the input element
          onChange={handleImageChange} // Handle file selection
        />
      </label>
    </div>
  );
};

export default Banner;
