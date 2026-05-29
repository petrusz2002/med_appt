import React, { useState } from "react";
import "./Login.css";

const Login = () => {

  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Email validation
    if (!formData.email.includes("@")) {
      alert("Invalid email format");
      return;
    }

    // Password validation
    if (formData.password.length < 6) {
      alert("Password must be at least 6 characters");
      return;
    }

    alert("Login successful!");
  };

  return (
    <div className="container">

      <div className="login-grid">

        <div className="login-text">
          <h2>Login</h2>
        </div>

        <div className="login-text">
          Are you a new member?
          <a href="/signup" style={{ color: "#2190FF" }}>
            {" "}Sign Up Here
          </a>
        </div>

        <div className="login-form">

          <form onSubmit={handleSubmit}>

            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                name="email"
                className="form-control"
                placeholder="Enter your email"
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                name="password"
                className="form-control"
                placeholder="Enter your password"
                onChange={handleChange}
                required
              />
            </div>

            <div className="btn-group">
              <button type="submit" className="btn btn-primary">
                Login
              </button>

              <button type="reset" className="btn btn-danger">
                Reset
              </button>
            </div>

            <div className="login-text">
              Forgot Password?
            </div>

          </form>

        </div>

      </div>

    </div>
  );
};

export default Login;
