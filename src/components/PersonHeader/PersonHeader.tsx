import { FunctionComponent, useState } from 'react';
import styles from './styles.module.css';
import { Link } from 'react-router-dom';

interface IProps {
  avatar: string;
  name: string;
  enName: string;
}

const PersonHeader: FunctionComponent<IProps> = ({ avatar, name, enName }) => {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className={styles.personHeader}>
      <div className={styles.header}>
        <img src={avatar} className={styles.avatar} alt="avatar" />
      </div>
      <div className={styles.info}>
        <h2 className={styles.name}>{name}</h2>
        <span className={styles.alternate}>{enName}</span>
      </div>
      <div className={styles.biography}>
        <p className={`${styles.text} ${showDetails ? styles.expanded : ''}`}>
          Анатолий Хостикоев – советский и украинский актер театра и кино. Народный артист УССР. Снимался в фильмах
          «Миллион в брачной корзине» Всеволода Шиловского, «Каменная душа» Станислава Клименко, «Похороны на втором
          этаже» Александра Сташкова и Елены Аминовой, сериале «Роксолана» Бориса Небиеридзе, сериале «Сердцу не
          прикажешь».
        </p>
        {!showDetails && (
          <span className={styles.toggle} onClick={toggleDetails}>
            Развернуть
          </span>
        )}
        {showDetails && (
          <span className={styles.toggle} onClick={toggleDetails}>
            Свернуть
          </span>
        )}
      </div>
      <div className={styles.anchor}>
        <Link to="" className={styles.text}>Биография</Link>
      </div>
    </div>
  );
};

export default PersonHeader;
