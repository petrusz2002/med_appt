import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const [userEmail, setUserEmail] = useState("");
  const [openProfile, setOpenProfile] = useState(false);

  useEffect(() => {
    const email = sessionStorage.getItem("email");
    setUserEmail(email || "");
  }, []);

  const username = userEmail ? userEmail.split("@")[0] : "";

  const handleLogout = () => {
    sessionStorage.clear();
    setUserEmail("");
    navigate("/login");
  };

  return (
    <nav>
      <div className="nav__logo">
        <Link to="/">StayHealthy <span>.</span></Link>
      </div>

      <ul className="nav__links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/instant-consultation">Instant Consultation</Link></li>

        {!userEmail && (
          <>
            <li><Link to="/signup">Sign Up</Link></li>
            <li><Link to="/login">Login</Link></li>
          </>
        )}
      </ul>

      {/* USER SECTION */}
      {userEmail && (
        <div className="nav__user">

          {/* ICON (clickable) */}
          <span
            className="profile-icon"
            onClick={() => setOpenProfile(!openProfile)}
            style={{ cursor: "pointer" }}
          >
            👤 {username}
          </span>

          <button className="btn1" onClick={handleLogout}>
            Logout
          </button>

          {/* DROPDOWN */}
          {openProfile && (
            <div className="profile-dropdown">
              <Link to="/profile" onClick={() => setOpenProfile(false)}>
                View Profile
              </Link>
            </div>
          )}

        </div>
      )}
    </nav>
  );
};

export default Navbar;