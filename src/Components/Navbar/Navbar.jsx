import React, { useState } from "react";
import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {

  const [userEmail, setUserEmail] = useState(localStorage.getItem("user") || "");
  const navigate = useNavigate();

  // email -> name extraction
  const username = userEmail ? userEmail.split("@")[0] : "";

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUserEmail("");
    navigate("/login");
  };

  return (
    <nav>

      {/* LOGO */}
      <div className="nav__logo">
        <Link to="/">StayHealthy <span>.</span></Link>
      </div>

      {/* LINKS */}
      <ul className="nav__links">

        <li className="link">
          <Link to="/">Home</Link>
        </li>

        <li className="link">
          <Link to="/appointments">Appointments</Link>
        </li>

        <li className="link">
          <Link to="/signup">Sign Up</Link>
        </li>

        <li className="link">
          <Link to="/login">Login</Link>
        </li>

      </ul>

      {/* USER INFO + LOGOUT */}
      <div className="nav__user">

        {userEmail && (
          <>
            <span className="username">
              👤 {username}
            </span>

            <button className="btn1" onClick={handleLogout}>
              Logout
            </button>
          </>
        )}

      </div>

    </nav>
  );
};

export default Navbar;
