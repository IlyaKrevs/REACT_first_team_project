import { useState } from 'react';
import styles from './styles.module.css';

export const ButtonFilter = () => {
    const [isSubscribed, setIsSubscribed] = useState(false);
    const [isOriginal, setIsOriginal] = useState(false);
    const [isNewest, setIsNewest] = useState(false);
    const [isPopular, setIsPopular] = useState(false);
  
    const handleSubscriptionFilter = () => {
      setIsSubscribed(!isSubscribed);
    };
  
    const handleOriginalFilter = () => {
      setIsOriginal(!isOriginal);
    };
  
    const handleNewestFilter = () => {
      setIsNewest(!isNewest);
    };
  
    const handlePopularFilter = () => {
      setIsPopular(!isPopular);
    };
  
    return (
      <section className={styles.filter}>
        <div className={styles.list}>
          <button
            className={`${styles.btn} ${isSubscribed ? styles.active : ''}`}
            onClick={handleSubscriptionFilter}>
            <div className={styles.plus} />
            <div className={styles.text}>По подписке</div>
          </button>
          <button
            className={`${styles.btn} ${isOriginal ? styles.active : ''}`}
            onClick={handleOriginalFilter}>
            <div className={styles.plus} />
            <div className={styles.text}>На языке оригинала</div>
          </button>
          <button
            className={`${styles.btn} ${isNewest ? styles.active : ''}`}
            onClick={handleNewestFilter}>
            <div className={styles.plus} />
            <div className={styles.text}>Самые новые</div>
          </button>
          <button
            className={`${styles.btn} ${isPopular ? styles.active : ''}`}
            onClick={handlePopularFilter}>
            <div className={styles.plus} />
            <div className={styles.text}>Самые популярные</div>
          </button>
        </div>
      </section>
    );
  };
  
