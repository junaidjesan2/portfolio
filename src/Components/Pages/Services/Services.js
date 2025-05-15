// import React from "react";
// import {
//   AiFillDatabase,
//   AiOutlineHtml5,
//   AiOutlineNodeCollapse,
// } from "react-icons/ai";
// import { BsBootstrap } from "react-icons/bs";
// import { FaChrome, FaNpm, FaReact } from "react-icons/fa";
// import {
//   TbBrandNextjs,
//   TbBrandVisualStudio,
//   TbFileTypography,
// } from "react-icons/tb";
// import { DiCss3Full, DiMongodb } from "react-icons/di";
// import { GoBrowser, GoTools } from "react-icons/go";
// import {} from "react-icons/md";
// import {
//   SiDatacamp,
//   SiInternetarchive,
//   SiJavascript,
//   SiRedux,
//   SiTailwindcss,
// } from "react-icons/si";
// import { TypeAnimation } from "react-type-animation";
// import Section from "../../shared/Section/Section";

// const Services = () => {
//   return (
//     <div>
//       <div
//         className=" sticky top-3"
//       >
//         <Section>SERVICES</Section>
//       </div>
//       <div className="w-1/2 mx-auto">
//         <div className=" grid grid-cols-1 gap-6 items-start">
//           <h1 className="flex items-center gap-2">
//             <AiOutlineHtml5 />
//             HTML
//           </h1>
//           <div className="flex gap-5 items-start">
//             <h1 className="flex items-center md:gap-2">
//               <DiCss3Full /> CSS
//             </h1>
//             <div className=" md:space-y-4">
//               <h1
//                 data-aos="zoom-out-right"
//                 data-aos-duration="1000"
//                 className="flex items-center gap-2"
//               >
//                 <SiTailwindcss /> TailwindCSS
//               </h1>
//               <h1
//                 data-aos="zoom-out-right"
//                 data-aos-duration="1500"
//                 className="flex items-center gap-2"
//               >
//                 <SiTailwindcss /> DaisyUI
//               </h1>
//               <h1
//                 data-aos="zoom-out-right"
//                 data-aos-duration="2000"
//                 className="flex items-center gap-2"
//               >
//                 <SiTailwindcss /> MeterialUI
//               </h1>
//               <h1
//                 data-aos="zoom-out-right"
//                 data-aos-duration="2500"
//                 className="flex items-center gap-2"
//               >
//                 <BsBootstrap /> Bootstrap
//               </h1>
//             </div>
//           </div>
//           <div className="flex gap-5 items-start">
//             <h1 className="flex items-center gap-2">
//               <SiJavascript /> Javascript
//             </h1>
//             <div className="md:space-y-4">
//               <h1
//                 data-aos="zoom-out-right"
//                 data-aos-duration="1000"
//                 className="flex items-center gap-2"
//               >
//                 <SiJavascript /> ES6
//               </h1>
//               <h1
//                 data-aos="zoom-out-right"
//                 data-aos-duration="1500"
//                 className="flex items-center gap-2"
//               >
//                 <TbBrandNextjs /> Next.JS
//               </h1>
//               <h1
//                 data-aos="zoom-out-right"
//                 data-aos-duration="2000"
//                 className="flex items-center gap-2"
//               >
//                 <FaReact /> React
//               </h1>
//               <h1
//                 data-aos="zoom-out-right"
//                 data-aos-duration="2500"
//                 className="flex items-center gap-2"
//               >
//                 <FaReact /> Vite
//               </h1>
//             </div>
//           </div>
//           <div className="flex gap-5 items-start">
//             <h1 className="flex items-center gap-2">
//               <AiFillDatabase /> Database and Backend
//             </h1>
//             <div className="md:space-y-4">
//               <h1 data-aos="zoom-out-right" data-aos-duration="1000" className="flex items-center gap-2">
//                 <AiOutlineNodeCollapse /> Node.JS
//               </h1>
//               <h1 data-aos="zoom-out-right" data-aos-duration="1500" className="flex items-center gap-2">
//                 <DiMongodb /> MongoDB CURD
//               </h1>
//               <h1 data-aos="zoom-out-right" data-aos-duration="2000" className="flex items-center gap-2">
//                 <TbFileTypography /> SQL
//               </h1>
//             </div>
//           </div>
//           <div className="flex gap-5 items-start">
//             <h1 className="flex items-center gap-2">
//               <SiInternetarchive /> Others
//             </h1>
//             <div className="md:space-y-4">
//               <h1 data-aos="zoom-out-right" data-aos-duration="1000" className="flex items-center gap-2">
//                 <AiOutlineNodeCollapse /> Formik
//               </h1>
//               <h1 data-aos="zoom-out-right" data-aos-duration="1500" className="flex items-center gap-2">
//                 <SiDatacamp />
//                 Restful API
//               </h1>
//             </div>
//           </div>
//           <div className="flex gap-5 items-start">
//             <h1 className="flex items-center md:gap-2">
//               <GoTools /> Tools
//             </h1>
//             <div className=" md:space-y-4">
//               <h1 data-aos="zoom-out-right" data-aos-duration="1000" className="flex items-center gap-2">
//                 <TbBrandVisualStudio /> VSCode
//               </h1>
//               <h1 data-aos="zoom-out-right" data-aos-duration="1500" className="flex items-center gap-2">
//                 <FaChrome /> Chrome Dev Tool
//               </h1>
//               <h1 data-aos="zoom-out-right" data-aos-duration="2000" className="flex items-center gap-2">
//                 <FaNpm /> NPM
//               </h1>
//               <h1 data-aos="zoom-out-right" data-aos-duration="2500" className="flex items-center gap-2">
//                 <GoBrowser /> Browsers
//               </h1>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Services;

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  AiOutlineHtml5,
  AiFillDatabase,
  AiOutlineNodeCollapse,
} from "react-icons/ai";
import {
  BsBootstrap
} from "react-icons/bs";
import {
  DiCss3Full,
  DiMongodb
} from "react-icons/di";
import {
  SiJavascript,
  SiTailwindcss,
  SiDatacamp,
  SiInternetarchive
} from "react-icons/si";
import { FaReact, FaNpm } from "react-icons/fa";
import { TbBrandNextjs, TbBrandVisualStudio } from "react-icons/tb";
import { GoTools } from "react-icons/go";
import Section from "../../shared/Section/Section";

const ServiceDropdown = ({ title, services, isOpen, onToggle }) => (
  <div className="border border-[#be94f9] rounded-xl overflow-hidden">
    <button
      onClick={onToggle}
      className="w-full flex justify-between items-center p-4 bg-gray-900 hover:bg-gray-700 font-semibold text-lg"
    >
      {title}
      <span className="text-cyan-400">{isOpen ? "−" : "+"}</span>
    </button>
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          className="p-4 space-y-3 bg-gray-70 text-white"
        >
          {services.map(({ icon: Icon, label }, index) => (
            <div key={index} className="flex items-center gap-2 text-gray-50">
              <Icon />
              <span>{label}</span>
            </div>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

const Services = () => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (index) =>
    setOpenDropdown(openDropdown === index ? null : index);


  const servicesData = [
    {
      title: "Management Services",
      services: [
        { icon: AiOutlineHtml5, label: "Business Strategy Setup" },
        { icon: AiFillDatabase, label: "Digital Asset Management" },
        { icon: GoTools, label: "Project Coordination" },
        { icon: SiDatacamp, label: "Data Analysis & Reporting" },
        { icon: SiInternetarchive, label: "Competitor Research" },
      ],
    },
    {
      title: "Frontend Development",
      services: [
        { icon: AiOutlineHtml5, label: "HTML5" },
        { icon: DiCss3Full, label: "CSS3" },
        { icon: SiTailwindcss, label: "TailwindCSS" },
        { icon: BsBootstrap, label: "Bootstrap" },
        { icon: SiJavascript, label: "JavaScript (ES6+)" },
        { icon: FaReact, label: "React" },
        { icon: TbBrandNextjs, label: "Next.js" },
        { icon: DiMongodb, label: "MongoDB" },
        { icon: AiOutlineNodeCollapse, label: "Node.js" },
        { icon: SiDatacamp, label: "API Integration (REST/GraphQL)" },
        { icon: SiInternetarchive, label: "Responsive Design Optimization" },
      ],
    },
    {
      title: "Software Quality Assurance (SQA)",
      services: [
        { icon: SiDatacamp, label: "Manual Testing" },
        { icon: SiInternetarchive, label: "Bug Reporting" },
        { icon: GoTools, label: "Automation Tools Familiarity" },
        { icon: SiJavascript, label: "Unit Testing (Jest)" },
        { icon: SiInternetarchive, label: "Cross-browser Testing" },
        { icon: FaReact, label: "React Component Testing" },
      ],
    },
    {
      title: "Tools I Use",
      services: [
        { icon: TbBrandVisualStudio, label: "VSCode" },
        { icon: FaNpm, label: "NPM" },
        { icon: GoTools, label: "Git & GitHub" },
        { icon: AiFillDatabase, label: "Postman" },
        { icon: TbBrandNextjs, label: "Figma" },
        { icon: SiJavascript, label: "ESLint & Prettier" },
        { icon: SiInternetarchive, label: "Netlify" },
      ],
    },
  ];

  return (
    <div>
      <div className="sticky top-3">
        <Section>SERVICES</Section>
      </div>
      <div className="w-full md:w-2/3 mx-auto space-y-5 mt-5">
        {servicesData.map((category, index) => (
          <ServiceDropdown
            key={index}
            title={category.title}
            services={category.services}
            isOpen={openDropdown === index}
            onToggle={() => toggleDropdown(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Services;
