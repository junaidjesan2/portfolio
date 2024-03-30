import React from "react";
import {
  AiFillDatabase,
  AiOutlineHtml5,
  AiOutlineNodeCollapse,
} from "react-icons/ai";
import { BsBootstrap } from "react-icons/bs";
import { FaChrome, FaNpm, FaReact } from "react-icons/fa";
import {
  TbBrandNextjs,
  TbBrandVisualStudio,
  TbFileTypography,
} from "react-icons/tb";
import { DiCss3Full, DiMongodb } from "react-icons/di";
import { GoBrowser, GoTools } from "react-icons/go";
import {} from "react-icons/md";
import {
  SiDatacamp,
  SiInternetarchive,
  SiJavascript,
  SiRedux,
  SiTailwindcss,
} from "react-icons/si";
import { TypeAnimation } from "react-type-animation";

const Services = () => {
  return (
    <div className="  my-20">
      <div
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500"
        className=" sticky top-3 py-5"
      >
        <h1 className="md:text-3xl text-[#be94f9] text-xl flex gap-3 items-center text-start font-semibold">
          Services
        </h1>
        <hr className="md:w-28 w-16" />
      </div>
      <div className="w-1/2 mx-auto">
        <div className=" grid grid-cols-1 gap-6 items-start">
          <h1 className="flex items-center gap-2">
            <AiOutlineHtml5 />
            HTML
          </h1>
          <div className="flex gap-5 items-start">
            <h1 className="flex items-center md:gap-2">
              <DiCss3Full /> CSS
            </h1>
            <div className=" md:space-y-4">
              <h1
                data-aos="zoom-out-right"
                data-aos-duration="1000"
                className="flex items-center gap-2"
              >
                <SiTailwindcss /> TailwindCSS
              </h1>
              <h1
                data-aos="zoom-out-right"
                data-aos-duration="1500"
                className="flex items-center gap-2"
              >
                <SiTailwindcss /> DaisyUI
              </h1>
              <h1
                data-aos="zoom-out-right"
                data-aos-duration="2000"
                className="flex items-center gap-2"
              >
                <SiTailwindcss /> MeterialUI
              </h1>
              <h1
                data-aos="zoom-out-right"
                data-aos-duration="2500"
                className="flex items-center gap-2"
              >
                <BsBootstrap /> Bootstrap
              </h1>
            </div>
          </div>
          <div className="flex gap-5 items-start">
            <h1 className="flex items-center gap-2">
              <SiJavascript /> Javascript
            </h1>
            <div className="md:space-y-4">
              <h1
                data-aos="zoom-out-right"
                data-aos-duration="1000"
                className="flex items-center gap-2"
              >
                <SiJavascript /> ES6
              </h1>
              <h1
                data-aos="zoom-out-right"
                data-aos-duration="1500"
                className="flex items-center gap-2"
              >
                <TbBrandNextjs /> Next.JS
              </h1>
              <h1
                data-aos="zoom-out-right"
                data-aos-duration="2000"
                className="flex items-center gap-2"
              >
                <FaReact /> React
              </h1>
              <h1
                data-aos="zoom-out-right"
                data-aos-duration="2500"
                className="flex items-center gap-2"
              >
                <FaReact /> Vite
              </h1>
            </div>
          </div>
          <div className="flex gap-5 items-start">
            <h1 className="flex items-center gap-2">
              <AiFillDatabase /> Database and Backend
            </h1>
            <div className="md:space-y-4">
              <h1 data-aos="zoom-out-right" data-aos-duration="1000" className="flex items-center gap-2">
                <AiOutlineNodeCollapse /> Node.JS
              </h1>
              <h1 data-aos="zoom-out-right" data-aos-duration="1500" className="flex items-center gap-2">
                <DiMongodb /> MongoDB CURD
              </h1>
              <h1 data-aos="zoom-out-right" data-aos-duration="2000" className="flex items-center gap-2">
                <TbFileTypography /> SQL
              </h1>
            </div>
          </div>
          <div className="flex gap-5 items-start">
            <h1 className="flex items-center gap-2">
              <SiInternetarchive /> Others
            </h1>
            <div className="md:space-y-4">
              <h1 data-aos="zoom-out-right" data-aos-duration="1000" className="flex items-center gap-2">
                <AiOutlineNodeCollapse /> Formik
              </h1>
              <h1 data-aos="zoom-out-right" data-aos-duration="1500" className="flex items-center gap-2">
                <SiDatacamp />
                Restful API
              </h1>
            </div>
          </div>
          <div className="flex gap-5 items-start">
            <h1 className="flex items-center md:gap-2">
              <GoTools /> Tools
            </h1>
            <div className=" md:space-y-4">
              <h1 data-aos="zoom-out-right" data-aos-duration="1000" className="flex items-center gap-2">
                <TbBrandVisualStudio /> VSCode
              </h1>
              <h1 data-aos="zoom-out-right" data-aos-duration="1500" className="flex items-center gap-2">
                <FaChrome /> Chrome Dev Tool
              </h1>
              <h1 data-aos="zoom-out-right" data-aos-duration="2000" className="flex items-center gap-2">
                <FaNpm /> NPM
              </h1>
              <h1 data-aos="zoom-out-right" data-aos-duration="2500" className="flex items-center gap-2">
                <GoBrowser /> Browsers
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
