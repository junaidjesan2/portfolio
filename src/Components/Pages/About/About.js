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
      <div className="md:flex mx-auto gap-10 mt-20 aligcn-middle justify-center">
        <div
          className="w-full md:w-2/4 drop-shadow-lg"
        >
          <img src={image} className="rounded-full border-b-4 border-cyan-400 hover:border-cyan-100 h-80 lg:ml-28 items-end" alt="" />
          <div>
            <h1 className="text-xl font-semibold text-[#be94f9] text-center mt-5">
              Junaid Ahamed Jesan
            </h1>
            <h1 className="text-lg font-semibold text-[#be94f9] text-center">
              Country Manager (Bangladesh)
            </h1>
            <a
              href="https://flyawayinternational.com/"
              className="text-lg font-semibold text-[#be94f9] text-center underline">
              Fly Away International
            </a>
          </div>
        </div>

        <div className="w-full md:w-2/4 md:mt-16 my-10">
          <h1 className="text-2xl font-semibold text-[#be94f9]">
            Junaid's Overview
          </h1>
          <div className="md:flex text-start gap-10 justify-evenly md:mt-5 mt-3">
            {/* Left Column - Personal Identity */}
            <div className="md:space-y-6 space-y-2 flex-1">
              <div data-aos="zoom-out-up" data-aos-duration="500">
                <h2 className="text-lg font-semibold text-cyan-500">Essentials</h2>
                <p><strong>Full Name:</strong> Junaid Ahamed Jesan</p>
                <p><strong>Zodiac:</strong> Sagittarius ♐</p>
                <p><strong>Life Motto:</strong> "Collect moments, not things"</p>
              </div>

              <div data-aos="zoom-out-up" data-aos-duration="1000" className="mt-4">
                <h2 className="text-lg font-semibold text-cyan-500">Creative Pulse</h2>
                <p><strong>Currently Reading:</strong> Sapiens - Yuval Harari</p>
                <p><strong>Guitar Covers:</strong> 25+ Classic Rock Songs</p>
                <p><strong>Art Medium:</strong> Digital Sketching</p>
              </div>
            </div>

            {/* Right Column - Lifestyle & Passions */}
            <div className="md:space-y-6 space-y-2 flex-1 mt-4 md:mt-0">
              <div data-aos="zoom-out-up" data-aos-duration="1500">
                <h2 className="text-lg font-semibold text-cyan-500">Daily Rituals</h2>
                <p>🌅 Morning Birdwatcher</p>
                <p>☕ Specialty Coffee Enthusiast</p>
                <p>📖 Nighttime Philosophy Reader</p>
              </div>

              <div data-aos="zoom-out-up" data-aos-duration="2000" className="mt-4">
                <h2 className="text-lg font-semibold text-cyan-500">Curiosities</h2>
                <div className="flex flex-wrap gap-2">
                  <span className="badge badge-outline">Astrophotography</span>
                  <span className="badge badge-outline">Urban Gardening</span>
                  <span className="badge badge-outline">Vintage Cameras</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
