// Import React, useEffect, and other necessary modules
import React, { useEffect } from "react";
import { fetchDataFromApi } from "./utils/api";
import { useSelector, useDispatch } from "react-redux";
import { getApiConfiguration, getGenres } from "./store/homeSlice";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Import components and pages
import Home from "./pages/home/Home";
import Details from "./pages/details/Details";
import SearchResults from "./pages/searchResults/SearchResults";
import Explore from "./pages/explore/Explore";
import PageNotFound from "./pages/404/PageNotFound";
import Layout from "./layout/Layout";

// Main App component
const App = () => {
  // Create a BrowserRouter for routing
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <PageNotFound />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/:mediaType/:id",
          element: <Details />,
        },
        {
          path: "/search/:query",
          element: <SearchResults />,
        },
        {
          path: "/explore/:mediaType",
          element: <Explore />,
        },
      ],
    },
  ]);

  // Get Redux dispatch function and selector for API URL
  const dispatch = useDispatch();
  const url = useSelector((store) => store.home.url);

  // Fetch API configuration and genres on component mount
  useEffect(() => {
    fetchApiConfig();
    genresCall();
  }, []);

  // Fetch API configuration data
  const fetchApiConfig = () => {
    fetchDataFromApi("/configuration").then((res) => {
      const url = {
        backdrop: res.images.secure_base_url + "original",
        poster: res.images.secure_base_url + "original",
        profile: res.images.secure_base_url + "original",
      };

      dispatch(getApiConfiguration(url));
    });
  };

  // Fetch genres for TV and movies
  const genresCall = async () => {
    let promises = [];
    let endPoints = ["tv", "movie"];
    let allGenres = {};

    endPoints.forEach((url) => {
      promises.push(fetchDataFromApi(`/genre/${url}/list`));
    });

    const data = await Promise.all(promises);
    data.map(({ genres }) => {
      return genres.map((item) => (allGenres[item.id] = item));
    });

    dispatch(getGenres(allGenres));
  };

  // Return the main component structure
  return (
    <div className="App">
      {/* Provide the router for navigation */}
      <RouterProvider router={router} />
    </div>
  );
};

// Export the App component
export default App;
