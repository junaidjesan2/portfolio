import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../shared/Header/Header";

const Layouts = () => {
  return (
    <div>
      <div>
        <Header></Header>
      </div>
      <div className="lg:px-10 px-7 mx-auto">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Layouts;
