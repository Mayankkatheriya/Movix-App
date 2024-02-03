import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";

import "./styles.scss";

import { fetchDataFromApi } from "../../utils/api";
import ContentWrapper from "../../components/contentWrapper/ContentWrapper";
import MovieCard from "../../components/movieCard/MovieCard";
import Spinner from "../../components/spinner/Spinner";
import "./styles.scss";

const SearchResults = () => {
  // State for storing search results data
  const [data, setData] = useState(null);
  // State for tracking the current page number
  const [pageNum, setPageNum] = useState(1);
  // State for loading indicator
  const [loading, setLoading] = useState(false);
  // Get the search query from the URL parameters
  const { query } = useParams();

  // Function to fetch initial data
  const fetchInitialData = () => {
    setLoading(true);
    fetchDataFromApi(`/search/multi?query=${query}&page=${pageNum}`).then(
      (res) => {
        setData(res);
        setPageNum((prev) => prev + 1);
        setLoading(false);
      }
    );
  };

  // Function to fetch next page data
  const fetchNextPageData = () => {
    fetchDataFromApi(`/search/multi?query=${query}&page=${pageNum}`).then(
      (res) => {
        if (data?.results) {
          setData({
            ...data,
            results: [...data?.results, ...res.results],
          });
        } else {
          setData(res);
        }
        setPageNum((prev) => prev + 1);
      }
    );
  };

  // Fetch initial data when the component mounts or when the search query changes
  useEffect(() => {
    setPageNum(1);
    fetchInitialData();
  }, [query]);

  return (
    <div className="searchResultsPage">
      {loading ? (
        // Loading spinner while fetching data
        <Spinner initial={true} />
      ) : (
        <ContentWrapper>
          {data?.results.length > 0 ? (
            // Render search results when data is available
            <>
              <div className="pageTitle">
                {`Search ${
                  data?.total_results > 1 ? "results" : "result"
                } of '${query}'`}
              </div>
              {/* Infinite scroll component for loading more results */}
              <InfiniteScroll
                className="content"
                dataLength={data?.results?.length || []}
                next={fetchNextPageData}
                hasMore={pageNum <= data?.total_pages}
                loader={<Spinner />}
              >
                {/* Map through results and render MovieCard component */}
                {data?.results.map((item, index) => {
                  if (item.media_type === "person") return null;
                  return (
                    <MovieCard key={index} data={item} fromSearch={true} />
                  );
                })}
              </InfiniteScroll>
            </>
          ) : (
            // Render message when no results are found
            <span className="resultNotFound">Sorry, Results not found!</span>
          )}
        </ContentWrapper>
      )}
    </div>
  );
};

export default SearchResults;
