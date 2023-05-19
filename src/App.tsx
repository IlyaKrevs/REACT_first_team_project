import React from 'react';

import './App.css';

import HeaderNavContainer from './Components/Header/HeaderTop/HeaderNavContainer/HeaderNavContainer';
import RectangleBtn from './Components/Buttons/RectangleBtn/RectangleBtn';
import Header from './Components/Header/Header';
import PageSection from './Components/PageSection/PageSection';
import Footer from './Components/Footer/Footer';
import FilmCard from './Components/FilmCard/FilmCard';
import FilmCardEmpty from './Components/FilmCard/FilmCardEmpty';
import Carousel from './Components/Carousel/Carousel';



function App() {



  return (
    <div className="App">
      <div className="mainWrapper">



        <Header />


        <PageSection>

          <Carousel />


        </PageSection>



        <Footer />



      </div>
    </div >
  );
}

export default App;
