// Import React and Circular Progressbar components
import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";

// Import styles for the Circular Progressbar
import "react-circular-progressbar/dist/styles.css";

// Import component styles
import "./styles.scss";

// CircleRating component to display a circular progress bar for ratings
const CircleRating = ({ rating }) => {
  return (
    <div className="circleRating">
      <CircularProgressbar
        value={rating}
        maxValue={10}
        text={rating}
        // Customize progress bar color based on the rating
        styles={buildStyles({
          pathColor: rating < 5 ? "red" : rating < 7 ? "orange" : "green",
        })}
      />
    </div>
  );
};

// Export the CircleRating component
export default CircleRating;
