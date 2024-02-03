// Import React, hooks, styles, and components
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import "./styles.scss";

// Import custom hook for fetching data
import useFetch from "../../../hooks/useFetch";

// Import Lazy Loading Image component and Content Wrapper
import Img from "../../../components/lazyLoadingImage/Img";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";

// Main HeroBanner component
const HeroBanner = () => {
  // State variables for background image, search query, and navigation
  const [background, setBackground] = useState("");
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  // Get API URL from Redux store and fetch upcoming movies data
  const url = useSelector((state) => state.home.url);
  const { data, loading } = useFetch("/movie/upcoming");

  // Set a random backdrop image from upcoming movies as background
  useEffect(() => {
    const bg =
      url.backdrop +
      data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path;
    setBackground(bg);
  }, [data]);

  // Handle search on Enter key press
  const searchQueryHandler = (event) => {
    if (event.key === "Enter" && query.length > 0) {
      navigate(`/search/${query}`);
    }
  };

  // Handle search on button click
  const searchQueryHandlerButton = () => {
    if (query.length > 0) {
      navigate(`/search/${query}`);
    }
  };

  // Return the component structure with background image, content, and search input
  return (
    <div className="heroBanner">
      {!loading && (
        <div className="backdrop-img">
          <Img src={background} />
        </div>
      )}

      <div className="opacity-layer"></div>
      <ContentWrapper>
        <div className="heroBannerContent">
          <span className="title">Welcome.</span>
          <span className="subTitle">
            Millions of movies, TV shows and people to discover. Explore now.
          </span>
          <div className="searchInput">
            <input
              type="text"
              placeholder="Search for a movie or TV show...."
              onChange={(e) => setQuery(e.target.value)}
              onKeyUp={searchQueryHandler}
            />
            <button onClick={searchQueryHandlerButton}>Search</button>
          </div>
        </div>
      </ContentWrapper>
    </div>
  );
};

// Export the HeroBanner component
export default HeroBanner;
