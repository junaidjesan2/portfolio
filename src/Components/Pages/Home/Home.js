import React from "react";
import About from "../About/About";
import Services from "../Services/Services";
import Contact from "../Contact/Contact";

const Home = () => {
  return (
    <>
      <div className="lg:h-screen my-auto h-40 lg:w-full bg-cover bg-center mx-auto">
        <h1 className="lg:text-start text-4xl lg:ml-32 flex mx-auto items-center">
          Frontend Developer / Web Developer
        </h1>
      </div>
      <Services></Services>
      <About></About>
      <Contact></Contact>
    </>
  );
};

export default Home;
