import React, { useState } from "react";
import CertificateImages from "../../../data/CertificateImage";
import Slider from "react-slick";
import Section from "../../shared/Section/Section";

export default function Certificat() {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    dots: true,
    centerPadding: "60px",
    slidesToShow: 1,
    speed: 500,
  };

  return (
    <div>
      {/* Section Heading */}
      <div className="sticky top-3">
        <Section>CERTIFICATES</Section>
      </div>

      {/* Slider */}
      <div className="slider-container w-full mx-auto mt-14 md:my-20">
        <div className="w-6/12 mx-auto">
          <Slider {...settings}>
            {CertificateImages.map((data) => (
              <div
                key={data.id}
                data-aos="fade-left"
                className="flex justify-around gap-3 items-center h-auto rounded-lg p-3"
              >
                <ShowImage data={data} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

// ShowImage Component
const ShowImage = ({ data }) => {
  const [openImage, setOpenImage] = useState(false);

  return (
    <div className="my-auto">
      {/* Thumbnail Image */}
      <img
        src={data.src}
        className="rounded-lg cursor-pointer"
        onClick={() => setOpenImage(true)}
        alt=""
      />

      {/* Fullscreen Modal */}
      {openImage && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center"
          onClick={() => setOpenImage(false)}
        >
          <div className="bg-white rounded-lg shadow-lg max-w-3xl w-full">
            <img src={data.src} className="rounded-lg w-full h-auto" alt="" />
          </div>
        </div>
      )}
    </div>
  );
};
