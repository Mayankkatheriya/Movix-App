// Component to display trending movies and TV shows with a carousel
import React, { useState } from "react";
import Carousel from "../../../components/carousel/Carousel";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import SwitchTabs from "../../../components/switchTabs/SwitchTabs";
import useFetch from "../../../hooks/useFetch";

const Trending = () => {
  // State to manage the trending time frame (day or week)
  const [endpoint, setEndpoint] = useState("day");

  // Fetching trending data based on the selected time frame (day or week)
  const { data, loading } = useFetch(`/trending/all/${endpoint}`);

  // Callback function to handle tab change in the SwitchTabs component
  const onTabChange = (tab) => {
    // Update the endpoint based on the selected tab (Day or Week)
    setEndpoint(tab === "Day" ? "day" : "week");
  };

  return (
    <div className="carouselSection">
      <ContentWrapper>
        {/* Displaying section title */}
        <span className="carouselTitle">Trending</span>
        {/* SwitchTabs component for toggling between Day and Week */}
        <SwitchTabs data={["Day", "Week"]} onTabChange={onTabChange} />
      </ContentWrapper>
      {/* Carousel component to display trending movies or TV shows */}
      <Carousel data={data?.results} loading={loading} />
    </div>
  );
};

export default Trending;
