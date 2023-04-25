import React from 'react';

import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import PersonPage from "./pages/PersonPage/PersonPage";

import Carousel from './components/UI/Carousel';

function App() {
    return (
        <div className="App">
            <Carousel/>

            <Header/>
            <PersonPage/>
            <Footer/>
        </div>
    );
}

export default App;
