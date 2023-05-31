import { FunctionComponent, useState } from 'react';
import styles from './styles.module.css';
import { getMovie, useAppSelector } from '../../store';

interface IProps {
  videoId: string;
}

export const Trailer: FunctionComponent<IProps> = ({ videoId }) => {
const movie = useAppSelector(getMovie);

  const [isExpanded, setIsExpanded] = useState(false);

  const handlePlayClick = () => {
    setIsExpanded(true);
  };

  const handleCloseClick = () => {
    setIsExpanded(false);
  };

  const domain = process.env.NODE_ENV === 'production' ? '' : 'http://localhost:12120';

  const imageUrl = `${domain}/api/films/images/${(movie?.movieDetails?.imageName || '')}.jpg`;

  return (
    <div className={isExpanded ? styles.modalOverlay : ''}>
      {!isExpanded ? (
        <div className={styles.container} onClick={handlePlayClick}>
          <img
            className={styles.picture}
            src={imageUrl}
            alt="Trailer Thumbnail"
          />
          <div className={styles.title}></div>
          <div className={styles.subtitle}>1 мин.</div>
        </div>
      ) : (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <iframe
              className={styles.frame}
              src={`https://www.youtube.com/embed/${videoId}`}
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
