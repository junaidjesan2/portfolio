import React, { useState } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import toast from "react-hot-toast";

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
  // const notify = () =>
  //   toast("Work in progress. Stay with me for better experience", {
  //     duration: 1500,
  //   });
  return (
    // <div>
    //   <div
    //     data-aos="fade-down"
    //     data-aos-easing="linear"
    //     data-aos-duration="1500"
    //     className="sticky top-3 py-5"
    //   >
    //     <h1 className="md:text-3xl text-[#be94f9] text-xl flex gap-3 items-center text-start font-semibold">
    //       Gallery
    //     </h1>
    //     <hr className="md:w-28 w-16" />
    //   </div>
    //   <div className="my-28">
    //     <ResponsiveMasonry columnsCountBreakPoints={{ 300: 1, 500: 2, 900: 3 }}>
    //       <Masonry columnsCount={3} gutter="10px">
    //         {CerticateImage.map((image, index) => (
    //           <li data-aos="fade-up" // Animation type
    //             data-aos-delay={index * 100}>
    //             <ShowImage image={image} key={image.id}></ShowImage>
    //           </li>
    //         ))}
    //       </Masonry>
    //     </ResponsiveMasonry>
    //   </div>
    // </div>
    <div className="slider-container md:w-2/4 w-full mx-auto mt-14 md:my-20">
            <Slider {...settings}>
              {Certificate.map((data) => (
                <>
                {console.log(data)}
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
