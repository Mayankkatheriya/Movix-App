import React from "react";
import { useSelector } from "react-redux";

import "./Styles.scss";

const Genres = ({ data }) => {
  const genres = useSelector((store) => store.home.genres);

  return (
    <div className="genres">
      {data?.map((gen) => {
        if (!genres[gen]?.name) return;
        return (
          <div key={gen} className="genre">
            {genres[gen]?.name}
          </div>
        );
      })}
    </div>
  );
};

export default Genres;
