import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";

const Notification = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");

  const [doctorData, setDoctorData] = useState(null);
  const [appointmentData, setAppointmentData] = useState(null);

  // NEW: notification visibility state
  const [showNotification, setShowNotification] = useState(true);

  useEffect(() => {
    const storedUsername = sessionStorage.getItem("email");
    const storedDoctorData = JSON.parse(localStorage.getItem("doctorData"));

    const storedAppointmentData = JSON.parse(
      localStorage.getItem(storedDoctorData?.name)
    );

    if (storedUsername) {
      setIsLoggedIn(true);
      setUsername(storedUsername);
    }

    if (storedDoctorData) {
      setDoctorData(storedDoctorData);
    }

    if (storedAppointmentData) {
      setAppointmentData(storedAppointmentData);
    }
  }, []);

  // NEW: listen for cancel action (polling localStorage change idea)
  useEffect(() => {
    const interval = setInterval(() => {
      const storedDoctorData = JSON.parse(localStorage.getItem("doctorData"));
      const storedAppointmentData = JSON.parse(
        localStorage.getItem(storedDoctorData?.name)
      );

      // if appointment removed → hide notification
      if (!storedAppointmentData) {
        setShowNotification(false);
      } else {
        setAppointmentData(storedAppointmentData);
        setShowNotification(true);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <Navbar />
      {children}

      {/* NOTIFICATION */}
      {isLoggedIn && appointmentData && showNotification && (
        <div className="appointment-card">
          <div className="appointment-card__content">
            <h3>Appointment Notification</h3>

            <p>
              <strong>Doctor:</strong> {doctorData?.name}
            </p>

            <p>
              <strong>Patient:</strong> {username?.split("@")[0]}
            </p>

            <p>
              <strong>Date:</strong> {appointmentData?.date}
            </p>

            <p>
              <strong>Time:</strong> {appointmentData?.time}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Notification;