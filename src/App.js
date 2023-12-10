
import { Toaster } from 'react-hot-toast';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Layouts from './Components/Layout/Layouts';
import About from './Components/Pages/About/About';
import Contact from './Components/Pages/Contact/Contact';
import Home from './Components/Pages/Home/Home';
import Resume from './Components/Pages/Resume/Resume';
import Services from './Components/Pages/Services/Services';
import image from './images/cover/background3.jpg'

const portfolioRouter=createBrowserRouter([
  {
    path:'/',
    element:<Layouts></Layouts>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/about',
        element:<About></About>
      },
      {
        path:'/resume',
        element:<Resume></Resume>
      },
      {
        path:'/services',
        element:<Services></Services>
      },
      {
        path:'/contact',
        element:<Contact></Contact>
      }
    ]
  }
])

function App() {
  return (
    <div className="App glass bg-slate-500">
      <RouterProvider router={portfolioRouter}></RouterProvider>
      <Toaster></Toaster>
    </div>
  );
}

export default App;
