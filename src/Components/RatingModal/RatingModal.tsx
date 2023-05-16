import { useState } from 'react';
import styles from './styles.module.css';

interface RatingModalProps {
    closeModal: () => void;
}

export const RatingModal = ({ closeModal }: RatingModalProps) => {

    const [rating, setRating] = useState(0);

    const handleRatingChange = (newRating: number) => {
        setRating(newRating);
    };

    const saveRating = () => {
        closeModal();
    };

    return (
        <div className={styles.modal}>
            <a href='#' className={styles.close} onClick={closeModal}>
                &times;
            </a>
            <div className={styles.modalContent}>
                <div className={styles.title}>
                    Ваша оценка
                </div>
                <div className={styles.subtitle}>
                    Оценки улучшают рекомендации
                </div>
                <div className={styles.selector}>
                    <div className={styles.selectorBox}>
                        <a className={rating === 1 ? styles.selected : ''}
                            onClick={() => handleRatingChange(1)}>
                            1
                        </a>
                        <a className={rating === 2 ? styles.selected : ''}
                            onClick={() => handleRatingChange(2)}>
                            2
                        </a>
                        <a className={rating === 3 ? styles.selected : ''}
                            onClick={() => handleRatingChange(3)}>
                            3
                        </a>
                        <a className={rating === 4 ? styles.selected : ''}
                            onClick={() => handleRatingChange(4)}>
                            4
                        </a>
                        <a className={rating === 5 ? styles.selected : ''}
                            onClick={() => handleRatingChange(5)}>
                            5
                        </a>
                        <a className={rating === 6 ? styles.selected : ''}
                            onClick={() => handleRatingChange(6)}>
                            6
                        </a>
                        <a className={rating === 7 ? styles.selected : ''}
                            onClick={() => handleRatingChange(7)}>
                            7
                        </a>
                        <a className={rating === 8 ? styles.selected : ''}
                            onClick={() => handleRatingChange(8)}>
                            8
                        </a>
                        <a className={rating === 9 ? styles.selected : ''}
                            onClick={() => handleRatingChange(9)}>
                            9
                        </a>
                        <a className={rating === 10 ? styles.selected : ''}
                            onClick={() => handleRatingChange(10)}>
                            10
                        </a>
                    </div>
                    <div className={styles.selectorBlock}>
                        <div className={styles.left}>очень плохо</div>
                        <div className={styles.right}>отлично</div>
                    </div>
                </div>
            </div>
        </div>
    );
};
