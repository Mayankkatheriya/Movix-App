// Import createSlice from Redux Toolkit
import { createSlice } from "@reduxjs/toolkit";

// Initial state for the home slice
const initialState = {
  url: {},
  genres: {},
};

// Create a slice for the home state
export const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {
    // Action to set API configuration in the state
    getApiConfiguration: (state, action) => {
      state.url = action.payload;
    },
    // Action to set genres in the state
    getGenres: (state, action) => {
      state.genres = action.payload;
    },
  },
});

// Export actions and reducer from the home slice
export const { getApiConfiguration, getGenres } = homeSlice.actions;
export default homeSlice.reducer;
