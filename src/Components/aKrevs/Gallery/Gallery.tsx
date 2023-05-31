import React from 'react';
import classes from './Gallery.module.css';

import Carousel from '../Carousel/Carousel';
import TitleText from '../Text/TitleText/TitleText';
import Arrow from '../Arrow/Arrow';
import { useSelector } from 'react-redux';

interface GalleryProps {
    children: React.ReactNode[];
    titleText: {
        id: number,
        nameRU: string,
        nameEN: string,
    }
}

const Gallery = ({ children, titleText }: GalleryProps) => {

    const isRussian = useSelector((state: any) => state.LanguageSwitch.isRussian)

    let currentText;

    if (isRussian) {
        currentText = titleText.nameRU[0].toUpperCase() + titleText.nameRU.slice(1);
    } else {
        currentText = titleText.nameEN[0].toUpperCase() + titleText.nameEN.slice(1);
    }



    return (
        <div className={classes.mainContainer}>

            <div className={classes.galleryTitleContainer}>
                <TitleText type='medium' text={currentText} />
                <Arrow size='medium' direction='right' />
            </div>

            <Carousel children={children} emptyItem={true} />

        </div>
    );
};

export default Gallery;