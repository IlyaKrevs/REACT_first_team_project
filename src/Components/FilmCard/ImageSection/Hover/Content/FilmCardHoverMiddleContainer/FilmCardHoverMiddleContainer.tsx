import React from 'react';

import classes from './FilmCardHoverMiddleContainer.module.css'
import { text } from 'stream/consumers';
import FilmCardRatingLine from '../../RatingLine/FilmCardRatingLine';


interface MiddleProps {
    text?: string,
    currentProgress?: number,
}

const FilmCardHoverMiddleContainer = ({ text, currentProgress }: MiddleProps) => {

    let thisSize = 'big';
    let thisProgress = 55;

    return (
        <div className={classes.container}>
            <div className={classes.text}>
                {text || 'сюжет'}
            </div>

            <FilmCardRatingLine size={thisSize} progressValue={currentProgress || thisProgress} />
        </div>
    );
};

export default FilmCardHoverMiddleContainer;