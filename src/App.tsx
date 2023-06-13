import React, { useEffect } from 'react';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './router';
import { useDispatch } from 'react-redux';
import { setAllGenresFromServer } from './store/slice/serverDataSlice/dataSlice';
import { useAppSelector } from './store';
import { getUser } from './store/selector/userSelector';
import { signInAction } from './store/actions/signInAction';

export const App = () => {
  const user = useAppSelector(getUser);

  const dispatch = useDispatch();

  const giveMeAllGernresArr = () => {
    fetch('http://localhost:12120/api/genres')
      .then(response => response.json())
      .then(data => dispatch(setAllGenresFromServer({
        value: data,
      })));
  };


  useEffect(() => {
    const fetchData = async () => {
      await dispatch(signInAction() as any);
    };

    fetchData();
  }, [dispatch]);


  useEffect(() => {
    giveMeAllGernresArr();
  }, []);

  return (
    <div className="App">
      <div className="mainWrapper">
        <RouterProvider router={router(user)} />
      </div>
    </div>
  );
};
