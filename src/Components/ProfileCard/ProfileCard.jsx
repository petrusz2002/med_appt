import React, { useEffect, useState } from "react";
import { API_URL } from "../../config";
import { useNavigate } from "react-router-dom";
import "./ProfileCard.css";

const ProfileCard = () => {
  const [userDetails, setUserDetails] = useState({});
  const [updatedDetails, setUpdatedDetails] = useState({});
  const [editMode, setEditMode] = useState(false);

  const navigate = useNavigate();

  // LOAD USER ON MOUNT
  useEffect(() => {
    const token = sessionStorage.getItem("auth-token");

    if (!token) {
      navigate("/login");
    } else {
      fetchUserProfile();
    }
  }, []);

  // FETCH USER FROM BACKEND
  const fetchUserProfile = async () => {
    try {
      const token = sessionStorage.getItem("auth-token");
      const email = sessionStorage.getItem("email");

      const res = await fetch(`${API_URL}/api/auth/user`, {
        headers: {
          Authorization: `Bearer ${token}`,
          Email: email,
        },
      });

      if (res.ok) {
        const data = await res.json();
        setUserDetails(data);
        setUpdatedDetails(data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  // EDIT MODE
  const handleEdit = () => {
    setEditMode(true);
  };

  // INPUT CHANGE
  const handleInputChange = (e) => {
    setUpdatedDetails({
      ...updatedDetails,
      [e.target.name]: e.target.value,
    });
  };

  // SAVE PROFILE
  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = sessionStorage.getItem("auth-token");
    const email = sessionStorage.getItem("email");

    const res = await fetch(`${API_URL}/api/auth/user`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
        Email: email,
      },
      body: JSON.stringify(updatedDetails),
    });

    if (res.ok) {
      sessionStorage.setItem("name", updatedDetails.name);
      sessionStorage.setItem("phone", updatedDetails.phone);

      setUserDetails(updatedDetails);
      setEditMode(false);

      alert("Profile Updated Successfully!");
    }
  };

  return (
    <div className="profile-container">

      {editMode ? (
        <form onSubmit={handleSubmit}>

          <label>
            Name
            <input
              type="text"
              name="name"
              value={updatedDetails.name || ""}
              onChange={handleInputChange}
            />
          </label>

          <label>
            Phone
            <input
              type="text"
              name="phone"
              value={updatedDetails.phone || ""}
              onChange={handleInputChange}
            />
          </label>

          <label>
            Email
            <input
              type="email"
              name="email"
              value={updatedDetails.email || ""}
              disabled
            />
          </label>

          <button type="submit">Save</button>

        </form>
      ) : (
        <div className="profile-details">

          <h2>Welcome, {userDetails.name}</h2>

          <p><b>Email:</b> {userDetails.email}</p>
          <p><b>Phone:</b> {userDetails.phone}</p>

          <button onClick={handleEdit}>Edit</button>

        </div>
      )}

    </div>
  );
};

export default ProfileCard;