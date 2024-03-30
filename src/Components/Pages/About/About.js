import { MotionConfig } from "framer-motion";
import React from "react";
import image from "../../../images/junaid/about-cover.jpg";
import { motion } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const constraintsRef = useRef(null);
  return (
    <div className="my-10 min-h-screen">
      <div
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500"
        className="sticky top-1 py-8"
      >
        <h1 className="md:text-3xl text-[#be94f9] text-xl flex gap-3 items-center text-start font-semibold">
          About
        </h1>
        <hr className="md:w-28 w-16" />
      </div>
      <div ref={constraintsRef}>
        <div
          drag
          dragConstraints={constraintsRef}
          className="text-justify mx-auto md:px-16 ml-28 md:ml-0"
        >
          I'm Junaid Ahamed Jesan a skilled web developer and programmer with
          one year of website development and three years of programming
          experience. My journey began with a curiosity-driven exploration of
          coding's possibilities, mastering various languages, frameworks, and
          methodologies. I'm specialize in crafting visually captivating designs
          and seamless functionality, prioritizing user experience in every
          project. I stay updated with the latest technologies, thrives in team
          environments, and is known for my collaborative spirit and strong work
          ethic.
        </div>
      </div>
      <div className="md:flex mx-auto gap-12 mt-20">
        <motion.div
          whileHover={{ scale: 1.2, rotate: 90 }}
          whileTap={{
            scale: 0.8,
            rotate: -180,
            borderRadius: "100%",
          }}
          className="w-full md:w-1/3"
        >
          <img src={image} className="rounded-full" alt="" />
        </motion.div>
        <div className="w-full md:w-2/3 md:mt-16 my-10">
          <h1 className="text-2xl font-semibold text-[#be94f9]">
            Junaid's Overview
          </h1>
          <div className="md:flex text-start gap-10 justify-evenly md:mt-5 mt-3">
            <div className="md:space-y-6 space-y-2">
              <h1 data-aos="zoom-out-up" data-aos-duration="500">
                <strong>Name:</strong> Junaid Ahamed Jesan
              </h1>
              <h1 data-aos="zoom-out-up" data-aos-duration="100">
                <strong>Phone:</strong> +880 1905039725
              </h1>
              <h1 data-aos="zoom-out-up" data-aos-duration="1500">
                <strong>E-mail:</strong> junaidjesan2@gmail.com
              </h1>
              <h1 data-aos="zoom-out-up" data-aos-duration="2000">
                <strong>City:</strong> Narayanganj, Dhaka, Bangladesh
              </h1>
            </div>
            <div className="md:space-y-6 space-y-2">
              <h1 data-aos="zoom-out-up" data-aos-duration="1500">
                <strong>age:</strong> 22y
              </h1>
              <h1 data-aos="zoom-out-up" data-aos-duration="1500">
                <strong>Degree:</strong> B.Sc in Software Development (ongoing)
              </h1>
              <h1 data-aos="zoom-out-up" data-aos-duration="1500">
                <strong>Freelance:</strong> Available
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
