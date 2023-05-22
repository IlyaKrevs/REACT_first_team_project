import { useState } from 'react';
import styles from './styles.module.css';

interface IProps {
    videoId: string;
}

export const Trailer = ({ videoId }: IProps) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const handlePlayClick = () => {
        setIsExpanded(true);
    };

    const handleCloseClick = () => {
        setIsExpanded(false);
    };

    return (
        <>
            <div className={isExpanded ? styles.modalOverlay : ''}>
                {!isExpanded ? (
                    <div className={styles.container} onClick={handlePlayClick}>
                        <img
                            className={styles.picture}
                            src={`https://thumbs.dfs.ivi.ru/storage6/contents/2/d/48739c662594e29cc5a5ac2ba6589c.jpg/784x440/?q=85`}
                            alt="Trailer Thumbnail"
                        />
                        <div className={styles.title}>
                            Трейлер
                        </div>
                        <div className={styles.subtitle}>
                            1 мин.
                        </div>
                    </div>
                ) : (
                    <div className={styles.modal}>
                        <div className={styles.modalContent}>
                            <iframe className={styles.frame}
                                src={`https://www.ivi.tv/watch/511528`}
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
        </>
    );
};