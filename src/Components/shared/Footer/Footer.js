import React from "react";
import { FiFacebook, FiGithub, FiInstagram, FiLinkedin } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="footer justify-evenly py-16 border-t-2">
      <div>
        <ul className="grid grid-flow-col gap-4">
          <li>
            <a href="https://github.com/junaidjesan2">
              <FiGithub className="h-7 w-7" />
              GitHub
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/junaidjesan2/">
              <FiLinkedin className="h-7 w-7" />
              LinkedIn
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/junaidjesan2">
              <FiFacebook className="h-7 w-7" /> Facebook
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/junaidjesan2">
              <FiInstagram className="h-7 w-7" /> Instagram
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
