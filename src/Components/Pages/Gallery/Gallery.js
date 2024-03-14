import React from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import ProjectImage from "../../../data/ProjectsImage";
import toast from "react-hot-toast";

export default function Galley() {
  const notify=()=>toast("Work in progress. Stay with me for better experience",{duration:1500})
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
              <img key={image.id} src={image.src} />
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

};
