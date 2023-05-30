import React from 'react';

import classes from './FilmCardAgeBage.module.css'
import { FilmCardProps } from '../../FilmCard';



const FilmCardAgeBage = ({ fullObj }: FilmCardProps) => {
    return (
        <div className={classes.container}>
            <div className={classes.text}>
                {fullObj.ageRating}
            </div>
        </div>
    );
};

export default FilmCardAgeBage;