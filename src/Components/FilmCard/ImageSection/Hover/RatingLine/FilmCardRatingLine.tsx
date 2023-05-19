import React from 'react';

import classes from './FilmCardRatingLine.module.css'

interface RatingLineProps {
    size: string,
    progressValue?: number,
}

const FilmCardRatingLine = ({ size, progressValue }: RatingLineProps) => {

    let currentSize;

    if (size === 'big') {
        currentSize = classes.bigLine
    } else if (size === 'small') {
        currentSize = classes.smallLine
    }

    return (
        <div className={[classes.mainLine, currentSize].join(' ')}>
            <div className={[classes.progressLine, currentSize].join(' ')} style={{ width: `${progressValue}%` }}></div>
        </div >
    );
};

export default FilmCardRatingLine;