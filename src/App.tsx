import React from 'react';

import './App.css';
import Clause from './Components/Clause/Clause';
import ClauseUL from './Components/Clause/ClauseUL/ClauseUL';

import FilmCardImageSection from './Components/FilmCard/ImageSection/FilmCardImageSection';
import FilmCard from './Components/FilmCard/FilmCard';



function App() {

  let myLI = <ClauseUL liArr={['123', '123', '123', '123', '123', '123']} />

  let myTEMP = <Clause title={{
    text: 'HELLO WORLD',
    type: 'big',
  }}
    description={{
      text: ['hello', 'world', myLI, 'PIZDEC YA MOZG'],
      type: 'classic',
    }} />






  return (
    <div className="App">
      <div className="mainWrapper">



        <FilmCard />


      </div>
    </div>
  );
}

export default App;
