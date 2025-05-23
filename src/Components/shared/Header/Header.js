import React from "react";
import { BsDownload } from "react-icons/bs";
import resume from "../../../images/resume/junaid_europass_cv.pdf";
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
      <div className="flex items-center justify-around py-5">
        <div className="flex flex-col">
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
              "Junaid Ahamed Jesan",
              500,
            ]}
            speed={50}
            style={{ fontSize: "1em" }}
            repeat={0}
          />
          <span className="font-semibold normal-case text-xs md:text-xs">
            junaidjesan2@gmail.com
          </span>
        </div>
        <div className="">
          <button
            onClick={handleResumeDownload}
            className="flex hover:text-pink-500 items-center mx-auto"
          >
            <div
              className="tooltip tooltip-bottom tooltip-secondary"
              data-tip="Download Resume"
            >
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
