import React from "react";
import Carousel from "../../../components/carousel/Carousel";
import useFetch from "../../../hooks/useFetch";

const Recommendation = ({ mediaType, id }) => {
  // Fetching recommendation data based on the media type and ID
  const { data, loading, error } = useFetch(
    `/${mediaType}/${id}/recommendations`
  );

  // Rendering a Carousel component if there are recommendations
  return data?.results.length > 0 ? (
    <Carousel
      title="Recommendations"
      data={data?.results}
      loading={loading}
      endpoint={mediaType}
    />
  ) : (
    // Returning an empty fragment if there are no recommendations
    <></>
  );
};

export default Recommendation;
