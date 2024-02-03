import React, { useState } from "react";

import "./styles.scss";

import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import { PlayIcon } from "../Playbtn";
import VideoPopup from "../../../components/videoPopup/VideoPopup";
import Img from "../../../components/lazyLoadingImage/Img";

const VideosSection = ({ data, loading }) => {
  // State for showing/hiding video popup
  const [show, setShow] = useState(false);
  // State for storing the video ID
  const [videoId, setVideoId] = useState(null);

  // Skeleton loader for loading state
  const loadingSkeleton = () => {
    return (
      <div className="skItem">
        <div className="thumb skeleton"></div>
        <div className="row skeleton"></div>
        <div className="row2 skeleton"></div>
      </div>
    );
  };

  return (
    <div className="videosSection">
      <ContentWrapper>
        {/* Section heading */}
        <div className="sectionHeading">Official Videos</div>
        {!loading ? (
          // Render videos when data is available
          <div className="videos">
            {data?.results?.map((video) => (
              // Video item with thumbnail, play button, and title
              <div
                key={video.id}
                className="videoItem"
                onClick={() => {
                  setVideoId(video.key);
                  setShow(true);
                }}
              >
                {/* Video thumbnail with lazy-loading image */}
                <div className="videoThumbnail">
                  <Img
                    src={`https://img.youtube.com/vi/${video.key}/mqdefault.jpg`}
                  />
                  <PlayIcon />
                </div>
                {/* Video title */}
                <div className="videoTitle">{video.name}</div>
              </div>
            ))}
          </div>
        ) : (
          // Loading state: skeleton loaders
          <div className="videoSkeleton">
            {loadingSkeleton()}
            {loadingSkeleton()}
            {loadingSkeleton()}
            {loadingSkeleton()}
          </div>
        )}
      </ContentWrapper>
      {/* Video popup component */}
      <VideoPopup
        show={show}
        setShow={setShow}
        videoId={videoId}
        setVideoId={setVideoId}
      />
    </div>
  );
};

export default VideosSection;
