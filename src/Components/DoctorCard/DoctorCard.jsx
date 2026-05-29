import React, { useState } from "react";
import "./DoctorCard.css";
import AppointmentForm from "../AppointmentForm/AppointmentForm";

const DoctorCard = ({ name, experience, rating, specialty, image }) => {
  const [showForm, setShowForm] = useState(false);
  const [appointmentBooked, setAppointmentBooked] = useState(false);

  const handleBook = () => {
    setShowForm(true);
  };

  const handleCancel = () => {
    setAppointmentBooked(false);
    alert("Appointment cancelled successfully");
  };

  const handleFormSubmit = () => {
    setAppointmentBooked(true);
    setShowForm(false);
    alert("Appointment booked successfully");
  };

  return (
    <div className="doctor-card">

      <img src={image} alt="doctor" />

      <div className="doctor-card-details-container">

        <h2>{name}</h2>
        <p><b>Specialty:</b> {specialty}</p>
        <p><b>Experience:</b> {experience} years</p>
        <p>⭐ {rating}</p>

        {!appointmentBooked ? (
          <button
            className="book-appointment-btn"
            onClick={handleBook}
          >
            <div>Book Appointment</div>
            <div>No Booking Fee</div>
          </button>
        ) : (
          <button
            className="cancel-appointment-btn"
            onClick={handleCancel}
          >
            Cancel Appointment
          </button>
        )}

        {showForm && (
          <AppointmentForm
            doctorName={name}
            onClose={() => setShowForm(false)}
            onSubmit={handleFormSubmit}
          />
        )}

      </div>

    </div>
  );
};

export default DoctorCard;