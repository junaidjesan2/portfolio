import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaGithubAlt } from "react-icons/fa";
import Projects from "../../../data/data";
import { MdLiveTv } from "react-icons/md";
import { TypeAnimation } from "react-type-animation";

const Home = () => {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 400,
  };
  return (
    <>
      <div className="min-h-screen">
        <h1 className="lg:text-start md:text-4xl text-2xl lg:ml-32 flex mx-auto items-center">
          <TypeAnimation
            sequence={["Front-end", 700, "Web", 700, "MERN Stack", 700]}
            repeat={Infinity}
          />  Developer
        </h1>
        <div>
          <div className="slider-container md:w-2/4 mx-auto md:my-20">
            <Slider {...settings} className="wrap">
              {Projects.map((data) => (
                <>
                  <div className="mx-5">
                    <div className="md:m-4 my-10" key={data.id}>
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
