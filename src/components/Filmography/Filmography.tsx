import React from 'react';

import styles from './filmography.module.css';
import { NavLink } from 'react-router-dom';


import { IPersonFilms } from '../../types/IPersonFilms';
import ButtonLink from '../UI/ButtonLink/ButtonLink';

type PropsType = {
    movie: IPersonFilms
}

const FilmographyItem: React.FC<PropsType> = ({ movie }) => {

    return (
        <NavLink
            to={`/MoviePage/${movie.id}/${movie.name}`}
            className={styles.item}
        >
            <div className={styles.photo}>
                <div className={styles.img}></div>
            </div>
            <div className={styles.body}>
                <div className={styles.info}>
                    <div className={styles.title}>
                        {
                            movie.name.length > 16
                                ? movie.name.slice(0, 16) + '...'
                                : movie.name
                        }
                    </div>
                    {movie.rating && <div className={styles.rating}>
                        Рейтинг Иви:
                        <span>
                            {movie.rating}
                        </span>
                    </div>}
                </div>
                <ButtonLink
                    to={`/MoviePage/${movie.id}/${movie.name}`}
                    className={styles.btn}
                >
                    Смотреть
                </ButtonLink>
            </div>
        </NavLink>
    )
}
export default FilmographyItem;