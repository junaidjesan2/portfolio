import React from "react";
import {
  AiFillDatabase,
  AiOutlineHtml5,
  AiOutlineNodeCollapse,
} from "react-icons/ai";
import { BsBootstrap } from "react-icons/bs";
import { CgDatabase } from "react-icons/cg";
import { FaReact, FaRocketchat } from "react-icons/fa";
import { TbBrandNextjs, TbFileTypography,  } from "react-icons/tb";
import { DiCss3Full, DiMongodb } from "react-icons/di";
import {     } from "react-icons/md";
import { SiDatacamp, SiInternetarchive, SiJavascript, SiRedux, SiTailwindcss } from "react-icons/si";

const Services = () => {
  return (
    <div>
      <div className="py-5 px-10 bg-gradient-to-r from-indigo-300 via-purple-500 to-pink-500 text-purple-800 rounded-xl">
        <h1 className="text-3xl flex items-center text-start  font-semibold">
          <CgDatabase /> Services
        </h1>
        <hr className="w-28 " />
      </div>
      <div>
        <h1 className="text-2xl font-semibold text-blue-600 text-start mt-3">
          Frontend Development / Web Development{" "}
          <samp className="text-xs">With</samp>
        </h1>
        <div className=" grid grid-cols-1 gap-6 items-start">
          <h1 className="flex items-center gap-2">
            <AiOutlineHtml5 /> HTML5
          </h1>
          <div className="flex gap-3 items-start">
            <h1 className="flex items-center gap-2">
              <DiCss3Full /> Css3
            </h1>
            <div className="justify-start">
              <h1 className="flex items-center gap-2">
                <SiTailwindcss /> Tailwind
              </h1>
              <h1 className="flex items-center gap-2">
                <SiTailwindcss /> DaisyUi
              </h1>
              <h1 className="flex items-center gap-2">
                <SiTailwindcss /> MetarialUi
              </h1>
              <h1 className="flex items-center gap-2">
                <BsBootstrap /> Bootstrap
              </h1>
            </div>
          </div>
          <div className="flex gap-3 items-start">
            <h1 className="flex items-center gap-2">
              <SiJavascript /> Javascript
            </h1>
            <div>
              <h1 className="flex items-center gap-2">
                <SiJavascript /> Es6
              </h1>
              <h1 className="flex items-center gap-2">
                <TbBrandNextjs /> Next.js
              </h1>
              <h1 className="flex items-center gap-2">
                <FaReact /> React
              </h1>
              <h1 className="flex items-center gap-2">
                <FaReact /> React Native
              </h1>
              <h1 className="flex items-center gap-2">
                <SiRedux /> Redux
              </h1>
            </div>
          </div>
          <div className="flex gap-3 items-start">
            <h1 className="flex items-center gap-2">
              <AiFillDatabase /> Database or Backend
            </h1>
            <div>
              <h1 className="flex items-center gap-2">
                <AiOutlineNodeCollapse /> Node.js
              </h1>
              <h1 className="flex items-center gap-2">
                <DiMongodb /> Mongodb CURD
              </h1>
              <h1 className="flex items-center gap-2">
                <TbFileTypography /> Sql
              </h1>
            </div>
          </div>
          <div className="flex gap-3 items-start">
            <h1 className="flex items-center gap-2">
               <SiInternetarchive /> Others
            </h1>
            <div>
              <h1 className="flex items-center gap-2">
                <AiOutlineNodeCollapse /> Formik
              </h1>
              <h1 className="flex items-center gap-2">
                <SiDatacamp /> Api
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
