import { FunctionComponent, useState } from 'react';
import styles from './styles.module.css';
import { Link } from 'react-router-dom';
import { getMovie, useAppSelector } from '../../store';
import { getMember } from '../../store/selector';

import { useSelector } from 'react-redux';

import { ROUTE } from '../../router';
import { IMovie } from '../../store/types';


interface IProps {
  avatar: string;
  name: string;
  enName: string;
  scrollToBiography: () => void;
  closeModal: () => void;
}


const PersonHeader: FunctionComponent<IProps> = ({ avatar, name, enName, scrollToBiography }) => {


const PersonHeader: FunctionComponent<IProps> = ({ avatar, name, enName, scrollToBiography, closeModal }) => {

  const [showDetails, setShowDetails] = useState(false);

  const member = useAppSelector(getMember);



  const movie = useAppSelector(getMovie)

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

  const back = () => {
    closeModal();
  };


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

      <Link to={`${ROUTE.HOME}${ROUTE.WATCH}/${movie?.id}`} className={styles.close} onClick={closeModal}>
        <div className={styles.back}>
          &#8249; К фильму
        </div>
      </Link>
      <div className={styles.wrap}>
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


    </div>
  );
};

export default PersonHeader;
