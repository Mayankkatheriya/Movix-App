import React from "react";
import { useSelector } from "react-redux";

import "./styles.scss";

import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import Img from "../../../components/lazyLoadingImage/Img";
import avatar from "../../../assets/avatar.png";

const Cast = ({ data, loading }) => {
  // Fetching the base URL for profile images from the Redux store
  const { url } = useSelector((state) => state.home);

  // Skeleton component for loading state
  const skeleton = () => {
    return (
      <div className="skItem">
        <div className="circle skeleton"></div>
        <div className="row skeleton"></div>
        <div className="row2 skeleton"></div>
      </div>
    );
  };

  return (
    <div className="castSection">
      <ContentWrapper>
        {/* Displaying section heading */}
        <div className="sectionHeading">Top Cast</div>

        {/* Checking if the data is loaded */}
        {!loading ? (
          <div className="listItems">
            {data?.map((item) => {
              // Generating the image URL for the cast member
              let imgUrl = item.profile_path
                ? url.profile + item.profile_path
                : avatar;

              // Rendering individual cast member details
              return (
                <div key={item.id} className="listItem">
                  <div className="profileImg">
                    {/* Lazy loading profile image */}
                    <Img src={imgUrl} />
                  </div>
                  <div className="name">{item.name}</div>
                  <div className="character">{item.character}</div>
                </div>
              );
            })}
          </div>
        ) : (
          // Displaying skeleton loaders during the loading state
          <div className="castSkeleton">
            {skeleton()}
            {skeleton()}
            {skeleton()}
            {skeleton()}
            {skeleton()}
            {skeleton()}
          </div>
        )}
      </ContentWrapper>
    </div>
  );
};

export default Cast;
