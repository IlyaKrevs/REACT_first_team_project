import React from 'react';
import classes from './FilmCardEmpty.module.css';

const FilmCardEmpty = () => {

    let textRU = 'Посмотреть все';
    let textENG = 'Look all';

    let currentLanguage = textRU;

    return (
        <div className={classes.emptyItem}>
            <div className={classes.emptyItemText}>
                {currentLanguage}
            </div>
        </div>
    );
};

export default FilmCardEmpty;