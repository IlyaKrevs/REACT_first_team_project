import { useState } from 'react';
import { useAppSelector } from '../../store';
import { getMovies } from '../../store/selector';
import FilmographyItem from '../Filmography/Filmography';
import { Tabs } from '../Tabs/Tabs';
import styles from './styles.module.css';
import { useSelector } from 'react-redux';

export const FullFilmography = () => {

    const movies = useAppSelector(getMovies);
    const [visibleMovies, setVisibleMovies] = useState(8);


    const showMoreMovies = () => {
        setVisibleMovies((prevVisibleMovies) => prevVisibleMovies + 10);
    };


    let isRussian = useSelector((state: any) => state.LanguageSwitch.isRussian);


    let allFilmsRU = 'Полная фильмография';
    let allFilmsEN = 'Complete filmography';

    let filmRU = 'фильм';
    let filmEN = 'movie';

    let moreRU = 'Еще';
    let moreEN = 'More';


    let currentAllFilmsText;
    let currentFilmText;
    let currentMoreText;


    if (isRussian) {
        currentAllFilmsText = allFilmsRU;
        currentFilmText = filmRU;
        currentMoreText = moreRU;
    } else {
        currentAllFilmsText = allFilmsEN;
        currentFilmText = filmEN;
        currentMoreText = moreEN;
    }

    return (

        <div className={styles.filmography}>

            <div className={styles.content}>
                <div className={styles.title}>
                    {currentAllFilmsText}
                    <span className={styles.fullFilm}>
                        {movies?.length + ' '}
                        {currentFilmText}
                    </span>
                </div>
            </div>

            <Tabs />

            <div className={styles.filmographyList}>

                {movies?.slice(0, visibleMovies).map((movie) => (
                    <FilmographyItem key={movie.id} movie={movie} />
                ))
                }



                {movies && visibleMovies < movies.length && (
                    <button className={styles.btn} onClick={showMoreMovies}>
                        {currentMoreText}
                        {movies?.length}
                        {currentFilmText}
                    </button>
                )}

            </div>
        </div>
    )
}