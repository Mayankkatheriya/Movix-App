import React from "react";
import Carousel from "../../../components/carousel/Carousel";
import useFetch from "../../../hooks/useFetch";

const Similar = ({ mediaType, id }) => {
  // Fetching similar content data based on the media type and ID
  const { data, loading, error } = useFetch(`/${mediaType}/${id}/similar`);

  // Defining the title based on the media type
  const title = mediaType === "tv" ? "Similar TV Shows" : "Similar Movies";

  // Rendering a Carousel component if there are similar content
  return data?.results.length > 0 ? (
    <Carousel
      title={title}
      data={data?.results}
      loading={loading}
      endpoint={mediaType}
    />
  ) : (
    // Returning an empty fragment if there is no similar content
    <></>
  );
};

export default Similar;
