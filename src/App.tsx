import React from 'react';

import './App.css';
import Clause from './Components/Clause/Clause';
import ClauseUL from './Components/Clause/ClauseUL/ClauseUL';

import iviLogо from './img/ivi_logo.svg';
import HeaderList from './Components/Header/HeaderDropDown/HeaderList/HeaderList';
import MovingList from './Components/Header/HeaderDropDown/MovingList/MovingList';
import Footer from './Components/Footer/Footer';
import HeaderNavContainer from './Components/Header/HeaderTop/HeaderNavContainer/HeaderNavContainer';
import HeaderUserContainer from './Components/Header/HeaderTop/HeaderUserPanel/HeaderUserContainer/HeaderUserContainer';
import HeaderTop from './Components/Header/HeaderTop/HeaderTop';
import FilmCard from './Components/FilmCard/FilmCard';
import RectangleBtn from './Components/Buttons/RectangleBtn/RectangleBtn';
import Header from './Components/Header/Header';


function App() {



  return (
    <div className="App">
      <div className="mainWrapper">



        <Header />






        <Footer />



      </div>
    </div >
  );
}

export default App;
