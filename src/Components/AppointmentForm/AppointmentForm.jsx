import React, { useState } from "react";
import "./AppointmentForm.css";

const AppointmentForm = ({ doctorName, onClose }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !phone || !date || !time) {
      alert("Please fill all fields");
      return;
    }

    alert(
      `Appointment booked with ${doctorName}\nName: ${name}\nPhone: ${phone}\nDate: ${date}\nTime: ${time}`
    );

    setName("");
    setPhone("");
    setDate("");
    setTime("");

    if (onClose) onClose();
  };

  return (
    <div className="appointment-form-container">

      <h2>Book Appointment</h2>
      <h4>Doctor: {doctorName}</h4>

      <form onSubmit={handleSubmit}>

        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Phone Number</label>
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Date</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Time</label>
          <input
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            required
          />
        </div>

        <button type="submit">Confirm Appointment</button>

      </form>

    </div>
  );
};

export default AppointmentForm;