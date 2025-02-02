import React, { useState } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import toast from "react-hot-toast";
import CertificateImages from "../../../data/CertificateImage";
import Slider from "react-slick";
import { CgCloseR } from "react-icons/cg";
import Section from "../../shared/Section/Section";

export default function Certicat() {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    dots:true,
    centerPadding: "60px",
    slidesToShow: 1,
    speed: 500
  };
  return (
    <div>
      <div
        className="sticky top-3"
      >
        <Section>CERTIFICATS</Section>
      </div>
      <div className="slider-container md:w-2/4 w-full mx-auto mt-14 md:my-20">
        <Slider {...settings}>
          {CertificateImages.map((data) => (
            <>
              <div
                data-aos="fade-left"
                className="drop-shadow-md md:mb-3 border-2 border-[#be94f9] hover:border-[#8d5fcf] rounded-lg m-6"
              >
                <div key={data.id}>
                  <div className="flex justify-around gap-3 items-center rounded-lg p-3">
                    <ShowImage data={data} key={data.id}></ShowImage>
                  </div>
                </div>
              </div>
            </>
          ))}
        </Slider>
      </div>
    </div>
  );
}

const ShowImage = (data) => {
  const [openImage, setOpenImage] = useState(false);
  return (
    <div className="my-auto" >
      <img src={data.data.src} className="rounded-lg" onClick={() => setOpenImage(true)} />

      {openImage && (
        <div className="fixed inset-0 bg-opacity-25 backdrop-blur-sm flex items-center justify-center" onClick={() => setOpenImage(false)}>
          <div className="bg-white h-12/12 bg-opacity-0 p-2 rounded  mx-auto">
            <div className="h-12/12 w-full mx-auto">
              <img src={data.data.src} className="rounded-lg" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
