import React from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import ProjectImage from "../../../data/ProjectsImage";

export default function Gellary() {
  return (
    <div>
      <ResponsiveMasonry columnsCountBreakPoints={{ 300: 1, 500: 2, 900: 3 }}>
        <Masonry columnsCount={3} gutter="10px">
          {ProjectImage.map((image) => (
            <img key={image.id} src={image.src} />
          ))}
        </Masonry>
      </ResponsiveMasonry>
    </div>
  );
}
