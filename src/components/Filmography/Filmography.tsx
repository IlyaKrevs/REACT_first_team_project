import React from 'react';
import styles from './filmography.module.css';
import { Link } from 'react-router-dom';
import { ROUTE } from '../../router';
import { IMovie } from '../../store/types';
import { useSelector } from 'react-redux';


interface IProps {
    movie: IMovie;
}

const FilmographyItem: React.FC<IProps> = ({ movie }) => {
    const { id, imageName, nameRU } = movie;

    let isRussian = useSelector((state: any) => state.LanguageSwitch.isRussian);

    let ratingIviRU = 'Рейтинг Иви:';
    let ratingIviEN = 'Rating ivi';

    let lookRU = 'Смотреть';
    let lookEN = 'Look';

    let currentRatingIviText;
    let currentLookText;

    if (isRussian) {
        currentRatingIviText = ratingIviRU;
        currentLookText = lookRU;
    } else {
        currentRatingIviText = ratingIviEN;
        currentLookText = lookEN;
    }


    return (
        <Link to={`${ROUTE.HOME}${ROUTE.WATCH}/${id}`} className={styles.item}>
            <div className={styles.photo}>
                <img src={`http://localhost:12120/api/films/images/${movie.imageName}`}
                    alt='movie' className={styles.img} />
            </div>

            <div className={styles.body}>
                <div className={styles.info}>
                    <div className={styles.year}>
                        <span>
                            {movie.year}
                        </span>
                    </div>

                    <div className={styles.title}>
                        {isRussian ? movie.nameRU : movie.nameEN}
                    </div>

                    <div className={styles.rating}>
                        {currentRatingIviText + ' '}

                        <span>
                            {movie.rating}
                        </span>

                    </div>
                </div>

                <button
                    className={styles.btn}
                >
                    {currentLookText}
                </button>

            </div>
        </Link>
    )
}
export default FilmographyItem;