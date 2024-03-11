import React from "react";
import Header from "../Pages/Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "../Pages/Footer/Footer";

const Layouts = () => {
  return (
    <div>
      <div>
        <Header></Header>
      </div>
      <div className="py-10 min-h-screen px-8 bg-cover ">
        <Outlet></Outlet>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Layouts;
