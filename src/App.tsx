import './App.css';

import { RouterProvider } from 'react-router-dom';
import { router } from './router';


export const App = () => {

  // useEffect(() => {
  //   fetch('http://localhost:12120/api/genres')
  //     .then(response => response.json())
  //     .then(data => {
  //       dispatch(setAllMovies(data));
  //     })
  //     .catch(error => {
  //       console.error('Error fetching movies:', error);
  //     });
  // }, []);



  return (
    <div className="App">
      <div className="mainWrapper">
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

