import React, { useState } from "react";
import { useUserContext } from "../contexts/UserContext";

const EditProfile = () => {
  const { user, updateUser } = useUserContext();
  const [name, setName] = useState(user.name || "");
  const [avatarURL, setAvatarURL] = useState(user.avatarURL || "");

  const handleSubmit = (e) => {
    e.preventDefault();
    updateUser({ name, avatarURL }); // Update data pengguna
    alert("Profile updated successfully!");
  };

  return (
    <div className="edit-profile">
      <h2>Edit Profile</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="avatarURL">Avatar URL</label>
          <input
            type="text"
            id="avatarURL"
            value={avatarURL}
            onChange={(e) => setAvatarURL(e.target.value)}
          />
        </div>
        <button type="submit" className="btn-save">
          Save
        </button>
      </form>
    </div>
  );
};

export default EditProfile;
