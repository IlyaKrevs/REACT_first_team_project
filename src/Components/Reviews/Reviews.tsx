import { useState } from 'react';
import { Registration } from '../Registration/Registration';
import styles from './styles.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsDown, faThumbsUp } from '@fortawesome/free-regular-svg-icons';

export const Reviews = () => {
    const [showModal, setShowModal] = useState(false);
    const handleClose = () => {
        setShowModal((prevShowModal) => !prevShowModal);
    };

    return (
        <div className={styles.reviews}>

            <div className={styles.wrapper}>
                <div className={styles.author}>
                    sivilenok
                </div>
                <div className={styles.title}>
                    Камчатка: край счастливых медведей
                </div>
                <div className={styles.text}>
                    Новый сериал "Нежность" режиссера и сценариста Анны Меликян ("Фея", "Про любовь. Только для взрослых"), имеющий в своей основе концепт одноименной короткометражки 2018 года, оказывается тем самым вариантом комедийной драмы, которая радует глаз и слух и на новом, метамодернистском, уровне пересказывает сказку о Золушке.
                </div>

            </div>

            <div className={styles.vote}>
                <button className={styles.btn}
                    onClick={handleClose}>
                    <FontAwesomeIcon icon={faThumbsUp} className={styles.icon} />
                </button>

                <div className={styles.value}>
                    4
                </div>

                <button className={styles.btn}
                    onClick={handleClose}>

                    <FontAwesomeIcon icon={faThumbsDown} className={styles.icon} />
                </button>

            </div>

            {showModal && (
                <Registration onClick={handleClose}>
                </Registration>
            )}
        </div>
    )
}