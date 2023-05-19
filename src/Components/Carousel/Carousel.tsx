import React from 'react';
import classes from './Carousel.module.css';

import FilmCard from '../FilmCard/FilmCard';
import FilmCardEmpty from '../FilmCard/FilmCardEmpty';
import Arrow from '../Arrow/Arrow';

const Carousel = () => {
    return (
        <div className={classes.mainContainer}>
            <div className={classes.leftArrowContainer}>
                <Arrow direction='left' />
            </div>

            <div className={classes.viewPort}>


                <div className={classes.lenta}>

                    <FilmCard />
                    <FilmCard />
                    <FilmCard />
                    <FilmCard />
                    <FilmCardEmpty />
                    <FilmCardEmpty />
                    <FilmCardEmpty />

                    <FilmCard />
                    <FilmCard />
                    <FilmCard />
                    <FilmCard />
                    <FilmCard />
                    <FilmCard />



                </div>

            </div>

            <div className={classes.rightArrowContainer}>
                <Arrow direction='right' />
            </div>
        </div>
    );
};

export default Carousel;