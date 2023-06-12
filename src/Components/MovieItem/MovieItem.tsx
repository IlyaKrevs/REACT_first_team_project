import { Link } from 'react-router-dom';
import { ROUTE } from '../../router';
import styles from './styles.module.css';
import { IMovie } from '../../store/types';
import { useSelector } from 'react-redux';

interface IProps {
    movie: IMovie;
}

export const MovieItem = ({ movie }: IProps) => {
    const { id, imageName, nameRU } = movie;

    let isRussian = useSelector((state: any) => state.LanguageSwitch.isRussian)



    return (
        <div className={styles.movie}>

            <Link to={generatePath(`${ROUTE.HOME + ROUTE.WATCH}` + '/' + movie.id)}>

                <img className={styles.photo}
                    src={`http://localhost:12120/api/films/images/${movie.imageName}`} />

                <div className={styles.name}>
                    {isRussian ? movie.nameRU : movie.nameEN}
                </div>

            <Link to={`${ROUTE.HOME}${ROUTE.WATCH}/${id}`}>
                <img className={styles.photo} src={`http://localhost:12120/api/films/images/${imageName}`} alt="photo" />
                <div className={styles.name}>{nameRU}</div>

            </Link>
        </div>
    );
}
