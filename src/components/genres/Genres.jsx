// Import React, Redux hook, and component styles
import React from "react";
import { useSelector } from "react-redux";
import "./Styles.scss";

// Genres component to display genre names based on genre ids
const Genres = ({ data }) => {
  // Retrieve genres from Redux store
  const genres = useSelector((store) => store.home.genres);

  // Render genre names for each genre id in the provided data
  return (
    <div className="genres">
      {data?.map((gen) => {
        // Check if the genre exists in the store before rendering
        if (!genres[gen]?.name) return;
        return (
          <div key={gen} className="genre">
            {genres[gen]?.name}
          </div>
        );
      })}
    </div>
  );
};

// Export the Genres component
export default Genres;
