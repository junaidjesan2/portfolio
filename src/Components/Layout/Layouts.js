import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../shared/Header/Header";

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
