import React from 'react';

import classes from './FilmCardImageSection.module.css'

import FilmCardImageWrapper from './Image/FilmCardImageWrapper';
import FilmCardHoverContainer from './Hover/FilmCardHoverContainer';
import FilmCardAgeBage from './AgeBage/FilmCardAgeBage';

const FilmCardImageSection = () => {
    return (
        <div className={classes.imgSection}>

            <FilmCardImageWrapper />

            <FilmCardHoverContainer />

            <FilmCardAgeBage />
        </div>
    );
};

export default FilmCardImageSection;