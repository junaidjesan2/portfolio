
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Layouts from './Components/Layout/Layouts';
import About from './Components/Pages/About/About';
import Home from './Components/Pages/Home/Home';
import Resume from './Components/Pages/Resume/Resume';
import image from './images/junaid/316826626_1202297204054161_298509763537578578_n.jpg'

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
