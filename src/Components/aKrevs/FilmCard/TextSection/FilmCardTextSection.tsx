import React from 'react';

import classes from './FilmCardTextSection.module.css'
import { FilmCardProps } from '../FilmCard';
import { useSelector } from 'react-redux';



const FilmCardTextSection = ({ fullObj }: FilmCardProps) => {

    let isRussian = useSelector((state: any) => state.LanguageSwitch.isRussian);

    let nameText;
    let extraText;

    if (isRussian) {
        nameText = fullObj.nameRU;
        extraText = 'Бесплатно';
    } else {
        nameText = fullObj.nameEN;
        extraText = 'Free';
    }

    return (
        <div className={classes.container}>

            <div className={classes.title}>
                {nameText}
            </div>

            <div className={classes.extra}>
                {extraText}
            </div>
        </div>
    );
};

export default FilmCardTextSection;