import React, { useEffect, useRef } from 'react'
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

    const courseItemsRef = useRef([]);

    // Intersection Observer setup
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate-fade-in-up');
                        observer.unobserve(entry.target); // Stop observing after animation
                    }
                    else {
                        entry.target.classList.remove('animate-fade-in-up');
                        entry.target.classList.add('reset-animation');
                    }
                });
            },
            {
                threshold: 0.1, // Trigger when 10% of the element is visible
            }
        );

        // Observe each course item
        courseItemsRef.current.forEach((item) => {
            if (item) observer.observe(item);
        });

        // Cleanup observer
        return () => {
            courseItemsRef.current.forEach((item) => {
                if (item) observer.unobserve(item);
            });
        };
    }, []);
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
            <div className="bg-gray-900 p-6 rounded-lg shadow-sm">
                <h2 className="text-2xl font-bold text-slate-200 mb-6">
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
                <ul className="course-list space-y-4">
                    {courses.map((course, index) => (
                        <li
                            key={index}
                            data-aos="fade-up" // Animation type
                            data-aos-delay={index * 100} // Staggered delay
                            className="course-item bg-gray-700 p-6 rounded-lg shadow-sm hover:bg-gray-800 shadow-white transition-shadow border-l-4 border-customPurple"
                        >
                            <h3 className="text-xl font-semibold text-gray-50">{course.title}</h3>
                            <p className="text-sm text-customPurple mt-1">{course.duration}</p>
                            <p className="text-gray-200 mt-2">{course.description}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Study