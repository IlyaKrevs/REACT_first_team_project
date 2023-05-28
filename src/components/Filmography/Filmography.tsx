import React from 'react';
import styles from './filmography.module.css';
import { Link } from 'react-router-dom';
import { IPersonFilms } from '../../types/IPersonFilms';
import { ROUTE } from '../../router';


interface IProps {
    movie: IPersonFilms;
}

const FilmographyItem: React.FC<IProps> = ({ movie }) => {

    return (
        <Link
            to={`/${ROUTE.WATCH}/:id`}
            className={styles.item}
        >
            <div className={styles.photo}>
                <img src={movie.image} alt='movie' className={styles.img}/>
            </div>
            <div className={styles.body}>
                <div className={styles.info}>
                    {movie.year &&
                        <div className={styles.year}>
                            <span>2023</span>
                        </div>}
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
                <button
                    className={styles.btn}
                >
                    Поподробнее
                </button>
            </div>
        </Link>
    )
}
export default FilmographyItem;