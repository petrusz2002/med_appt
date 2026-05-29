import React, { useState } from "react";
import "./Sign_Up.css";

const Sign_Up = () => {

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
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

    // PHONE VALIDATION (10 digits only)
    const phoneRegex = /^[0-9]{10}$/;

    if (!phoneRegex.test(formData.phone)) {
      alert("Phone number must be exactly 10 digits");
      return;
    }

    alert("Sign Up Successful!");
  };

  return (
    <div className="container">

      <div className="signup-grid">

        <div className="signup-text">
          <h1>Sign Up</h1>
        </div>

        <div className="signup-text1">
          Already a member?
          <a href="/login"> Login</a>
        </div>

        <div className="signup-form">

          <form onSubmit={handleSubmit}>

            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                name="name"
                className="form-control"
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Phone</label>
              <input
                type="tel"
                name="phone"
                className="form-control"
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                name="email"
                className="form-control"
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
                onChange={handleChange}
                required
              />
            </div>

            <div className="btn-group">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>

              <button type="reset" className="btn btn-danger">
                Reset
              </button>
            </div>

          </form>

        </div>

      </div>

    </div>
  );
};

export default Sign_Up;
