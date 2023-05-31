import styles from './styles.module.css';
import { IMovieDetails } from '../../store/types/movie';

interface IProps {
    movie: IMovieDetails;
}

export const SelectionMovie = () => {

    return (
        <div className={styles.selection}>
            <div className={styles.container}>
                    <img
                        className={styles.picture}
                        src={''}
                        alt=""
                    />
                    <div className={styles.title}>
                        Dramma
                    </div>
            </div>
        </div>
     )}

