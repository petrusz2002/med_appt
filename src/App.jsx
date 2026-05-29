import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar/Navbar";
import Landing_Page from "./Components/Landing_Page/Landing_Page";
import Sign_Up from "./Components/Sign_Up/Sign_Up";
import Login from "./Components/Login/Login";

import InstantConsultation from "./Components/InstantConsultationBooking/InstantConsultation";
import FindDoctorSearch from "./Components/FindDoctorSearch/FindDoctorSearch";
import BookingConsultation from "./Components/BookingConsultation";
import Notification from "./Components/Notification/Notification";
import ReviewForm from "./Components/ReviewForm/ReviewForm";
import ProfileCard from "./Components/ProfileCard/ProfileCard";

function App() {
  return (
    <div className="App">
      <BrowserRouter>

        {/* NAVBAR minden oldalon */}
        <Navbar />

        {/* NOTIFICATION minden oldalon */}
        <Notification>

          <Routes>
            <Route path="/" element={<Landing_Page />} />
            <Route path="/signup" element={<Sign_Up />} />
            <Route path="/login" element={<Login />} />
            <Route path="/reviews" element={<ReviewForm />} />
            <Route path="/find-doctor" element={<FindDoctorSearch />} />
            <Route path="/profile" element={<ProfileCard />} />
            <Route
              path="/instant-consultation"
              element={<InstantConsultation />}
            />

            <Route
              path="/booking-consultation"
              element={<BookingConsultation />}
            />
          </Routes>

        </Notification>

      </BrowserRouter>
    </div>
  );
}

export default App;