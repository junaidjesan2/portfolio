import React from "react";
import {
  AiFillDatabase,
  AiOutlineHtml5,
  AiOutlineNodeCollapse,
} from "react-icons/ai";
import { BsBootstrap } from "react-icons/bs";
import { CgDatabase } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { TbBrandNextjs, TbFileTypography } from "react-icons/tb";
import { DiCss3Full, DiMongodb } from "react-icons/di";
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
      <div className=" sticky top-3 py-5">
        <h1 className="md:text-3xl text-xl flex gap-3 items-center text-start font-semibold">
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
          <div className="flex gap-3 items-start">
            <h1 className="flex items-center gap-2">
              <DiCss3Full /> CSS
            </h1>
            <div className="justify-start">
              <h1 className="flex items-center gap-2">
                <SiTailwindcss />{" "}
                <TypeAnimation
                  sequence={[
                    "",
                    500,
                    "TailwindCSS", //  Continuing previous Text
                    500,
                    "Tailwind",
                    500,
                    "Tail",
                    500,
                    "TailwindCSS",
                    500,
                  ]}
                  speed={100}
                />
              </h1>
              <h1 className="flex items-center gap-2">
                <SiTailwindcss />{" "}
                <TypeAnimation
                  sequence={[
                    "",
                    500,
                    "DaisyUI", //  Continuing previous Text
                    500,
                    "Daisy",
                    500,
                    "Dai",
                    500,
                    "DaisyUI",
                    500,
                  ]}
                  speed={0}
                />
              </h1>
              <h1 className="flex items-center gap-2">
                <SiTailwindcss />{" "}
                <TypeAnimation
                  sequence={[
                    "",
                    500,
                    "MetarialUI", //  Continuing previous Text
                    500,
                    "Metarial",
                    500,
                    "Meta",
                    500,
                    "MetarialUI",
                    500,
                  ]}
                  speed={-100}
                />
              </h1>
              <h1 className="flex items-center gap-2">
                <BsBootstrap />{" "}
                <TypeAnimation
                  sequence={[
                    "",
                    500,
                    "Bootstrap", //  Continuing previous Text
                    500,
                    "Bootst",
                    500,
                    "Boo",
                    500,
                    "Bootstrap",
                    500,
                  ]}
                  speed={-200}
                />
              </h1>
            </div>
          </div>
          <div className="flex gap-3 items-start">
            <h1 className="flex items-center gap-2">
              <SiJavascript /> Javascript
            </h1>
            <div>
              <h1 className="flex items-center gap-2">
                <SiJavascript />{" "}
                <TypeAnimation
                  sequence={[
                    "",
                    500,
                    "ES6", //  Continuing previous Text
                    500,
                    "ES",
                    500,
                    "E",
                    500,
                    "ES6",
                    500,
                  ]}
                  speed={-300}
                />
              </h1>
              <h1 className="flex items-center gap-2">
                <TbBrandNextjs />{" "}
                <TypeAnimation
                  sequence={[
                    "",
                    500,
                    "Next.js", //  Continuing previous Text
                    500,
                    "Next",
                    500,
                    "N",
                    500,
                    "Next.js",
                    500,
                  ]}
                  speed={-400}
                />
              </h1>
              <h1 className="flex items-center gap-2">
                <FaReact />{" "}
                <TypeAnimation
                  sequence={[
                    "",
                    500,
                    "React", //  Continuing previous Text
                    500,
                    "Rea",
                    500,
                    "R",
                    500,
                    "React",
                    500,
                  ]}
                  speed={-500}
                />
              </h1>
              <h1 className="flex items-center gap-2">
                <SiRedux />{" "}
                <TypeAnimation
                  sequence={[
                    "",
                    500,
                    "Redux", //  Continuing previous Text
                    500,
                    "Red",
                    500,
                    "R",
                    500,
                    "Redux",
                    500,
                  ]}
                  speed={-600}
                />
              </h1>
            </div>
          </div>
          <div className="flex gap-3 items-start">
            <h1 className="flex items-center gap-2">
              <AiFillDatabase /> Database and Backend
            </h1>
            <div>
              <h1 className="flex items-center gap-2">
                <AiOutlineNodeCollapse />{" "}
                <TypeAnimation
                  sequence={[
                    "",
                    500,
                    "Node.js", //  Continuing previous Text
                    500,
                    "Node",
                    500,
                    "N",
                    500,
                    "Node.js",
                    500,
                  ]}
                  speed={-700}
                />
              </h1>
              <h1 className="flex items-center gap-2">
                <DiMongodb />{" "}
                <TypeAnimation
                  sequence={[
                    "",
                    500,
                    "Mongodb CURD", //  Continuing previous Text
                    500,
                    "Mongodb",
                    500,
                    "Mon",
                    500,
                    "Mongodb CURD",
                    500,
                  ]}
                  speed={-800}
                />
              </h1>
              <h1 className="flex items-center gap-2">
                <TbFileTypography />{" "}
                <TypeAnimation
                  sequence={[
                    "",
                    500,
                    "SQL", //  Continuing previous Text
                    500,
                    "SQ",
                    500,
                    "S",
                    500,
                    "SQL",
                    500,
                  ]}
                  speed={-900}
                />
              </h1>
            </div>
          </div>
          <div className="flex gap-3 items-start">
            <h1 className="flex items-center gap-2">
              <SiInternetarchive /> Others
            </h1>
            <div>
              <h1 className="flex items-center gap-2">
                <AiOutlineNodeCollapse />{" "}
                <TypeAnimation
                  sequence={[
                    "",
                    500,
                    "Formik", //  Continuing previous Text
                    500,
                    "For",
                    500,
                    "F",
                    500,
                    "Formik",
                    500,
                  ]}
                  speed={-1000}
                />
              </h1>
              <h1 className="flex items-center gap-2">
                <SiDatacamp />
                <TypeAnimation
                  sequence={[
                    "",
                    500,
                    "Restful API", //  Continuing previous Text
                    500,
                    "Restful",
                    500,
                    "Rest",
                    500,
                    "Restful API",
                    500,
                  ]}
                  speed={-1100}
                />
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
