import React, { useState } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import ProjectImage from "../../../data/ProjectsImage";
import toast from "react-hot-toast";

import { CgCloseR } from "react-icons/cg";
import Section from "../../shared/Section/Section";

export default function Galley() {
  const notify = () =>
    toast("Work in progress. Stay with me for better experience", {
      duration: 1500,
    });

  const [visibleImages, setVisibleImages] = useState(5); // Number of images to show initially
  const imagesPerLoad = 5; // Number of images to load each time

  // Function to handle "Load More" button click
  const handleLoadMore = () => {
    setVisibleImages((prevVisibleImages) => prevVisibleImages + imagesPerLoad);
  };

  // Slice the data to show only the visible images
  const displayedImages = ProjectImage.slice(0, visibleImages);

  const restOfImages = visibleImages >= ProjectImage.length;
  const x = `${restOfImages && 'cursor-not-allowed'} bg-[#be94f9] hover:text-gray-900 hover:drop-shadow-xl text-gray-100 px-4 py-1 my-5 w-2/5 rounded-md font-semibold`
  return (
    <div>
      <div
        className="sticky top-3"
      >
        <Section>PREVIOUS PROJECTS</Section>
      </div>
      <div className="my-28">
        <ResponsiveMasonry columnsCountBreakPoints={{ 300: 1, 500: 2, 900: 3 }}>
          <Masonry columnsCount={3} gutter="10px">
            {displayedImages.map((image, index) => (
              <li data-aos="fade-up" // Animation type
                data-aos-delay={index * 100}>
                <ShowImage image={image} key={image.id}></ShowImage>
              </li>
            ))}
          </Masonry>
        </ResponsiveMasonry>
        <div
        >
          <button
            className={x}
            onClick={handleLoadMore}
          >
            {restOfImages ? 'No More Images To Ioad' : 'Load More'}
          </button>
        </div>
      </div>
    </div >
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
