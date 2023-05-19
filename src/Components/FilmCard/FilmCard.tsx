import React from 'react';

import classes from './FilmCard.module.css'

import FilmCardImageSection from './ImageSection/FilmCardImageSection';
import FilmCardTextSection from './TextSection/FilmCardTextSection';




const FilmCard = () => {





    return (
        <div className={classes.item}>

            <FilmCardImageSection />

            <FilmCardTextSection />
        </div>
    );
};

export default FilmCard;