import React from "react";
import { FiFacebook, FiGithub, FiInstagram, FiLinkedin } from "react-icons/fi";

const Footer = () => {
  return (
    <footer >
      <div className="foote px-2 py-4 border-t-[1px] flex flex-col md:flex-row items-center justify-between">
        <div>
          <h1 className="text-xl">junaidjesan2@gmail.com</h1>
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
      </div>
      <div className="py-2 px-2 border-t-[1px] flex flex-col md:flex-row items-center justify-between ">
        <div>
          <h1 className="text-xs">Copyright © 2025 junaidjesan</h1>
        </div>
        <div>
          <h1 className="text-xs">v 2.2.1</h1>
        </div>
      </div>
      
    </footer>
  );
};

export default Footer;
