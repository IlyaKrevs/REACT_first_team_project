import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './styles.module.css';
import { faThumbsDown, faThumbsUp, faUser } from '@fortawesome/free-regular-svg-icons';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../store';
import { selectComments } from '../../store/selector/commentsSelector';
import { addComment } from '../../store/slice/commentsSlice';

interface Comment {
    id: number;
    text: string;
    author: string;
    date: string;
}

export const Form = () => {
    const [value, setValue] = useState('');
    const dispatch = useDispatch();
    const comments = useAppSelector(selectComments);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const newComment: Comment = {
            id: comments.length + 1,
            text: value,
            author: 'Ольга',
            date: '9 октября 2017',
        };
        dispatch(addComment(newComment));
        setValue('');
    };

    return (
        <div className={styles.reviews}>
            <form className={styles.form} onSubmit={handleSubmit}>
                <FontAwesomeIcon icon={faUser} className={styles.icon} />
                <div className={styles.input}>
                    <input type='text' value={value} onChange={handleChange} placeholder='Расскажите первым о персоне' />
                </div>
                <button className={styles.btn} type="submit">Отправить</button>
            </form>
            {comments.length > 0 && (
                <ul className={styles.comments}>
                    {comments.map((comment) => (
                        <li key={comment.id} className={styles.item}>
                            <div className={styles.wrap}>
                                <FontAwesomeIcon icon={faUser} className={styles.icon} />
                                <div className={styles.wrapper}>
                                    <div className={styles.name}>{comment.author} {comment.date}</div>
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
            )}
        </div>
    );
};
