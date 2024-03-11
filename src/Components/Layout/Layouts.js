import React from "react";
import Header from "../Pages/Header/Header";
import { Outlet } from "react-router-dom";

const Layouts = () => {
  return (
    <div>
      <div>
        <Header></Header>
      </div>
      <div className="py-10 px-8 bg-cover ">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Layouts;
