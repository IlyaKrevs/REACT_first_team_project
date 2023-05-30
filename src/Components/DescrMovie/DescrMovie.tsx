import { Link } from 'react-router-dom';
import { FunctionComponent, useState } from 'react';
import { ROUTE } from '../../router';
import { RatingModal } from '../RatingModal/RatingModal';
import { actor } from '../../assets';
import styles from './styles.module.css';
import { getMovie, useAppSelector } from '../../store';
import { getText } from '../../store/selector';

interface Props {
  nameRU: string,
  year: number,
  duration: number,
  ageRating: string,
  idCountry: number,
  rating: number,
  text: string,
}

export const DescrMovie: FunctionComponent<Props> = ({nameRU, year, duration, ageRating, idCountry, rating }) => {
  const [showDetails, setShowDetails] = useState(false);
  const text = useAppSelector(getText); 

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className={styles.descr}>
      <h1 className={styles.title}>{nameRU}</h1>
      <div className={styles.info}>
        <ul className={styles.list}>
          <li className={styles.item}>{year}&nbsp;</li>
          <li className={styles.item}>{duration}&nbsp;</li>
          <li className={styles.item}>{ageRating}&nbsp;</li>
        </ul>
        <ul className={styles.list}>
          <li className={styles.item}>{idCountry}&nbsp;</li>
          <li className={styles.item}>Триллер&nbsp;</li>
          <li className={styles.item}>Зарубежный&nbsp;</li>
        </ul>
        <ul className={styles.list}>
          <div className={styles.icons}>FullHD</div>
        </ul>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.wrap}>
          <div className={styles.inner}>{rating}</div>
          <div className={styles.text}>Рейтинг Иви</div>
        </div>
        <Link to={ROUTE.PERSON} className={styles.link}>
          <div className={styles.inner}>
            <img className={styles.photo} src={actor} alt='photo' />
          </div>
          <div className={styles.name}>Еламан Есентаев</div>
        </Link>
        <Link to={ROUTE.PERSON} className={styles.link}>
          <div className={styles.inner}>
            <img className={styles.photo} src={actor} alt='photo' />
          </div>
          <div className={styles.name}>Еламан Есентаев</div>
        </Link>
        <Link to={ROUTE.PERSON} className={styles.link}>
          <div className={styles.inner}>
            <img className={styles.photo} src={actor} alt='photo' />
          </div>
          <div className={styles.name}>Еламан Есентаев</div>
        </Link>
        <Link to={ROUTE.PERSON} className={styles.link}>
          <div className={styles.inner}>
            <img className={styles.photo} src={actor} alt='photo' />
          </div>
          <div className={styles.name}>Еламан Есентаев</div>
        </Link>
      </div>
      <div className={styles.descrFilm}>
        <div className={styles.film}>
          <p>{text}</p>
          {!showDetails && (
            <div className={styles.toggle} onClick={toggleDetails}>
              Детали о фильме
            </div>
          )}
          {showDetails && (
            <>
              <p>{text}</p>
              <div className={styles.component}>
                <div className={styles.options}>
                  <div className={styles.film}>Языки</div>
                  <div className={styles.values}>Казахский</div>
                </div>
                <div className={styles.options}>
                  <div className={styles.film}>Изображение и звук.
                    <span className={styles.descrText}> Фактическое качество зависит от устройства и ограничений правообладателя.</span>
                  </div>
                  <div className={styles.badges}>
                    <div className={styles.icons}>FullHD</div>
                    <div className={styles.icons}>HD</div>
                    <div className={styles.icons}>1080</div>
                    <div className={styles.icons}>720</div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
        {showDetails && (
          <div className={styles.toggle} onClick={toggleDetails}>Свернуть детали</div>
        )}
      </div>
      <div className={styles.rating} onClick={openModal}>
        <div className={styles.ratingWrap}>
          <div className={styles.figure}>6,7</div>
          <div className={styles.ratingIvi}>Рейтинг Иви</div>
        </div>
        <button className={styles.number}>6.0</button>
      </div>
      {isModalOpen && <RatingModal closeModal={closeModal} />}

    </div>
  );
};
