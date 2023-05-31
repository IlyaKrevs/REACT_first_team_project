import './App.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './router';

export const App = () => {

  return (
    <div className="App">
      <div className="mainWrapper">
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

