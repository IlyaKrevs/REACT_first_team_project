import { Link } from 'react-router-dom';
import styles from './styles.module.css';
import { ROUTE } from '../../router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsDown, faThumbsUp } from '@fortawesome/free-regular-svg-icons';
import { useState } from 'react';
import { Registration } from '../Registration/Registration';
import { deleteComment } from '../../store/slice/commentsSlice';
import { useDispatch } from 'react-redux';

interface Comment {
  id: string;
  text: string;
  author: string;
  date: string;
}

export const Comments = ({ comment }: { comment: Comment }) => {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();

  const handleClose = () => {
    setShowModal((prevShowModal) => !prevShowModal);
  };

  const handleDeleteComment = (commentId: string) => {
    dispatch(deleteComment(commentId));
  };

  return (
    <div className={styles.comments}>
      <div className={styles.wrap}>
        <div className={styles.author}>{comment.author}</div>
        <button className={styles.button} onClick={() => handleDeleteComment(comment.id)}>
          &times;
        </button>
      </div>
      <div className={styles.text}>{comment.text}</div>

      <div className={styles.item}>
        <div className={styles.date}>{comment.date}</div>
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

