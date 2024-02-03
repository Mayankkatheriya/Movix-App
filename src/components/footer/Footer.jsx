// Import React, icons, and component styles
import React from "react";
import { FaFacebookF, FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import ContentWrapper from "../contentWrapper/ContentWrapper";
import "./styles.scss";

// Footer component with menu items, information text, and social icons
const Footer = () => {
  return (
    <footer className="footer">
      <ContentWrapper>
        {/* Menu items */}
        <ul className="menuItems">
          <li className="menuItem">Terms Of Use</li>
          <li className="menuItem">Privacy-Policy</li>
          <li className="menuItem">About</li>
          <li className="menuItem">Blog</li>
          <li className="menuItem">FAQ</li>
        </ul>
        {/* Information text */}
        <div className="infoText">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </div>
        {/* Social icons */}
        <div className="socialIcons">
          <a
            href="https://www.facebook.com/mayakkatheriya/"
            target="_blank"
            className="icon"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://www.instagram.com/gupta_ji_813/"
            target="_blank"
            className="icon"
          >
            <FaInstagram />
          </a>
          <a
            href="https://github.com/Mayankkatheriya"
            target="_blank"
            className="icon"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/mayank-gupta-752328173/"
            target="_blank"
            className="icon"
          >
            <FaLinkedin />
          </a>
        </div>
      </ContentWrapper>
    </footer>
  );
};

// Export the Footer component
export default Footer;
