import React, { useState } from "react";

const AppointmentFormIC = () => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // ✅ 10-digit validation (REQUIRED)
    if (!/^[0-9]{10}$/.test(phoneNumber)) {
      alert("Phone number must be exactly 10 digits");
      return;
    }

    alert(`Booking confirmed for ${name}`);

    setName("");
    setPhoneNumber("");
  };

  return (
    <form onSubmit={handleSubmit} className="appointment-form">

      {/* NAME */}
      <div className="form-group">
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>

      {/* PHONE */}
      <div className="form-group">
        <label>Phone Number:</label>
        <input
          type="tel"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          required
        />
      </div>

      <button type="submit">
        Book Now
      </button>

    </form>
  );
};

export default AppointmentFormIC;