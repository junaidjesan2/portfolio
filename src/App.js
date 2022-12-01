import logo from './logo.svg';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import { portfolioRouter } from './Components/Router/Route';

function App() {
  return (
    <div className="App ">
      <RouterProvider router={portfolioRouter}>

      </RouterProvider>
    </div>
  );
}

export default App;
