import { Outlet } from "react-router-dom";
import Header from "../shared/Header/Header";
import Footer from "../shared/Footer/Footer";

const Layouts = () => {
  return (
    <div>
      <div>
        <Header></Header>
      </div>
      <div className="lg:px-10 mx-auto">
        <Outlet></Outlet>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Layouts;
