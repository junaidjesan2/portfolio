import { Toaster } from "react-hot-toast";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Layouts from "./Components/Layout/Layouts";
import About from "./Components/Pages/About/About";
import Contact from "./Components/Pages/Contact/Contact";
import Resume from "./Components/Pages/Resume/Resume";
import Services from "./Components/Pages/Services/Services";
import Root from "./Components/Pages/Root/Root";
import Certificat from "./Components/Pages/Certificates/Certificat";

const portfolioRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layouts></Layouts>,
    children: [
      {
        path: "/",
        element: <Root></Root>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/resume",
        element: <Resume></Resume>,
      },
      {
        path: "/services",
        element: <Services></Services>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/certificates",
        element: <Certificat></Certificat>,
      },
    ],
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={portfolioRouter}></RouterProvider>
      <Toaster></Toaster>
    </div>
  );
}

export default App;
