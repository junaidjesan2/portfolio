import React from 'react';

// Styled Paragraph Component
const Section = ({ children }) => {
    const paragraphStyle = "md:text-3xl my-8 text-[#be94f9] border-l-cyan-400 border-l-4 rounded-l-md pl-4 text-xl flex gap-3 items-center text-start font-semibold"

    return <>
        <div data-aos="fade-right"
            data-aos-easing="linear"
            data-aos-duration="1500"
            className="py-3">
            <p className={paragraphStyle}>{children}</p>
        </div>
    </>
};

export default Section;