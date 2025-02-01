import React from "react";
import Services from "../Services/Services";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Home from "../Home/Home";
import Footer from "../../shared/Footer/Footer";
import Gallery from "../Gallery/Gallery";
import Study from "../Study/study";

export default function Root() {
  return (
    <div className="lg:h-screen my-auto h-40 lg:w-full bg-cover bg-center mx-auto">
      <Home></Home>
      <Services></Services>
      <About></About>
      <Study></Study>
      <Contact></Contact>
      <Gallery></Gallery>
      <Footer></Footer>
    </div>
  );
}
