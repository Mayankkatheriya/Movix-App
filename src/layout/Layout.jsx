// Import React, useEffect, Outlet, and useLocation from React Router
import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";

// Import components
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

// Main Layout component
const Layout = () => {
  // Get the current location using useLocation from React Router
  const location = useLocation();

  // Scroll to the top of the page on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  // Return the component structure with Header, Outlet, and Footer
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

// Export the Layout component
export default Layout;
