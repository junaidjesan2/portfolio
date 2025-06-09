import React, { useState } from "react";

import { CgCloseR } from "react-icons/cg";
import Certificate from "../../../data/Certificates";
import Slider from "react-slick";

export default function Certications() {
  const settings = {
    className: "",
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
  };

  return (
    <div className="slider-container md:w-2/4 w-full mx-auto mt-14 md:my-20">
      <Slider {...settings}>
        {Certificate.map((data) => (
          <>
            <div
              data-aos="fade-left"
              className="drop-shadow-md py-5 md:mb-3 border-2 border-[#be94f9] rounded-lg"
              >
              
              <div key={data.id}>
                <p className="md:text-2xl text-lg font-semibold text-center align-middle">
                  {data.name}
                </p>
                <div className="flex justify-around gap-3 items-center mt-5 ">

                </div>
              </div>
            </div>
          </>
        ))}
      </Slider>
    </div>
  );
}

const ShowImage = (image) => {
  const [openImage, setOpenImage] = useState(false);
  return (
    <div className="">
      <img
        key={image.id}
        src={image.image.src}
        onClick={() => setOpenImage(true)}
      />
      {openImage && (
        <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex items-center justify-center">
          <div className="bg-white p-2 h-screen rounded w-3/4 mx-auto">
            <CgCloseR
              onClick={() => setOpenImage(false)}
              className="fixed h-6 w-6 text-black"
            />
            <div className="h-screen overflow-y-scroll w-3/4 mx-auto">
              <img src={image.image.src} className="rounded-lg" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
