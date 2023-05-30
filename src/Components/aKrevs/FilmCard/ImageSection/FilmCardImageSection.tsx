import React from 'react';

import classes from './FilmCardImageSection.module.css'

import FilmCardImageWrapper from './Image/FilmCardImageWrapper';
import FilmCardHoverContainer from './Hover/FilmCardHoverContainer';
import FilmCardAgeBage from './AgeBage/FilmCardAgeBage';
import { FilmCardProps } from '../FilmCard';



const FilmCardImageSection = ({ fullObj }: FilmCardProps) => {
    return (
        <div className={classes.imgSection}>

            <FilmCardImageWrapper fullObj={fullObj} />

            <FilmCardHoverContainer fullObj={fullObj} />

            <FilmCardAgeBage fullObj={fullObj} />
        </div>
    );
};

export default FilmCardImageSection;