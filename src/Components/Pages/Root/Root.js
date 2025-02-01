import React from "react";
import Services from "../Services/Services";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Home from "../Home/Home";
import Footer from "../../shared/Footer/Footer";
import Gallery from "../Gallery/Gallery";
import Study from "../Study/study";
import Certificat from "../Certificates/Certificat";

export default function Root() {
  return (
    <div className="w-full mx-auto">
      <Home></Home>
      <Services></Services>
      <About></About>
      <Study></Study>
      <Certificat></Certificat>
      <Contact></Contact>
      <Gallery></Gallery>
      <Footer></Footer>
    </div>
  );
}
