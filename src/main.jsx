// Import React and ReactDOM for client-side rendering
import React from "react";
import ReactDOM from "react-dom/client";

// Import the main App component and styling
import App from "./App.jsx";
import "./index.scss";

// Import the Redux Provider and store
import { Provider } from "react-redux";
import { store } from "./store/store.js";

// Use ReactDOM.createRoot to render the App component within the Provider
ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
