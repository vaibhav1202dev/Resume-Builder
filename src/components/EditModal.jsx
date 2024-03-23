import React, { useState } from "react";
import "../styles/editmodal.css";
import { HiPencil } from "react-icons/hi";

const EditModal = ({ userData, onUserDataChange }) => {
  const [showModal, setShowModal] = useState(false);
  const [newUserData, setNewUserData] = useState(userData);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewUserData((prevUserData) => ({
      ...prevUserData,
      [name]: value,
    }));
  };

  const handleSave = () => {
    onUserDataChange(newUserData);
    setShowModal(false);
  };

  return (
    <div>
      <div className="edit-button" onClick={handleOpenModal}>
        <HiPencil />
      </div>

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close-btn" onClick={handleCloseModal}>
              &times;
            </span>
            <h3>Profile Details</h3>
            <input
              className="input-box"
              type="text"
              name="name"
              placeholder="Name"
              value={newUserData.name}
              onChange={handleChange}
            />
            <input
              className="input-box"
              type="text"
              name="city"
              placeholder="City"
              value={newUserData.city}
              onChange={handleChange}
            />
            <input
              className="input-box"
              type="text"
              name="yourposition"
              placeholder="Your position"
              value={newUserData.yourposition}
              onChange={handleChange}
            />
            <input
              className="input-box"
              type="text"
              name="describe"
              placeholder="Describe"
              value={newUserData.describe}
              onChange={handleChange}
            />
            <input
              className="input-box"
              type="text"
              name="linkedin"
              placeholder="linkedin"
              value={newUserData.linkedin}
              onChange={handleChange}
            />
            <input
              className="input-box"
              type="text"
              name="github"
              placeholder="github"
              value={newUserData.github}
              onChange={handleChange}
            />
            <input
              className="input-box"
              type="text"
              name="portfolio"
              placeholder="portfolio"
              value={newUserData.portfolio}
              onChange={handleChange}
            />
            <input
              className="input-box"
              type="text"
              name="email"
              placeholder="email"
              value={newUserData.email}
              onChange={handleChange}
            />
            <input
              className="input-box"
              type="text"
              name="number"
              placeholder="number"
              value={newUserData.number}
              onChange={handleChange}
            />

            <button onClick={handleSave}>Save</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default EditModal;
