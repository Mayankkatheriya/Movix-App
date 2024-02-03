// Import configureStore from Redux Toolkit and homeSliceReducer
import { configureStore } from "@reduxjs/toolkit";
import homeSliceReducer from "./homeSlice";

// Create the Redux store with the homeSliceReducer
export const store = configureStore({
  reducer: {
    home: homeSliceReducer,
  },
});
