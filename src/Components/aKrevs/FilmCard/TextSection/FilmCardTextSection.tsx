import React from 'react';

import classes from './FilmCardTextSection.module.css'

interface TextSectionProps {
    name?: string,
    extra?: string,
}

const FilmCardTextSection = ({ name, extra }: TextSectionProps) => {
    return (
        <div className={classes.container}>

            <div className={classes.title}>
                {name || 'Оранжевая корова'}
            </div>

            <div className={classes.extra}>
                {extra || 'Бесплатно'}
            </div>
        </div>
    );
};

export default FilmCardTextSection;