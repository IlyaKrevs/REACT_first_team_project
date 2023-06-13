import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './styles.module.css';
import { faThumbsDown, faThumbsUp, faUser } from '@fortawesome/free-regular-svg-icons';
import { useState } from 'react';
import { useAppSelector } from '../../store';
import { selectComments } from '../../store/selector/commentsSelector';

export const Form = () => {
    const [value, setValue] = useState('');
    const comments = useAppSelector(selectComments);
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    };

    const handleSubmit = (event: any) => {
        event.preventDefault();
        const newComment: Comment[] = [];
    };

    return (
        <div className={styles.reviews}>
            <div className={styles.comment}>
                <FontAwesomeIcon icon={faUser} className={styles.icon} />
                <input type='text' value={value} placeholder='Расскажите первым о персоне' className={styles.review} onChange={handleChange} />
                <button className={styles.btn} type="submit" onClick={handleSubmit}>Отправить</button>
            </div>
                <ul className={styles.comments}>
                    {comments?.map((comment) => (
                        <li key={comment.id} className={styles.item}>
                            <div className={styles.wrap}>
                                <FontAwesomeIcon icon={faUser} className={styles.icon} />
                                <div className={styles.wrapper}>
                                    <div className={styles.list}>
                                        <div className={styles.author}>{comment.idUser}</div>
                                        <div className={styles.date}>{comment.idFilm}</div>
                                        <button className={styles.button}>
                                            &times;
                                        </button>
                                    </div>                                    
                                    <div className={styles.text}>{comment.text}</div>
                                </div>
                            </div>
                            <div className={styles.vote}>
                                <button className={styles.button}>
                                    <FontAwesomeIcon icon={faThumbsUp} className={styles.like} />
                                </button>
                                <div className={styles.value}>4</div>
                                <button className={styles.button}>
                                    <FontAwesomeIcon icon={faThumbsDown} className={styles.like} />
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
        </div>
    );
};
