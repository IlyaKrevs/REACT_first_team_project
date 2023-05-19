import { RouterProvider } from 'react-router-dom';
import { router } from './router';
import './App.css';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { setAllMovies } from 'store/slice/moviesSlice';

export const App = () => {
    const dispatch = useDispatch();

     useEffect(() => {
    fetch('http://localhost:12123/api/films')
      .then(response => response.json())
      .then(data => {
        dispatch(setAllMovies(data));
      })
      .catch(error => {
        console.error('Error fetching movies:', error);
      });
  }, []);

    return (
        <RouterProvider router={router} />
    );
}

