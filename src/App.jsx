import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar/Navbar";
import Landing_Page from "./Components/Landing_Page/Landing_Page";
import Sign_Up from "./Components/Sign_Up/Sign_Up";
import Login from "./Components/Login/Login";

function App() {
  return (
    <BrowserRouter>

      {/* Navbar minden oldalon látszik */}
      <Navbar />

      <Routes>

        {/* HOME */}
        <Route path="/" element={<Landing_Page />} />

        {/* SIGN UP */}
        <Route path="/signup" element={<Sign_Up />} />

        {/* LOGIN */}
        <Route path="/login" element={<Login />} />

      </Routes>

    </BrowserRouter>
  );
}

export default App;