import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './styles.module.css';
import { faThumbsDown, faThumbsUp, faUser } from '@fortawesome/free-regular-svg-icons';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../store';
import { selectComments } from '../../store/selector/commentsSelector';
import { addComment, deleteComment } from '../../store/slice/commentsSlice';

interface Comment {
    id: string;
    text: string;
    author: string;
    date: string;
}

export const Form = () => {
    const [value, setValue] = useState('');
    const dispatch = useDispatch();
    const comments = useAppSelector(selectComments);
    const storedComments = localStorage.getItem('comments');
    const hasStoredComments = storedComments && JSON.parse(storedComments).length > 0;

    useEffect(() => {
        const storedComments = localStorage.getItem('comments');
        if (storedComments) {
            dispatch(addComment(JSON.parse(storedComments)));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('comments', JSON.stringify(comments));
    }, [comments]);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    };

    const handleSubmit = (event: any) => {
        event.preventDefault();
        const newComment: Comment = {
            id: crypto.randomUUID(),
            text: value,
            author: 'Ольга',
            date: '9 октября 2017',
        };
        dispatch(addComment(newComment));
        setValue('');
    };

    const handleDeleteComment = (commentId: string) => {
        dispatch(deleteComment(commentId));
    };

    return (
        <div className={styles.reviews}>
            <div className={styles.comment}>
                <FontAwesomeIcon icon={faUser} className={styles.icon} />
                <input type='text' value={value} placeholder='Расскажите первым о персоне' className={styles.review} onChange={handleChange} />
                <button className={styles.btn} type="submit" onClick={handleSubmit}>Отправить</button>
            </div>
                <ul className={styles.comments}>
                    {comments.map((comment) => (
                        <li key={comment.id} className={styles.item}>
                            <div className={styles.wrap}>
                                <FontAwesomeIcon icon={faUser} className={styles.icon} />
                                <div className={styles.wrapper}>
                                    <div className={styles.list}>
                                        <div className={styles.author}>{comment.author}</div>
                                        <div className={styles.date}>{comment.date}</div>
                                        <button className={styles.button} onClick={() => handleDeleteComment(comment.id)}>
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
