import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaLink, FaRegShareSquare } from "react-icons/fa";
import Projects from "../../../data/data";

const Home = () => {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
  };
  return (
    <>
      <div className="min-h-screen">
        <h1 className="lg:text-start text-4xl lg:ml-32 flex mx-auto items-center">
          Frontend Developer / Web Developer
        </h1>
        <div>
          <div className="slider-container w-2/4 mx-auto my-20">
            <Slider {...settings}>
            {Projects.map((data) => (
                    <>
                      <div className="m-4" key={data.id}>
                        <p className="text-2xl font-semibold text-center align-middle">
                          {data.name}
                        </p>
                        <div className="flex justify-around mt-5">
                          <a href={data.github}>
                            <FaRegShareSquare />
                          </a>
                          {data.liveLink != "" && (
                            <a href={data.liveLink}>
                              <FaLink />
                            </a>
                          )}
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
