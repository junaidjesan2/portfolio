import React from 'react';
import './about.css'
import 'react-icons/fc'
import { FcAbout } from 'react-icons/fc';
import image from '../../images/junaid/junaid2.jpg'

const About = () => {
    return (
        <div className='mx-10 my-14'>
            <div className=''>
                <h1 className='text-5xl flex items-center mb-4 gap-5 text-indigo-800 text-start'><FcAbout className='h-8 w-8' /> About</h1>
                <hr className='w-56 border-b-4 border-indigo-800' />
            </div>
            <div>
                <h1 className='text-justify font-serif text-base mt-5'>I am Junaid Ahamed Jesan a Frontend Developer or Web Developer. I'm so foodie person, i love to eat food and my hobbies are Skiing, Dibing, Sleeping, Astrography, Skydiving. I love to enjoy my life with my Parents Friends and Relatives. i love my mother most like what i did or what i am doing all this is only for my mother happiness.
                And my last massage for all is <strong>Bepar Na</strong>.
                </h1>
            </div>
            <div className='flex mt-10 '>
                <div className='w-1/3 gap-5'>
                    <img className='rounded-md' src={image} alt="" />
                </div>
                <div className='w-2/3 mx-10'>
                    <h1 className='text-blue-500 text-2xl font-semibold'>Frontend Developer / Web Developer</h1>
                    <div className='flex mt-14 justify-between text-xl'>
                        <div className=''>
                                <h1 className='flex items-center mb-6'> <strong>Name:</strong> Junaid Amamed Jesan</h1>
                                <h1 className='flex items-center mb-6'> <strong>Phone:</strong> +880 1905039725</h1>
                                <h1 className='flex items-center mb-6'> <strong>WhatsApp:</strong> +880 1905039725</h1>
                                <h1 className='flex items-center mb-6'> <strong>City:</strong> Narayanganj, Dhaka, Bangladesh</h1>
                        </div>
                        <div>
                            <h1 className='flex items-center mb-6'> <strong>Age:</strong> 21 y</h1>
                            <h1 className='flex items-center mb-6'><strong> Degree:</strong> Chemistry (learning) </h1>
                            <h1 className='flex items-center mb-6'> <strong>Freelance:</strong> Available </h1>
                            <h1 className='flex items-center mb-6'><strong> 
                                Marital Status: </strong>Single</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default About;