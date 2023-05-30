import React from 'react';

import classes from './FilmCard.module.css'

import FilmCardImageSection from './ImageSection/FilmCardImageSection';
import FilmCardTextSection from './TextSection/FilmCardTextSection';


export interface FilmCardProps {
    fullObj: {
        id: number,
        nameRU: string,
        nameEN: string,
        ageRating: string,
        rating: number,
        countRating: number,
        duration: number,
        year: number,

        country: {
            id: number,
            nameEN: string,
            nameRU: string,
        },

        genres: {
            id: number,
            nameEN: string,
            nameRU: string,
        }[],

        imageName: string,
    },
}



const FilmCard = ({ fullObj }: FilmCardProps) => {





    return (
        <div className={classes.item}>

            <FilmCardImageSection fullObj={fullObj} />

            <FilmCardTextSection fullObj={fullObj} />
        </div>
    );
};

export default FilmCard;