import React from 'react';
import './App.css';
<<<<<<< HEAD
=======


>>>>>>> 127f6ec208cd31cfcf52992ad3c6bdc9adf2f858
import { RouterProvider } from 'react-router-dom';
import { router } from './router';
import { useDispatch, useSelector } from 'react-redux';
import { setAllGenresFromServer } from './store/slice/serverDataSlice/genresSlice';


export const App = () => {

<<<<<<< HEAD
=======
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

  const { useEffect } = React;

  let dispatch = useDispatch();

  let giveMeAllGernresArr = () => {
    fetch('http://localhost:12120/api/genres')
      .then(response => response.json())
      .then(data => dispatch(setAllGenresFromServer({
        value: data,
      })));
  }



  useEffect(() => {
    giveMeAllGernresArr();
  }, [])


>>>>>>> 127f6ec208cd31cfcf52992ad3c6bdc9adf2f858
  return (
    <div className="App">
      <div className="mainWrapper">
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

