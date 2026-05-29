import React from "react";
import GiveReviews from "./GiveReviews";

const ReviewFormApp = () => {
  const doctor = {
    name: "Dr. Smith",
    speciality: "Cardiologist",
  };

  const appointment = {
    date: "2026-05-30",
    time: "10:30",
  };

  return (
    <div>
      <h2>Review Appointment</h2>

      <p>
        Doctor: {doctor.name} ({doctor.speciality})
      </p>

      <p>
        Appointment: {appointment.date} at {appointment.time}
      </p>

      <GiveReviews />
    </div>
  );
};

export default ReviewFormApp;