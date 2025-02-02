// import { MotionConfig } from "framer-motion";
import React from "react";
import image from "../../../images/junaid/clasic_me.png";
import { useRef } from "react";
import Section from "../../shared/Section/Section";

const About = () => {
  const constraintsRef = useRef(null);
  return (
    <div className="my-10 min-h-screen">
      <div className="sticky top-3">
        <Section>ABOUT</Section>
      </div>
      <div ref={constraintsRef}>
        <div
          drag
          dragConstraints={constraintsRef}
          className="text-justify mx-auto md:px-16 ml-28 md:ml-0"
        >
          I’m a tech enthusiast and problem solver with a burning passion for innovation and creating impactful solutions. My journey in technology has been fueled by curiosity, dedication, and a love for turning ideas into reality. With expertise in programming languages like PHP, C++, JavaScript, and frameworks like React, Next.js, and GitHub, I thrive in building dynamic, user-friendly web applications and solving complex coding challenges.
          <br />
          I’ve sharpened my skills through competitive coding on platforms like Codeforces and HackerRank, where I’ve honed my algorithmic thinking and problem-solving abilities. To further expand my knowledge, I’ve completed hands-on training programs in IT Support, Web Development, Full-Stack Development, and Computer Science Engineering. These experiences have equipped me with practical skills in network management, agile development, cloud computing, and database systems.
          <br />
          Let’s connect and create something extraordinary together! 💻✨
        </div>
      </div>
      <div className="md:flex mx-auto gap-10 mt-20">
        <div
          className="w-full md:w-2/4 drop-shadow-lg"
        >
          <img src={image} className="rounded-full border-b-4 border-cyan-400 hover:border-cyan-100 h-80 lg:ml-28 items-end" alt="" />
        </div>
        <div className="w-full md:w-2/4 md:mt-16 my-10">
          <h1 className="text-2xl font-semibold text-[#be94f9]">
            Junaid's Overview
          </h1>
          <div className="md:flex text-start gap-10 justify-evenly md:mt-5 mt-3">
            <div className="md:space-y-6 space-y-2">
              <h1 data-aos="zoom-out-up" data-aos-duration="500">
                <strong>Name:</strong> Junaid Ahamed Jesan
              </h1>
              <h1 data-aos="zoom-out-up" data-aos-duration="100">
                <strong>Phone:</strong> +880 1845338379
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
                <strong>DOB :</strong> 7th December 2002
              </h1>
              <h1 data-aos="zoom-out-up" data-aos-duration="1500">
                <strong>Degree:</strong> ...
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
