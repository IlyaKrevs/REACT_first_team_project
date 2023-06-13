import styles from './styles.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsDown, faThumbsUp } from '@fortawesome/free-regular-svg-icons';
import { useState } from 'react';
import { Registration } from '../Registration/Registration';
import { Comment } from '../../store/types/comments';

interface IProps {
  comment: Comment, 
}

export const Comments = ({ comment }: IProps) => {
  const [showModal, setShowModal] = useState(false);
  const handleClose = () => {
    setShowModal((prevShowModal) => !prevShowModal);
  };

  return (
    <div className={styles.comments}>
      <div className={styles.wrap}>
        <div className={styles.author}>{comment.profile.profileName}</div>
        <button className={styles.button}>
          &times;
        </button>
      </div>
      <div className={styles.text}>{comment.text}</div>

      <div className={styles.item}>
        <div className={styles.date}>{comment.idFilm}</div>
        <div className={styles.vote}>
          <button className={styles.btn} onClick={handleClose}>
            <FontAwesomeIcon icon={faThumbsUp} className={styles.icon} />
          </button>
          <div className={styles.value}>4</div>
          <button className={styles.btn} onClick={handleClose}>
            <FontAwesomeIcon icon={faThumbsDown} className={styles.icon} />
          </button>
        </div>
      </div>
      {showModal && (
        <Registration onClick={handleClose}>
        </Registration>
      )}
    </div>
  );
}

