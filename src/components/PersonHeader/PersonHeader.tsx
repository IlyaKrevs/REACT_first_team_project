import { FunctionComponent, useRef, useState } from 'react';
import styles from './styles.module.css';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../../store';
import { getMember } from '../../store/selector';

interface IProps {
  avatar: string;
  name: string;
  enName: string;
  scrollToBiography: () => void;
}

const PersonHeader: FunctionComponent<IProps> = ({ avatar, name, enName, scrollToBiography }) => {
  const [showDetails, setShowDetails] = useState(false);
  const member = useAppSelector(getMember);
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
      <div className={styles.biography} >
        <p className={`${styles.text} ${showDetails ? styles.expanded : ''}`}>
          {member?.member.text}
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
      <div className={styles.anchor} >
        <Link to="" className={styles.text} onClick={scrollToBiography}>
          Биография
        </Link>
      </div>
    </div>
  );
};

export default PersonHeader;
