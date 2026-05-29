import React, { useState } from "react";

const GiveReviews = () => {
  const [showForm, setShowForm] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    review: "",
    rating: 0,
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleRating = (value) => {
    setFormData({ ...formData, rating: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.review || formData.rating === 0) {
      alert("Fill all fields");
      return;
    }

    setSubmitted(true);
    setShowForm(false);
  };

  return (
    <div>
      {!showForm ? (
        <button onClick={() => setShowForm(true)} disabled={submitted}>
          {submitted ? "Already Submitted" : "Give Feedback"}
        </button>
      ) : (
        <form onSubmit={handleSubmit}>
          <input
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
          />

          <textarea
            name="review"
            placeholder="Review"
            value={formData.review}
            onChange={handleChange}
          />

          <div>
            {[1, 2, 3, 4, 5].map((n) => (
              <span
                key={n}
                onClick={() => handleRating(n)}
                style={{
                  cursor: "pointer",
                  color: n <= formData.rating ? "gold" : "gray",
                  fontSize: "20px",
                }}
              >
                ★
              </span>
            ))}
          </div>

          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
};

export default GiveReviews;