// Component for displaying a YouTube video popup
import React from "react";
import ReactPlayer from "react-player/youtube";
import "./style.scss";

const VideoPopup = ({ show, setShow, videoId, setVideoId }) => {
  // Function to hide the video popup
  const hidePopup = () => {
    setShow(false);
    setVideoId(null);
  };

  return (
    <div className={`videoPopup ${show ? "visible" : ""}`}>
      {/* Background layer to handle closing the popup */}
      <div className="opacityLayer" onClick={hidePopup}></div>
      <div className="videoPlayer">
        {/* Close button */}
        <span className="closeBtn" onClick={hidePopup}>
          Close
        </span>
        {/* ReactPlayer component for displaying the YouTube video */}
        <ReactPlayer
          url={`https://www.youtube.com/watch?v=${videoId}`}
          controls
          width="100%"
          height="100%"
          // playing={true}
        />
      </div>
    </div>
  );
};

export default VideoPopup;
