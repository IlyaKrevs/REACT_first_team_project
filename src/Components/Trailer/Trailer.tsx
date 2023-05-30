import { FunctionComponent, useState } from 'react';
import styles from './styles.module.css';
import { useAppSelector } from '../../store';
import { IMovieDetails } from '../../store/types/movie';
import { getTrailer } from '../../store/selector';

interface IProps {
    videoId: string;
    //image: IMovieDetails;
}

export const Trailer: FunctionComponent<IProps> = ({ videoId }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const trailer = useAppSelector(getTrailer);

    const handlePlayClick = () => {
        setIsExpanded(true);
    };

    const handleCloseClick = () => {
        setIsExpanded(false);
    };

    return (
        <div className={isExpanded ? styles.modalOverlay : ''}>
            {!isExpanded ? (
                <div className={styles.container} onClick={handlePlayClick}>
                    <img
                        className={styles.picture}
                        src={''}
                        alt="Trailer Thumbnail"
                    />
                    <div className={styles.title}>
                    </div>
                    <div className={styles.subtitle}>
                        1 мин.
                    </div>
                </div>
            ) : (
                <div className={styles.modal}>
                    <div className={styles.modalContent}>
                        <iframe className={styles.frame}
                            src={trailer}
                            allowFullScreen
                            title="Trailer"
                        ></iframe>
                        <button className={styles.closeButton} onClick={handleCloseClick}>
                            &#x2716;
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};
