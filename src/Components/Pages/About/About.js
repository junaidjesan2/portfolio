import { MotionConfig } from "framer-motion";
import React from "react";
import image from "../../../images/junaid/junaid5.jpg";
import { motion } from "framer-motion";
import { useRef } from "react";


const About = () => {
  const constraintsRef = useRef(null);
  return (
    <div className="my-10 min-h-screen">
      <div className="sticky top-1 py-8">
        <h1 className="md:text-3xl text-xl flex gap-3 items-center text-start font-semibold">
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
          I am Junaid Ahamed Jesan an Ambivert person. Basically i am a Frontend
          Developer. I'm so foodie person, i love to eat food and my hobbies are
          Skiing, Diving, Sleeping, Astrography, Skydiving. I love to enjoy my
          life with my Parents Friends and Relatives. i love my mother most like
          whatever i have done or whatever i am doing all of this is only for my
          mother's happiness. And my last massage for all is{" "}
          <strong>Bepar Na</strong>.
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
          <img src={image} className="rounded-full h-32 w-32" alt="" />
        </motion.div>
        <div className="w-full md:w-2/3 md:mt-16">
          <h1 className="text-2xl font-semibold text-blue-600">
            Web Developer / Frontend Developer
          </h1>
          <div className="md:flex text-start gap-10 justify-evenly md:mt-5">
            <div className="md:space-y-6">
              <h1>
                <strong>Name:</strong> Junaid Ahamed Jesan
              </h1>
              <h1>
                <strong>Phone:</strong> +880 1905039725
              </h1>
              <h1>
                <strong>E-mail:</strong> junaidjesan2@gmail.com
              </h1>
              <h1>
                <strong>City:</strong> Narayanganj, Dhaka, Bangladesh
              </h1>
            </div>
            <div className="md:space-y-6">
              <h1>
                <strong>age:</strong> 22y
              </h1>
              <h1>
                <strong>Degree:</strong> B.Sc in Software Development (ongoing)
              </h1>
              <h1>
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
