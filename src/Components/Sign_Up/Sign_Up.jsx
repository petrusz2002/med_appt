import React, { useState } from "react";
import "./Sign_Up.css";
import { useNavigate } from "react-router-dom";
import { API_URL } from "../../../config";

const Sign_Up = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [showerr, setShowerr] = useState("");

  const navigate = useNavigate();

  const register = async (e) => {
    e.preventDefault();

    const response = await fetch(`${API_URL}/api/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        password,
        phone,
      }),
    });

    const json = await response.json();

    if (json.authtoken) {
      sessionStorage.setItem("auth-token", json.authtoken);
      sessionStorage.setItem("name", name);
      sessionStorage.setItem("phone", phone);
      sessionStorage.setItem("email", email);

      navigate("/");
      window.location.reload();
    } else {
      if (json.errors) {
        setShowerr(json.errors[0].msg);
      } else {
        setShowerr(json.error || "Registration failed");
      }
    }
  };

  return (
    <div className="container" style={{ marginTop: "5%" }}>
      <div className="signup-grid">
        <div className="signup-form">

          <form onSubmit={register}>

            {/* NAME */}
            <div className="form-group">
              <label>Name</label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                className="form-control"
                placeholder="Enter your name"
              />
            </div>

            {/* EMAIL */}
            <div className="form-group">
              <label>Email</label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                className="form-control"
                placeholder="Enter your email"
              />
            </div>

            {/* PHONE */}
            <div className="form-group">
              <label>Phone</label>
              <input
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                type="tel"
                className="form-control"
                placeholder="Enter your phone"
              />
            </div>

            {/* PASSWORD */}
            <div className="form-group">
              <label>Password</label>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                className="form-control"
                placeholder="Enter your password"
              />
            </div>

            {/* ERROR */}
            {showerr && (
              <div style={{ color: "red", marginBottom: "10px" }}>
                {showerr}
              </div>
            )}

            {/* SUBMIT */}
            <button type="submit" className="btn btn-primary">
              Sign Up
            </button>

          </form>

        </div>
      </div>
    </div>
  );
};

export default Sign_Up;