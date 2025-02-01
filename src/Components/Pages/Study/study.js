import React from 'react'
import { TypeAnimation } from "react-type-animation";

function Study() {
    const courses = [
        {
            title: "IT Support Services Course (SEIP)",
            duration: "May-August 2022",
            description: "Enhanced my proficiency in network management and system administration.",
        },
        {
            title: "Web Development Training",
            duration: "June 2022–December 2023",
            description: "Gained hands-on experience in designing and developing web applications.",
        },
        {
            title: "Startup Industry Exposure",
            duration: "December 2023–February 2024",
            description: "Acquired practical insights into agile software development and project management.",
        },
        {
            title: "Full-Stack Web Development Course",
            duration: "June 2023–December 2023",
            description: "Deepened my understanding of database management, cloud computing, and user-interface design.",
        },
        {
            title: "Computer Science Engineering Fundamentals – Phitron",
            duration: "Advanced Course",
            description: "Strengthened my grasp of data structures, algorithms, and system architecture.",
        },
    ];
    return (
        <div className="my-10 min-h-screen">
            <div
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1500"
                className="sticky top-1 py-8"
            >
                <h1 className="md:text-3xl text-[#be94f9] text-xl flex gap-3 items-center text-start font-semibold">
                    Study
                </h1>
                <hr className="md:w-28 w-16" />
            </div>
            {/* <div className="bg-gray-900 p-6 rounded-lg shadow-sm">
                <h2 className="text-2xl font-bold text-customPurple mb-6">Professional Training and Courses</h2>
                <ul className="space-y-4">
                    {courses.map((course, index) => (
                        <li
                            key={index}
                            className="p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border-l-4 border-customPurple"
                        >
                            <h3 className="text-xl font-semibold text-gray-100">{course.title}</h3>
                            <p className="text-sm text-customPurple mt-1">{course.duration}</p>
                            <p className="text-gray-500 mt-2">{course.description}</p>
                        </li>
                    ))}
                </ul>
            </div> */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
                <h2 className="text-2xl font-bold text-black mb-6">
                    <TypeAnimation
                        sequence={[
                            'Professional Training and Courses',
                            1000, // Pause for 1 second
                            'My Skills and Expertise',
                            1000, // Pause for 1 second
                        ]}
                        repeat={Infinity} // Loop the animation infinitely
                        speed={50} // Typing speed
                        style={{ display: 'inline-block' }}
                    />
                </h2>
                <ul className="space-y-4">
                    {courses.map((course, index) => (
                        <li
                            key={index}
                            className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border-l-4 border-customPurple"
                        >
                            <h3 className="text-xl font-semibold text-black">{course.title}</h3>
                            <p className="text-sm text-customPurple mt-1">{course.duration}</p>
                            <p className="text-gray-800 mt-2">{course.description}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Study