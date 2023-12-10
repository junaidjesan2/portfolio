import React from "react";
import { BsDownload, BsFileEarmarkPdf, BsPerson } from "react-icons/bs";
import { AiOutlineHome } from "react-icons/ai";
import { CgDatabase } from "react-icons/cg";
import { MdOutlineEmail } from "react-icons/md";
import { Link } from "react-router-dom";
import resume from "../../../images/resume/Resume-Junaid_Ahamed_Jesan.pdf";

const Header = () => {
  const handleResumeDownload = () => {
    fetch(resume).then((response) => {
      response.blob().then((blob) => {
        const fileURL = window.URL.createObjectURL(blob);
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = resume;
        alink.click();
      });
    });
  };
  return (
    <div className="" data-aos="zoom-in">
      <div className="flex items-center md:justify-around justify-between py-auto pr-2">
        <div className="">
          <ul className="hidden md:flex justify-start gap-3">
            <li>
              <Link to="/" className="flex gap-2 items-center">
                <AiOutlineHome />
                <li>Home</li>
              </Link>
            </li>
            <li>
              <Link to="/about" className="flex gap-2 items-center">
                <BsPerson /> <li>About</li>
              </Link>
            </li>
            {/* <li>

            <Link to="/resume" className="flex gap-2 items-center">
              <BsFileEarmarkPdf /> Resume
            </Link>
          </li> */}
            {/* <li><Link to='/portfolio'><BsFillFileEarmarkPersonFill/> Portfolio</Link></li> */}
            <li>
              <Link to="/services" className="flex gap-2 items-center">
                <CgDatabase /> <li>Service</li>
              </Link>
            </li>
            <li>
              <Link to="/contact" className="flex gap-2 items-center">
                <MdOutlineEmail /> <li>Contact</li>
              </Link>
            </li>
          </ul>
          <div className="md:hidden top-0 dropdown text-pink-500">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu overflow-x-auto top-0 dropdown-content shadow bg-base-100"
            >
              <li>
                <Link to="/">
                  <AiOutlineHome /> Home
                </Link>
              </li>
              <li>
                <Link to="/about">
                  <BsPerson /> About
                </Link>
              </li>
              <li>
                <Link to="/resume">
                  <BsFileEarmarkPdf /> Resume
                </Link>
              </li>
              <li>
                <Link to="/portfolio">
                  <BsFileEarmarkPdf /> Portfolio
                </Link>
              </li>
              <li>
                <Link to="/services">
                  <CgDatabase /> services
                </Link>
              </li>
              <li>
                <Link to="/contact">
                  <MdOutlineEmail /> Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="navbar-center grid grid-cols-1">
          <span className="font-semibold normal-case text-xs md:text-xl">
            Junaid Ahamed Jesan
          </span>
          <span className="font-semibold normal-case text-xs md:text-xs">
            junaidjisan782@gmail
          </span>
        </div>
        <div className="">
          <button
            onClick={handleResumeDownload}
            className="flex hover:text-pink-500 items-center gap-2 lg:gap-5 mx-auto"
          >
            <BsDownload /> <h1>Resume</h1>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
