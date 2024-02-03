// Import Axios for HTTP requests
import axios from "axios";

// Base URL for The Movie Database (TMDb) API
const BASE_URL = "https://api.themoviedb.org/3";

// Import the TMDb token from environment variables
const IMDB_TOKEN = import.meta.env.VITE_APP_TMDB_TOKEN;

// Headers for API requests, including Authorization token
const headers = {
  Authorization: "bearer " + IMDB_TOKEN,
};

// Function to fetch data from the TMDb API
export const fetchDataFromApi = async (url, params) => {
  try {
    // Make a GET request using Axios with provided URL, headers, and parameters
    const { data } = await axios.get(BASE_URL + url, {
      headers,
      params,
    });
    // Return the fetched data
    return data;
  } catch (err) {
    // Log any errors and return the error object
    console.log(err);
    return err;
  }
};
