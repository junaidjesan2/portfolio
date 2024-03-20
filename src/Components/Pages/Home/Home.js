import React, { useEffect, useState } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaGithubAlt } from "react-icons/fa";
import { FiFacebook, FiGithub, FiInstagram, FiLinkedin } from "react-icons/fi";

import { MdLiveTv } from "react-icons/md";
import { TypeAnimation } from "react-type-animation";
import axios from "axios";

import cover from "../../../images/cover/javascript-home-cover.png";

const Home = () => {
  const [projectsData, setProjectsData] = useState([]);
  const settings = {
    className: "",
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
  };

  useEffect(() => {
    axios
      .get(
        "https://junaidjesan2.github.io/recipe-for-health-data/projectsData.json"
      )
      .then(function (response) {
        setProjectsData(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [projectsData]);
  return (
    <>
      <div className="min-h-screen">
        <div className="flex items-center">
          <div className="w-1/2">
            <h1 className="lg:text-start md:text-4xl text-2xl lg:ml-32">
              <TypeAnimation
                sequence={["Front-end", 700, "Web", 700, "MERN Stack", 700]}
                repeat={Infinity}
              />{" "}
              Developer
            </h1>
            <div className="w-1/5 mt-7 lg:ml-32">
              <ul className=" flex items-center justify-between">
                <li className="">
                  <a
                    href="https://github.com/junaidjesan2"
                    className="flex flex-col items-center space-y-5"
                  >
                    <FiGithub className="h-6 w-6" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/junaidjesan2/"
                    className="flex flex-col items-center space-y-5"
                  >
                    <FiLinkedin className="h-6 w-6" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.facebook.com/junaidjesan2"
                    className="flex flex-col items-center space-y-5"
                  >
                    <FiFacebook className="h-6 w-6" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/junaidjesan2"
                    className="flex flex-col items-center space-y-5"
                  >
                    <FiInstagram className="h-6 w-6" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-1/2">
            <img src={cover}/>
          </div>
        </div>
        <div className="relative py-1 mt-24 ">
          <div className="badge badge-primary badge-outline absolute top-0 md:right-52">
            Latest Projects
          </div>
          <div className="slider-container md:w-2/4 w-full mx-auto mt-14 md:my-20">
            <Slider {...settings}>
              {projectsData.map((data) => (
                <>
                  <div className="drop-shadow-md py-5 md:mb-3 border-2 border-[#be94f9] rounded-lg">
                    <div key={data.id}>
                      <p className="md:text-2xl text-lg font-semibold text-center align-middle">
                        {data.name}
                      </p>
                      <div className="flex justify-around gap-3 items-center mt-5 ">
                        <a href={data.github}>
                          <FaGithubAlt />
                        </a>
                        {data.liveLink != "" && (
                          <a href={data.liveLink}>
                            <MdLiveTv />
                          </a>
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
