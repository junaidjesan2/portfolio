import logo from './logo.svg';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import coverimg from './images/cover/cover.jpg'
import { WebRouter } from './Rout/Rout';

function App() {
  return (
    <div className="App ">
      <RouterProvider router={WebRouter}>

      </RouterProvider>
    </div>
  );
}

export default App;
