import { MotionConfig } from 'framer-motion';
import React from 'react';
import image from '../../../images/junaid/junaid5.jpg'
import { motion } from 'framer-motion';
import { useRef } from 'react';

const About = () => {
    const constraintsRef = useRef(null)
    return (
        <div className='mb-5'>
            <div className='rounded-xl bg-gradient-to-r from-indigo-300 via-purple-500 to-pink-500 text-purple-800 py-10 px-10'>
            <div>
                <h1 className='text-3xl text-start font-semibold'>About</h1>
                <hr className='w-28 ' />
            </div>
            <motion.div
            ref={constraintsRef}
            >
            <motion.div 
            drag
            dragConstraints={constraintsRef}
            className='text-justify md:px-3 lg:px-8'>I am Junaid Ahamed Jesan an Ambivert person. Basically i am a Frontend Developer. I'm so foodie person, i love to eat food and my hobbies are Skiing, Diving, Sleeping, Astrography, Skydiving. I love to enjoy my life with my Parents Friends and Relatives. i love my mother most like whatever i have done or whatever i am doing all of this is only for my mother's happiness. And my last massage for all is <strong>Bepar Na</strong>.</motion.div>
            </motion.div>
            </div>
            <div className='md:flex mx-auto gap-12 mt-10'>
                <motion.div
                whileHover={{ scale: 1.2, rotate: 90 }}
                whileTap={{
                  scale: 0.8,
                  rotate: -180,
                  borderRadius: "100%"
                }}
                className='w-full md:w-1/3'>
                <img data-aos="zoom-in" src={image} className='rounded-full hover:border-4 ' alt="" />
                </motion.div>
                <div className='w-full md:w-2/3'>
                    <h1 className='text-2xl font-semibold text-blue-600'>Web Developer / Frontend Developer</h1>
                    <div className='md:flex text-start mt-8 gap-2 justify-evenly'>
                        <div>
                            <h1><strong>Name:</strong> Junaid Ahamed Jesan</h1>
                            <h1><strong>Phone:</strong> +880 1905039725</h1>
                            <h1><strong>E-mail:</strong> junaidjisan782@gmail.com</h1>
                            <h1><strong>City:</strong> Narayanganj, Dhaka, Bangladesh</h1>
                        </div>
                        <div>
                            <h1><strong>age:</strong> 21y</h1>
                            <h1><strong>Degree:</strong> B.Sc in Software Development (ongoing)</h1>
                            <h1><strong>Freelance:</strong> Available</h1>
                            <h1><strong>Relationship status:</strong> <span className='bg-red-500 px-2'>Single</span></h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;