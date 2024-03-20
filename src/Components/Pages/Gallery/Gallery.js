import React, { useState } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import ProjectImage from "../../../data/ProjectsImage";
import toast from "react-hot-toast";

import { CgCloseR } from "react-icons/cg";

export default function Galley() {
  const notify = () =>
    toast("Work in progress. Stay with me for better experience", {
      duration: 1500,
    });
  return (
    <div>
      <div className="sticky top-3 py-5">
        <h1 className="md:text-3xl text-[#be94f9] text-xl flex gap-3 items-center text-start font-semibold">
          Gallery
        </h1>
        <hr className="md:w-28 w-16" />
      </div>
      <div className="my-28">
        <ResponsiveMasonry columnsCountBreakPoints={{ 300: 1, 500: 2, 900: 3 }}>
          <Masonry columnsCount={3} gutter="10px">
            {ProjectImage.map((image) => (
              <ShowImage image={image} key={image.id}></ShowImage>
            ))}
          </Masonry>
        </ResponsiveMasonry>
        <div>
          <button
            className=" bg-[#be94f9] px-4 py-1 my-5 w-2/5 rounded-md font-semibold"
            onClick={notify}
          >
            Load More images
          </button>
        </div>
      </div>
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
          <div className="bg-white p-2 h-screen rounded mx-28 my-16">
            <CgCloseR
              onClick={() => setOpenImage(false)}
              className="fixed h-6 w-6 text-black"
            />
            <div className="h-screen overflow-y-scroll">
              <img src={image.image.src} className="" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
