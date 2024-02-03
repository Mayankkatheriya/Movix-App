// Import React and component styles
import React from "react";
import "./styles.scss";

// Import individual sections/components
import HeroBanner from "./heroBanner/HeroBanner";
import Trending from "./trending/Trending";
import Popular from "./popular/Popular";
import TopRated from "./topRated/TopRated";

// Main Home component
const Home = () => {
  // Return the component structure with various sections
  return (
    <div>
      <HeroBanner />
      <Trending />
      <Popular />
      <TopRated />
    </div>
  );
};

// Export the Home component
export default Home;
