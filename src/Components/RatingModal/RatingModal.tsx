import { useEffect, useState } from 'react';
import styles from './styles.module.css';
import { Wrapper } from '../Wrapper/Wrapper';
import { Portal } from '../Portal/Portal';
import { TargetPortal } from '../../config';
import { Link } from 'react-router-dom';

interface IProps {
    closeModal: () => void;
}

export const RatingModal = ({ closeModal }: IProps) => {
    const [rating, setRating] = useState(0);
    const [ratingAccepted, setRatingAccepted] = useState(false);

    const handleRatingChange = (newRating: number) => {
        setRating(newRating);
        setRatingAccepted(true);
    };

    const saveRating = () => {
        closeModal();
    };

    const ratingOptions = Array.from(Array(10), (_, index) => index + 1);

    useEffect(() => {
        if (ratingAccepted) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    }, [ratingAccepted]);

    return (
        <Portal target={TargetPortal.MODAL}>
            <div className={styles.modal}>
                <Link to="#" className={styles.close} onClick={closeModal}>
                    &times;
                </Link>
                {ratingAccepted ? (
                    <div className={styles.modalContent}>
                        <Wrapper>
                            <div className={styles.icon}>
                                <div className={styles.checkmark}></div>
                            </div>
                            <div className={styles.title}>Ваша оценка принята</div>
                            <div className={styles.subtitle}>
                                Спасибо, что поделились своим мнением
                            </div>
                        </Wrapper>
                    </div>
                ) : (
                    <div className={styles.modalContent}>
                        <Wrapper>
                            <div className={styles.title}>Ваша оценка</div>
                            <div className={styles.subtitle}>Оценки улучшают рекомендации</div>
                            <div className={styles.selector}>
                                <div className={styles.selectorBox}>
                                    {ratingOptions.map((option) => (
                                        <a
                                            key={option}
                                            className={rating === option ? styles.selected : ''}
                                            onClick={() => handleRatingChange(option)}
                                        >
                                            {option}
                                        </a>
                                    ))}
                                </div>
                                <div className={styles.selectorBlock}>
                                    <div className={styles.left}>очень плохо</div>
                                    <div className={styles.right}>отлично</div>
                                </div>
                            </div>
                        </Wrapper>
                    </div>
                )}
            </div>
        </Portal>
    );
};
