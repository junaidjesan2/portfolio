import React from "react";
import { BsDownload } from "react-icons/bs";
import resume from "../../../images/resume/Resume-Junaid_Ahamed_Jesan.pdf";
import { TypeAnimation } from "react-type-animation";

const Header = () => {
  const handleResumeDownload = () => {
    fetch(resume).then((response) => {
      response.blob().then((blob) => {
        const fileURL = window.URL.createObjectURL(blob);
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = resume;
        alink.click();
      });
    });
  };
  return (
    <div className="" data-aos="zoom-in">
      <div className="flex items-center md:justify-around justify-between py-5">
        <div className="flex flex-col w-80">
          <TypeAnimation
            sequence={[
              "Junaid",
              500,
              "Junaid Ahamed", //  Continuing previous Text
              500,
              "Junaid Ahamed Jesan",
              500,
              "Junaid Aham",
              500,
              "Junaid",
              500,
              "",
              500,
            ]}
            speed={50}
            style={{ fontSize: "2em" }}
            repeat={Infinity}
          />
          <span className="font-semibold normal-case text-xs md:text-xs">
            junaidjesan2@gmail.com
          </span>
        </div>
        <div className="">
          <button
            onClick={handleResumeDownload}
            className="flex hover:text-pink-500 items-center gap-2 lg:gap-5 mx-auto"
          >
            <div className="tooltip tooltip-bottom" data-tip="Download Resume">
              <button className="btn">
                <BsDownload />
              </button>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
