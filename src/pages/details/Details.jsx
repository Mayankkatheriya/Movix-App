// Component to display detailed information about a movie or TV show
import React from "react";
import useFetch from "../../hooks/useFetch";
import { useParams } from "react-router-dom";
import DetailsBanner from "./detailsBanner/DetailsBanner";
import Cast from "./cast/Cast";
import VideosSection from "./videosSection/VideoSection";
import Similar from "./carousels/Similar";
import Recommendation from "./carousels/Recommendation";

const Details = () => {
  // Extracting parameters from the URL using React Router
  const { mediaType, id } = useParams();

  // Fetching video details for the given movie or TV show
  const { data, loading } = useFetch(`/${mediaType}/${id}/videos`);

  // Fetching credits information for the given movie or TV show
  const { data: credits, loading: creditsLoading } = useFetch(
    `/${mediaType}/${id}/credits`
  );

  return (
    <div>
      {/* DetailsBanner component to display the banner with video and crew details */}
      <DetailsBanner video={data?.results?.[0]} crew={credits?.crew} />

      {/* Cast component to display the cast information */}
      <Cast data={credits?.cast} loading={credits?.loading} />

      {/* VideosSection component to display videos related to the movie or TV show */}
      <VideosSection data={data} loading={loading} />

      {/* Similar component to display similar movies or TV shows */}
      <Similar mediaType={mediaType} id={id} />

      {/* Recommendation component to display recommended movies or TV shows */}
      <Recommendation mediaType={mediaType} id={id} />
    </div>
  );
};

export default Details;
