
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Layouts from './Components/Layout/Layouts';
import About from './Components/Pages/About/About';
import Home from './Components/Pages/Home/Home';
import Resume from './Components/Pages/Resume/Resume';
import Services from './Components/Pages/Services/Services';

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
      }
    ]
  }
])

function App() {
  return (
    <div className="App">
      <RouterProvider router={portfolioRouter}></RouterProvider>
    </div>
  );
}

export default App;
