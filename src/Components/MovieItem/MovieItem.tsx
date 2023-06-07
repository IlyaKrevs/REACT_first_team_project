import { Link, generatePath } from 'react-router-dom';
import { ROUTE } from '../../router';
import styles from './styles.module.css';
import { IMovie } from '../../store/types';

interface IProps {
    movie: IMovie;
}

export const MovieItem = ({ movie }: IProps) => {

    return (
        <div className={styles.movie}>
            <Link to={generatePath(`${ROUTE.HOME + ROUTE.WATCH}`, { id: movie.id })}>
                <img className={styles.photo} src={`http://localhost:12120/api/films/images/${movie.imageName}`} />
                <div className={styles.name}>{movie.nameRU}</div>
            </Link>
        </div>
    )
}