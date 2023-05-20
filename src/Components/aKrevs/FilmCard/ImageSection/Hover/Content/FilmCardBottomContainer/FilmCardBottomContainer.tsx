import React from 'react';

import classes from './FilmCardBottomContainer.module.css'

const FilmCardBottomContainer = () => {
    return (
        <div className={classes.container}>
            <div className={classes.text}>
                2012-2017, США, Приключения
            </div>
            <div className={classes.text}>
                5 сезонов
            </div>
        </div>
    );
};

export default FilmCardBottomContainer;