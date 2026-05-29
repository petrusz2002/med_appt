import React, { useState } from "react";

import FindDoctorSearch from "./FindDoctorSearch/FindDoctorSearch";
import DoctorCard from "./DoctorCard/DoctorCard";

const BookingConsultation = () => {
  const [selectedDoctor, setSelectedDoctor] = useState(null);

  const doctors = [
    {
      name: "Dr. John Smith",
      speciality: "Cardiologist",
      experience: "10 years",
      rating: 4.5,
    },
    {
      name: "Dr. Sarah Lee",
      speciality: "Dermatologist",
      experience: "8 years",
      rating: 4.7,
    },
  ];

  const handleSelectDoctor = (doctor) => {
    setSelectedDoctor(doctor);
  };

  const handleCancel = () => {
    setSelectedDoctor(null);
  };

  return (
    <div className="booking-container">

      <h1>Book a Consultation</h1>

      {/* SEARCH COMPONENT */}
      <FindDoctorSearch />

      {/* DOCTOR LIST */}
      <div className="doctor-list">
        {doctors.map((doctor, index) => (
          <DoctorCard
            key={index}
            doctor={doctor}
            onSelect={handleSelectDoctor}
          />
        ))}
      </div>

      {/* BOOKING STATE */}
      {selectedDoctor && (
        <div className="booking-popup">
          <h2>Selected Doctor</h2>
          <p>{selectedDoctor.name}</p>
          <p>{selectedDoctor.speciality}</p>

          <button onClick={handleCancel}>
            Cancel Selection
          </button>
        </div>
      )}
    </div>
  );
};

export default BookingConsultation;