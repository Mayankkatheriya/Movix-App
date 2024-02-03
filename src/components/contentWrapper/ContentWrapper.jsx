// Import React and component styles
import React from "react";
import "./styles.scss";

// ContentWrapper component to wrap content with a styled container
const ContentWrapper = ({ children }) => {
  return <div className="contentWrapper">{children}</div>;
};

// Export the ContentWrapper component
export default ContentWrapper;
