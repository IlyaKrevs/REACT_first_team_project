import React from 'react';

import classes from './FilmCardHoverMiddleContainer.module.css'
import { text } from 'stream/consumers';
import FilmCardRatingLine from '../../RatingLine/FilmCardRatingLine';
import { FilmCardProps } from '../../../../FilmCard';




const FilmCardHoverMiddleContainer = ({ fullObj }: FilmCardProps) => {

    let thisSize = 'big';
    let thisProgress = Math.trunc(fullObj.rating * 10);

    return (
        <div className={classes.container}>
            <div className={classes.text}>
                {'сюжет'}
            </div>

            <FilmCardRatingLine size={thisSize} progressValue={thisProgress} />
        </div>
    );
};

export default FilmCardHoverMiddleContainer;