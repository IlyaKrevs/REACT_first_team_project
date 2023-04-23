import React from 'react';

import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import PersonPage from "./pages/PersonPage/PersonPage";

function App() {
    return (
        <div className="App">
            <Header/>
            <PersonPage/>
            <Footer/>
        </div>
    );
}

export default App;
