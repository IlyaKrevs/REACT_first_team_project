import { movie } from '../../assets';
import FilmographyItem from '../Filmography/Filmography';
import { Tabs } from '../Tabs/Tabs';
import styles from './styles.module.css';

export const FullFilmography = () => {

    const movieExample = {
        id: 1,
        name: "Аватар",
        enName: "Avatar",
        rating: 8.0,
        general: true,
        year: 2023,
        description: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
        enProfession: "en en en en",
        image: movie,
    }

    const filmography = [
        { id: 1, movie: movieExample },
        { id: 2, movie: movieExample },
        { id: 3, movie: movieExample },
        { id: 4, movie: movieExample },
        { id: 5, movie: movieExample },
    ];

    return (
        <div className={styles.filmography}>
            <div className={styles.content}>
                <div className={styles.title}>
                    Полная фильмография
                    <span className={styles.fullFilm}>1 фильм</span>
                </div>
            </div>
            <Tabs />
            <div className={styles.filmographyList}>
                {filmography.map((item) => (
                    <FilmographyItem key={item.id} movie={item.movie} />
                ))}
                <button className={styles.btn}>Еще 1 фильм</button>
            </div>
        </div>
    )
}