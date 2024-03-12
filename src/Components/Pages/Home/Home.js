import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaGithubAlt } from "react-icons/fa";
import Projects from "../../../data/projectsData";
import { MdLiveTv } from "react-icons/md";
import { TypeAnimation } from "react-type-animation";

const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    swipeToSlide: true,
    beforeChange: function(currentSlide, nextSlide) {
      console.log("before change", currentSlide, nextSlide);
    },
    afterChange: function(currentSlide) {
      console.log("after change", currentSlide);
    }
  };
  return (
    <>
      <div className="min-h-screen">
        <h1 className="lg:text-start md:text-4xl text-2xl lg:ml-32">
          <TypeAnimation
            sequence={["Front-end", 700, "Web", 700, "MERN Stack", 700]}
            repeat={Infinity}
          />  Developer
        </h1>
        <div>
          <div className="slider-container md:w-2/4 mx-auto mt-14 md:my-20">
            <Slider {...settings}>
              {Projects.map((data) => (
                <>
                  <div className="drop-shadow-md py-2 md:mb-3 border-2 border-[#be94f9] rounded-lg">
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
