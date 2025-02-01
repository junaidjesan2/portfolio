import React from "react";
import { FiFacebook, FiGithub, FiInstagram, FiLinkedin } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="footer py-6 border-t-2 flex flex-col md:flex-row items-center justify-center md:justify-around">
      <div>
        <h1 className="text-2xl">junaidjesan2@gmail.com</h1>
      </div>
      <div>
        <ul className="grid grid-flow-col gap-7">
          <li>
            <a href="https://github.com/junaidjesan2">
              <FiGithub className="h-7 w-7" />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/junaidjesan2/">
              <FiLinkedin className="h-7 w-7" />
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/junaidjesan2">
              <FiFacebook className="h-7 w-7" />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/junaidjesan2">
              <FiInstagram className="h-7 w-7" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
