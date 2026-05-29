import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  // user email storage
  const [userEmail, setUserEmail] = useState("");

  // load user from storage on refresh
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUserEmail(storedUser);
    }
  }, []);

  // extract username from email
  const username = userEmail ? userEmail.split("@")[0] : "";

  // logout function
  const handleLogout = () => {
    localStorage.removeItem("user");
    setUserEmail("");
    navigate("/login");
  };

  return (
    <nav>

      {/* LOGO */}
      <div className="nav__logo">
        <Link to="/">
          StayHealthy <span>.</span>
        </Link>
      </div>

      {/* NAV LINKS */}
      <ul className="nav__links">

        <li className="link">
          <Link to="/">Home</Link>
        </li>

        <li className="link">
          <Link to="/appointments">Appointments</Link>
        </li>

        <li className="link">
          <Link to="/instant-consultation">
            Instant Consultation
          </Link>
        </li>

        {!userEmail && (
          <>
            <li className="link">
              <Link to="/signup">Sign Up</Link>
            </li>

            <li className="link">
              <Link to="/login">Login</Link>
            </li>
          </>
        )}

      </ul>

      {/* USER SECTION */}
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