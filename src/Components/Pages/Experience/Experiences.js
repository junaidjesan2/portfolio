import Section from "../../shared/Section/Section";

// const Experiences = () => {
//     const jobs = [
//         {
//             date: "Auguest 2024 - Present",
//             title: "Country Manageer (Bangladesh)",
//             company: "Fly Away International",
//             location: "Hybrid",
//             details: [
//                 "Single - handedly manage all Bangladesh operations for the consultancy, acting as the primary liaison between international universities, banking partners, and 300 + students annually, ensuring seamless end - to - end service delivery.",
//                 "Collaborate directly with 15 + global universities to streamline admissions, visa processes, and scholarship opportunities, increasing student enrollment rates by 100 % since 2024.",
//                 "Oversee financial operations with partner banks, resolving complex documentation issues and reducing payment processing delays by 7 days through improved workflow coordination.",
//                 "Provide personalized counseling to students, guiding them on university selection, visa applications, and career pathways, achieving a 95 % client satisfaction rate and a 30 % increase in referral - based enrollments.",
//                 "Troubleshoot critical challenges by liaising with embassies and academic institutions, recovering 90 % of at - risk applications through proactive resolution strategies.",
//                 "Maintain a centralized database of 200 + student records, ensuring GDPR - compliant data management and real time reporting for stakeholders using various types of software's and tools.",
//                 "Design and conduct pre - departure workshops on cultural adaptation and academic success, equipping 150 + students annually with actionable strategies for overseas transitions."
//             ]
//         },
//         {
//             date: "December 2022 - February 2023",
//             title: "Frontend Web Developer",
//             company: "REPLIQ Limited",
//             location: "Dhaka, Bangladesh",
//             details: [
//                 "Developed and maintained responsive web applications using React.js and Next.js, leveraging server-side rendering (SSR) and static site generation (SSG) to optimize performance and SEO.",
//                 "Implemented modern UI components with Tailwind CSS, ensuring consistent styling and mobile-first responsiveness across multiple projects.",
//                 "Streamlined form management and validation workflows using Formik, improving user experience and reducing form-related bugs.",
//                 "Integrated RESTful APIs and third-party services using Axios, enabling seamless data fetching and real-time updates for dynamic applications.",
//                 "Collaborated with cross-functional teams (designers, backend developers) to translate wireframes and user stories into functional, high-quality code.",
//                 "Followed best practices in code versioning (Git), component reusability, and performance optimization to deliver maintainable and scalable solutions."
//             ]
//         }
//     ];

//     return (
//         <section className="py-16 px-4 md:px-8">
//             <Section>
//                 Professional Journey
//             </Section>

//             <div className="max-w-4xl mx-auto">
//                 {jobs.map((job, index) => (
//                     <div key={index} className="relative pb-12">
//                         {/* Timeline line */}
//                         {index !== jobs.length - 1 && (
//                             <div className="absolute left-5 top-10 -ml-px h-full w-0.5 bg-cyan-400" />
//                         )}

//                         <div className="relative flex items-start space-x-8">
//                             {/* Timeline marker */}
//                             <div className="relative">
//                                 <div className="flex items-center justify-center w-10 h-10 bg-gray-900 rounded-full">
//                                     <div className="w-4 h-4 bg-cyan-400 rounded-full" />
//                                 </div>
//                             </div>

//                             {/* Job card */}
//                             <div className="flex-1 bg-gray-900 p-6 rounded-xl shadow-lg hover:transform hover:-translate-y-1 transition-all duration-300">
//                                 <div className="space-y-4">
//                                     <span className="text-sm font-semibold text-gray-50">{job.date}</span>
//                                     <h3 className="text-xl font-bold text-gray-50">{job.title}</h3>
//                                     <div className="flex items-center space-x-4 text-gray-50">
//                                         <span className="font-medium">{job.company}</span>
//                                         <span className="text-sm">•</span>
//                                         <span className="text-sm">{job.location}</span>
//                                     </div>
//                                     <ul className="space-y-2 pl-5">
//                                         {job.details.map((detail, i) => (
//                                             <li
//                                                 key={i}
//                                                 className="relative pl-5 text-gray-500 before:content-['▹'] before:absolute before:left-0 before:text-[#be94f9] text-justify"
//                                             >
//                                                 {detail}
//                                             </li>
//                                         ))}
//                                     </ul>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </section>
//     );
// };

// export default Experiences;

import { useState } from 'react';

const Experiences = () => {
    const [expandedJobs, setExpandedJobs] = useState({});
    const jobs = [
        {
            date: "August 2024 - Present",
            title: "Country Manager (Bangladesh)",
            company: "Fly Away International",
            location: "Hybrid",
            details: [
                "Single-handedly manage all Bangladesh operations for the consultancy, acting as the primary liaison between international universities, banking partners, and 300+ students annually, ensuring seamless end-to-end service delivery.",
                "Collaborate directly with 15+ global universities to streamline admissions, visa processes, and scholarship opportunities, increasing student enrollment rates by 100% since 2024.",
                "Oversee financial operations with partner banks, resolving complex documentation issues and reducing payment processing delays by 7 days through improved workflow coordination.",
                "Provide personalized counseling to students, guiding them on university selection, visa applications, and career pathways, achieving a 95% client satisfaction rate and a 30% increase in referral-based enrollments.",
                "Troubleshoot critical challenges by liaising with embassies and academic institutions, recovering 90% of at-risk applications through proactive resolution strategies.",
                "Maintain a centralized database of 200+ student records, ensuring GDPR-compliant data management and real-time reporting for stakeholders using various types of software's and tools.",
                "Design and conduct pre-departure workshops on cultural adaptation and academic success, equipping 150+ students annually with actionable strategies for overseas transitions."
            ]
        },
        {
            date: "December 2022 - February 2023",
            title: "Frontend Web Developer",
            company: "REPLIQ Limited",
            location: "Dhaka, Bangladesh",
            details: [
                "Developed and maintained responsive web applications using React.js and Next.js, leveraging server-side rendering (SSR) and static site generation (SSG) to optimize performance and SEO.",
                "Implemented modern UI components with Tailwind CSS, ensuring consistent styling and mobile-first responsiveness across multiple projects.",
                "Streamlined form management and validation workflows using Formik, improving user experience and reducing form-related bugs.",
                "Integrated RESTful APIs and third-party services using Axios, enabling seamless data fetching and real-time updates for dynamic applications.",
                "Collaborated with cross-functional teams (designers, backend developers) to translate wireframes and user stories into functional, high-quality code.",
                "Followed best practices in code versioning (Git), component reusability, and performance optimization to deliver maintainable and scalable solutions."
            ]
        }
    ];

    const toggleDetails = (index) => {
        setExpandedJobs(prev => ({
            ...prev,
            [index]: !prev[index]
        }));
    };

    return (
        <section className="py-16 px-4 md:px-8">
            <Section>
                Professional Journey
            </Section>

            <div className="max-w-4xl mx-auto">
                {jobs.map((job, index) => {
                    const showDetails = expandedJobs[index] ? job.details : job.details.slice(0, 2);
                    const canExpand = job.details.length > 2;

                    return (
                        <div key={index} className="relative pb-12">
                            {/* Timeline line */}
                            {index !== jobs.length - 1 && (
                                <div className="absolute left-5 top-10 -ml-px h-full w-0.5 bg-cyan-400" />
                            )}

                            <div className="relative flex items-start space-x-8">
                                {/* Timeline marker */}
                                <div className="relative">
                                    <div className="flex items-center justify-center w-10 h-10 bg-gray-900 rounded-full">
                                        <div className="w-4 h-4 bg-cyan-400 rounded-full" />
                                    </div>
                                </div>

                                {/* Job card */}
                                <div className="flex-1 bg-gray-900 p-6 rounded-xl shadow-lg hover:transform hover:-translate-y-1 transition-all duration-300">
                                    <div className="space-y-4">
                                        <span className="text-sm font-semibold text-gray-50">{job.date}</span>
                                        <h3 className="text-xl font-bold text-gray-50">{job.title}</h3>
                                        <div className="flex items-center space-x-4 text-gray-50">
                                            <span className="font-medium">{job.company}</span>
                                            <span className="text-sm">•</span>
                                            <span className="text-sm">{job.location}</span>
                                        </div>
                                        <ul className="space-y-2 pl-5">
                                            {showDetails.map((detail, i) => (
                                                <li
                                                    key={i}
                                                    className="relative pl-5 text-gray-500 before:content-['▹'] before:absolute before:left-0 before:text-[#be94f9] text-justify"
                                                >
                                                    {detail}
                                                </li>
                                            ))}
                                        </ul>
                                        
                                        {canExpand && (
                                            <button
                                                onClick={() => toggleDetails(index)}
                                                className="text-cyan-400 hover:text-cyan-300 font-medium text-sm transition-colors"
                                            >
                                                {expandedJobs[index] ? 'See Less' : 'See More'}
                                            </button>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default Experiences;