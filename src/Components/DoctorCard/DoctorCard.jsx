import React from "react";
import "./DoctorCard.css";

const DoctorCard = ({ name, experience, rating, specialty, image }) => {
  return (
    <div className="doctor-card">

      <div className="doctor-card-img">
        <img
          src={image || "https://via.placeholder.com/150"}
          alt="doctor"
        />
      </div>

      <div className="doctor-card-details-container">

        <h2>{name}</h2>

        <p><strong>Speciality:</strong> {specialty}</p>

        <p><strong>Experience:</strong> {experience} years</p>

        <p><strong>Rating:</strong> ⭐ {rating}</p>

        <div>
          <button className="book-appointment-btn">
            <div>Book Appointment</div>
            <div>No Booking Fee</div>
          </button>
        </div>

      </div>

    </div>
  );
};

export default DoctorCard;