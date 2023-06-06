import { useState } from 'react';
import { useAppSelector } from '../../store';
import { getMovies } from '../../store/selector';
import FilmographyItem from '../Filmography/Filmography';
import { Tabs } from '../Tabs/Tabs';
import styles from './styles.module.css';

export const FullFilmography = () => {
    const movies = useAppSelector(getMovies);
    const [visibleMovies, setVisibleMovies] = useState(8);

    const showMoreMovies = () => {
        setVisibleMovies((prevVisibleMovies) => prevVisibleMovies + 10);
    };
    return (
        <div className={styles.filmography}>
            <div className={styles.content}>
                <div className={styles.title}>
                    Полная фильмография
                    <span className={styles.fullFilm}>{movies?.length} фильм</span>
                </div>
            </div>
            <Tabs />
            <div className={styles.filmographyList}>
                {movies?.slice(0, visibleMovies).map((movie) => (
                    <FilmographyItem key={movie.id} movie={movie} />
                ))}
                {movies && visibleMovies < movies.length && (
                    <button className={styles.btn} onClick={showMoreMovies}>
                        Еще {movies?.length} фильм
                    </button>
                )}
            </div>
        </div>
    )
}