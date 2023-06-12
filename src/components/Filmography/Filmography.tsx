import React from 'react';
import styles from './filmography.module.css';
import { Link } from 'react-router-dom';
import { ROUTE } from '../../router';
import { IMovie } from '../../store/types';


interface IProps {
    movie: IMovie;
}

const FilmographyItem: React.FC<IProps> = ({ movie }) => {
    const { id, imageName, nameRU } = movie;

    return (
        <Link to={`${ROUTE.HOME}${ROUTE.WATCH}/${id}`} className={styles.item}>
            <div className={styles.photo}>
                <img src={`http://localhost:12120/api/films/images/${movie.imageName}`}
                    alt='movie' className={styles.img} />
            </div>
            <div className={styles.body}>
                <div className={styles.info}>
                    <div className={styles.year}>
                        <span>{movie.year}</span>
                    </div>
                    <div className={styles.title}>
                        {movie.nameRU}
                    </div>
                    <div className={styles.rating}>
                        Рейтинг Иви:
                        <span>
                            {movie.rating}
                        </span>
                    </div>
                </div>
                <button
                    className={styles.btn}
                >
                    Смотреть
                </button>
            </div>
        </Link>
    )
}
export default FilmographyItem;