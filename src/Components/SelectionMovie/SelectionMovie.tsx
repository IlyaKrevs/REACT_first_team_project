import { Link, generatePath } from 'react-router-dom';
import { IMovie } from '../../store/types';
import styles from './styles.module.css';
import { ROUTE } from '../../router';

interface IProps {
    movie: IMovie;
}

export const SelectionMovie = ({ movie }: IProps) => {

    return (
        <div className={styles.selection}>
            <div className={styles.container}>
                <Link to={generatePath(`${ROUTE.HOME + ROUTE.MOVIES}`)}>
                    <img
                        className={styles.picture}
                        src={`http://localhost:12120/api/films/images/${movie.imageName}`}
                        alt='movie'
                    />
                </Link>
                <div className={styles.title}>
                    {movie.nameEN}
                </div>
            </div>
        </div>
    )
}

