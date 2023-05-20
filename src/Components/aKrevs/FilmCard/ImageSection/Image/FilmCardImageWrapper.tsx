import React from 'react';

import classes from './FilmCardImageWrapper.module.css'
import orangeCow from '../../../../../assets/img/orange_cow.jpg'


interface ImageWrapperProps {
    imageSrc?: string,
}

const FilmCardImageWrapper = ({ imageSrc }: ImageWrapperProps) => {
    return (
        <div className={classes.wrapper}>
            <img className={classes.imageProps} src={imageSrc || orangeCow} />
        </div>
    );
};

export default FilmCardImageWrapper;