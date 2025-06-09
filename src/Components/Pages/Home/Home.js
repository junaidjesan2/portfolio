import React, { useEffect, useState } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaGithubAlt } from "react-icons/fa";
import { FiFacebook, FiGithub, FiInstagram, FiLinkedin, FiShare } from "react-icons/fi";
import {faUpRig} from "react-icons/fa"

import { MdLiveTv } from "react-icons/md";
import { TypeAnimation } from "react-type-animation";
import axios from "axios";

import cover from "../../../images/cover//mit.png";

const Home = () => {
  const [projectsData, setProjectsData] = useState([]);
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
  };

  useEffect(() => {
    axios
      .get("https://junaidjesan2.github.io/datas/portfolioData.json")
      .then(function (response) {
        setProjectsData(response.data);
      })
      .catch(function (error) {
      });
  }, [projectsData]);
  return (
    <>
      <div className="min-h-screen">
        <div className="flex flex-col md:flex-row mx-auto items-center">
          <div data-aos="zoom-in-right" data-aos-duration="1000" className="w-1/2">
            <h1 className="lg:text-start md:text-4xl text-2xl lg:ml-32">
              <TypeAnimation
                sequence={["Front-end", 700, "Web", 700, "MERN Stack", 700]}
                repeat={Infinity}
              />{" "}
              Developer
            </h1>
            <div className="lg:w-1/5 mt-7 lg:ml-32">
              <ul className=" flex items-center justify-between gap-4">
                <li className="hover:text-gray-400">
                  <a
                    href="https://github.com/junaidjesan2"
                    className="flex flex-col items-center space-y-5"
                  >
                    <FiGithub className="h-6 w-6" />
                  </a>
                </li>
                <li className="hover:text-gray-400">
                  <a
                    href="https://www.linkedin.com/in/junaidjesan2/"
                    className="flex flex-col items-center space-y-5"
                  >
                    <FiLinkedin className="h-6 w-6" />
                  </a>
                </li>
                <li className="hover:text-gray-400">
                  <a
                    href="https://www.facebook.com/junaidjesan2"
                    className="flex flex-col items-center space-y-5"
                  >
                    <FiFacebook className="h-6 w-6" />
                  </a>
                </li>
                <li className="hover:text-gray-400">
                  <a
                    href="https://www.instagram.com/junaidjesan2"
                    className="flex flex-col items-center space-y-5"
                  >
                    <FiInstagram className="h-6 w-6" />
                  </a>
                </li>
              </ul>
              
            </div>
            <div  className="lg:w-3/5 mt-7 lg:ml-32">
              <ul className=" flex items-center justify-between gap-4">
                <a className="hover:text-gray-400 items-center flex gap-1" href="https://codeforces.com/profile/junaidjesan"> <FiShare/> CodeForces</a>
                <a className="hover:text-gray-400 items-center flex gap-1" href="https://www.hackerrank.com/profile/junaidjesan2"> <FiShare/> HackerRank</a>
                <a className="hover:text-gray-400 items-center flex gap-1" href="https://leetcode.com/u/junaidjesan2/"> <FiShare/> Leetcode</a>
              </ul>
            </div>
          </div>
          <div data-aos="zoom-in-left" data-aos-duration="1000" className="w-1/2 mt-10 md:mt-0">
            <img src={cover} className="drop-shadow-2xl" />
          </div>
        </div>
        <div className="relative py-1 mt-24 ">
          <div
            data-aos="fade-up"
            data-aos-duration="2500"
            className="badge badge-primary badge-outline absolute top-0 md:right-52"
          >
            Latest Projects
          </div>
          <div className="slider-container md:w-2/4 w-full mx-auto mt-14 md:my-20">
            <Slider {...settings}>
              {projectsData.map((data) => (
                <>
                  <div
                    data-aos="fade-left"
                    className="drop-shadow-md py-5 md:mb-3 border-2 border-[#be94f9] hover:border-[#8d5fcf] rounded-lg"
                  >
                    <div key={data.id}>
                      <p className="md:text-2xl text-lg font-semibold text-center align-middle">
                        {data.name}
                      </p>
                      <div className="flex justify-around gap-3 items-center mt-5 ">
                        <div className="tooltip tooltip-bottom tooltip-secondary"
                          data-tip="Github Link">
                          <a href={data.github}>
                            <FaGithubAlt />
                          </a>
                        </div>
                        {data.liveLink != "" && (
                          <div className="tooltip tooltip-bottom tooltip-secondary"
                            data-tip="Click to see live">
                            <a href={data.liveLink}>
                              <MdLiveTv />
                            </a>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
