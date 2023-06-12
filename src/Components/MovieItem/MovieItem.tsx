import { Link } from 'react-router-dom';
import { ROUTE } from '../../router';
import styles from './styles.module.css';
import { IMovie } from '../../store/types';

interface IProps {
    movie: IMovie;
}

export const MovieItem = ({ movie }: IProps) => {
    const { id, imageName, nameRU } = movie;

    return (
        <div className={styles.movie}>
            <Link to={`${ROUTE.HOME}${ROUTE.WATCH}/${id}`}>
                <img className={styles.photo} src={`http://localhost:12120/api/films/images/${imageName}`} alt="photo" />
                <div className={styles.name}>{nameRU}</div>
            </Link>
        </div>
    );
}
