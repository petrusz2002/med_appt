import React, { useState } from "react";
import "./DoctorCard.css";
import AppointmentForm from "../AppointmentForm/AppointmentForm";

const DoctorCard = ({ name, experience, rating, specialty, image }) => {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="doctor-card">

      <img src={image} alt="doctor" />

      <div className="doctor-card-details-container">

        <h2>{name}</h2>
        <p>{specialty}</p>
        <p>{experience} years experience</p>
        <p>⭐ {rating}</p>

        <button
          className="book-appointment-btn"
          onClick={() => setShowForm(true)}
        >
          <div>Book Appointment</div>
          <div>No Booking Fee</div>
        </button>

        {showForm && (
          <AppointmentForm
            doctorName={name}
            onClose={() => setShowForm(false)}
          />
        )}

      </div>

    </div>
  );
};

export default DoctorCard;