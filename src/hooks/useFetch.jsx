// Import React hooks and fetchDataFromApi utility function
import { useEffect, useState } from "react";
import { fetchDataFromApi } from "../utils/api";

// Custom hook for fetching data from the API
const useFetch = (url) => {
  // State variables for data, loading, and error
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  // Effect to fetch data when the URL changes
  useEffect(() => {
    // Set loading state to indicate data fetching
    setLoading("loading...");
    setData(null);
    setError(null);

    // Fetch data from the specified URL
    fetchDataFromApi(url)
      .then((res) => {
        // Set loading to false and update data state on successful fetch
        setLoading(false);
        // Uncomment the line below to log the fetched data
        // console.log(res);
        setData(res);
      })
      .catch((err) => {
        // Set loading to false and update error state on fetch error
        setLoading(false);
        setError("Something went wrong!");
      });
  }, [url]);

  // Return the data, loading, and error states
  return { data, loading, error };
};

// Export the useFetch hook
export default useFetch;
