import React from 'react';
import classes from './Gallery.module.css';

import Carousel from '../Carousel/Carousel';
import TitleText from '../Text/TitleText/TitleText';
import Arrow from '../Arrow/Arrow';
import FilmCard from '../FilmCard/FilmCard';

const Gallery = () => {

    let ruText = 'Современные мультфильмы';


    function make20items() {

        let myArr = [];

        for (let i = 0; i < 20; i++) {
            myArr.push(<FilmCard />)
        }
        return myArr;
    }


    return (
        <div className={classes.mainContainer}>

            <div className={classes.galleryTitleContainer}>
                <TitleText type='medium' text={ruText} />
                <Arrow size='medium' direction='right' />
            </div>

            <Carousel children={make20items()} type='classic' emptyItem={true} />

        </div>
    );
};

export default Gallery;