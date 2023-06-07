import { Link } from 'react-router-dom';
import styles from './styles.module.css';
import { ROUTE } from '../../router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsDown, faThumbsUp } from '@fortawesome/free-regular-svg-icons';
import { useAppSelector } from '../../store';
import { selectComments } from '../../store/selector/commentsSelector';
import { useState } from 'react';
import { Registration } from '../Registration/Registration';

export const Comments = () => {
    const [showModal, setShowModal] = useState(false);
    const comments = useAppSelector(selectComments);

    const handleClose = () => {
        setShowModal((prevShowModal) => !prevShowModal);
    };

    return (
        <div className={styles.comments}>
            {comments.map((comment) => (
                <Link to={ROUTE.COMMENTS} key={comment.id}>
                    <div className={styles.item}>
                        <div className={styles.author}>{comment.author}</div>
                        <div className={styles.text}>{comment.text}</div>
                        <div className={styles.date}>{comment.date}</div>
                    </div>
                </Link>
            ))}
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
    );
}
