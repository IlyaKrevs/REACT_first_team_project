import React from 'react';
import classes from './FilmCardHoverTopContainer.module.css'
import FilmCardRatingLine from '../../RatingLine/FilmCardRatingLine';

const FilmCardHoverTopContainer = () => {

    let thisSize = 'small';

    let progressArr = [30, 40, 50, 60];

    return (
        <div className={classes.container}>
            <div className={classes.text}>8,1</div>
            <div className={classes.ratingContainer}>

                {progressArr.map((item, index) => {
                    return <FilmCardRatingLine key={index} size={thisSize} progressValue={item} />
                })}
            </div>

        </div>
    );
};

export default FilmCardHoverTopContainer;