import React from 'react';

import classes from './FilmCardBottomContainer.module.css'
import { FilmCardProps } from '../../../../FilmCard';
import { useSelector } from 'react-redux';

const FilmCardBottomContainer = ({ fullObj }: FilmCardProps) => {

    let isRussian = useSelector((state: any) => state.LanguageSwitch.isRussian)

    let countryText;
    let genresText;
    let durationText;

    if (isRussian) {
        countryText = fullObj.country.nameRU;
        genresText = fullObj.genres.map(item => item.nameRU).join(' ');
        durationText = 'мин'
    } else {
        countryText = fullObj.country.nameEN;
        genresText = fullObj.genres.map(item => item.nameEN).join(' ');
        durationText = 'min'
    }

    return (
        <div className={classes.container}>
            <div className={classes.text}>
                {fullObj.year + ', ' + countryText + ', ' + genresText}
            </div>
            <div className={classes.text}>
                {fullObj.duration + ' ' + durationText}
            </div>
        </div>
    );
};

export default FilmCardBottomContainer;