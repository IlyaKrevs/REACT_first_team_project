import { FunctionComponent, useRef, useState } from 'react';
import styles from './styles.module.css';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../../store';
import { getMember } from '../../store/selector';
import { useSelector } from 'react-redux';

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


  let isRussian = useSelector((state: any) => state.LanguageSwitch.isRussian);



  let expandRU = 'Развернуть';
  let expandEN = 'Expand';

  let collapseRU = 'Свернуть';
  let collapseEN = 'Collapse';

  let bioTextRU = 'Биография';
  let bioTextEN = 'Biography';

  let currentExpandText;
  let currentCollapseText;
  let currentBioText;


  if (isRussian) {
    currentExpandText = expandRU;
    currentCollapseText = collapseRU;
    currentBioText = bioTextRU;
  } else {
    currentExpandText = expandEN;
    currentCollapseText = collapseEN;
    currentBioText = bioTextEN;
  }

  return (


    <div className={styles.personHeader}>

      <div className={styles.header}>

        <img src={avatar} className={styles.avatar} alt="avatar" />
      </div>


      <div className={styles.info}>

        <h2 className={styles.name}>
          {name}
        </h2>

        <span className={styles.alternate}>
          {enName}
        </span>

      </div>


      <div className={styles.biography} >
        <p className={`${styles.text} ${showDetails ? styles.expanded : ''}`}>
          {member?.member.text}
        </p>


        {!showDetails && (
          <span className={styles.toggle} onClick={toggleDetails}>
            {currentExpandText}
          </span>
        )}


        {showDetails && (
          <span className={styles.toggle} onClick={toggleDetails}>
            {currentCollapseText}
          </span>
        )}


      </div>


      <div className={styles.anchor} >
        <Link to=""
          className={styles.text}
          onClick={scrollToBiography}>
          <div className={styles.special}>
            {currentBioText}
          </div>
        </Link>
      </div>


    </div>
  );
};

export default PersonHeader;
