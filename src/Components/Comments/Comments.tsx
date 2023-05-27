import { Link } from 'react-router-dom';
import styles from './styles.module.css';
import { ROUTE } from '../../router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsDown, faThumbsUp } from '@fortawesome/free-regular-svg-icons';
import { useState } from 'react';
import { Registration } from '../Registration/Registration';

export const Comments = () => {
    const [showModal, setShowModal] = useState(false);
    const handleClose = () => {
        setShowModal((prevShowModal) => !prevShowModal);
    };

    return (
        <div className={styles.comments}>
            <Link to={ROUTE.COMMENTS}>
                <div className={styles.item}>
                    <div className={styles.author}>sivilenok</div>
                    <div className={styles.text}>Чудесный и добрый фильм! Фильм о простых и добрых людях)</div>
                    <div className={styles.date}>4 августа 2022</div>
                </div>
            </Link>
            <div className={styles.vote}>
                <button className={styles.btn} onClick={handleClose}>
                    <FontAwesomeIcon icon={faThumbsUp} className={styles.icon} />
                </button>
                <div className={styles.value}>4</div>
                <button className={styles.btn} onClick={handleClose}>
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