import React from 'react';

import './App.css';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';

import Carousel from './Components/UI/Carousel';
import Gallery from './Components/Gallery/Gallery';
import BigButtonPROMO from './Components/BigButtonPROMO/BigButtonPROMO';
import HomePageClause from './Components/HomePageClause/HomePageClause';

import bigPhoto from './img/bigSLIDERPHOTO.jpg'

function App() {
  return (
    <div className="App">

      <Header />
      <Footer />
      <Gallery />
      <Carousel />
      <BigButtonPROMO />


      <HomePageClause />


      <div className="bigSlider">
        <div className="bigSliderContainer">


          <div className="bigSlider__carouselItem">
            <img className='bigSlider__IMAGE' src={bigPhoto} alt="bigPhoto" />

            <div className='bigSlider__carouselCONTENT'>
              <div className='bigSlider__carouselItem__title'>Создано Иви</div>
              <div className='bigSlider__carouselItem__sinopsys'>Целый вагон впечатлений и тележка эмоций: все проекты производства Иви в одном месте. Запрыгивай!</div>
            </div>
            <div className='bigSliderButtonContainer'>
              <div className='subscribeButton'>
                <p>Оплатить подписку</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
