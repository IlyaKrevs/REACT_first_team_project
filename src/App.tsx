import React from 'react';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './router';
import { useDispatch } from 'react-redux';
import { setAllGenresFromServer } from './store/slice/serverDataSlice/dataSlice';



export const App = () => {

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

  return (
    <div className="App">
      <div className="mainWrapper">
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

