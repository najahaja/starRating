import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [totalStars, setTotalStars] = useState(5); // Default to 5 stars
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(null);

  const handleChange = (event) => {
    setTotalStars(Number(event.target.value));
  };

  return (
    <div className="app">
      <h1>Star Rating</h1>
      <div className="stars-container">
        {[...Array(totalStars)].map((star, index) => {
          const currentRating = index + 1;

          return (
            <label key={index} className="star-label">
              <input
                type="radio"
                name="rating"
                value={currentRating}
                onChange={() => setRating(currentRating)}
                style={{ display: "none" }}
              />
              <span
                className="star"
                style={{
                  color: currentRating <= (hover || rating) ? "#ffc107" : "#e4e5e9",
                }}
                onMouseEnter={() => setHover(currentRating)}
                onMouseLeave={() => setHover(null)}
              >
                &#9733;
              </span>
            </label>
          );
        })}
      </div>
      <p>Your Star Rating is: {rating}/{totalStars}</p>
      <label className="stars-count">
        Number of stars:
        <input
          className="number-input"
          onChange={handleChange}
          value={totalStars}
          type="number"
          min={1}
        />
      </label>
    </div>
  );
};

export default App;
