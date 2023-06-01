import { Link } from 'react-router-dom';
import { FunctionComponent, useState } from 'react';
import { ROUTE } from '../../router';
import { RatingModal } from '../RatingModal/RatingModal';
import styles from './styles.module.css';
import { useAppSelector } from '../../store';
import { getText } from '../../store/selector';
import { MovieDetailsMembers } from '../../store/types';

interface Props {
  nameRU: string;
  year: number;
  duration: number;
  ageRating: string;
  idCountry: number;
  rating: number;
  text: string;
  genres: {
    id: number;
    nameRU: string;
    nameEN: string;
    createdAt: string;
    updatedAt: string;
    FilmGenre: {
      id: number;
      idFilm: number;
      idGenre: number;
    };
  }[];
  country: {
    nameRU: string;
  };
  members: MovieDetailsMembers[] | null;
}

export const DescrMovie: FunctionComponent<Props> = ({ nameRU, year, duration, ageRating, rating, genres, country: { nameRU: countryNameRU }, members }) => {
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
    <>
      <div className={styles.descr}>
        <h1 className={styles.title}>{nameRU}</h1>
        <div className={styles.info}>
          <ul className={styles.list}>
            {[year, duration, ageRating].map((item) => (
              <li key={item} className={styles.item}>{item}&nbsp;</li>
            ))}
          </ul>
          <ul className={styles.list}>
            <li className={styles.item}>{countryNameRU}&nbsp;</li>
            {genres.map(({ id, nameRU }) => (
              <li key={id} className={styles.item}>{nameRU}&nbsp;</li>
            ))}
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
          {members && members.map(({ id, member: { nameRU, imageName }, }) => (    
            <Link key={id} to={ROUTE.PERSON} className={styles.link}>
              <div className={styles.inner}>
                {imageName && <img className={styles.photo} src={imageName} alt='photo' />}
              </div>
              <div className={styles.name}>{nameRU}</div>
            </Link>
          ))}
        </div>
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
                {[
                  {
                    title: 'Языки',
                    value: 'Казахский',
                  },
                  {
                    title: (
                      <div className={styles.descrText}>
                        <span className={styles.film}>Изображение и звук.</span> Фактическое качество зависит от устройства и ограничений правообладателя.
                      </div>
                    ),
                    icons: ['FullHD', 'HD', '1080', '720'],
                  },
                ].map((item, index) => (
                  <div key={index} className={styles.options}>
                    <div className={styles.film}>{item.title}</div>
                    {item.value && <div className={styles.values}>{item.value}</div>}
                    {item.icons && (
                      <div className={styles.badges}>
                        {item.icons.map((icon, index) => (
                          <div key={index} className={styles.icons}>{icon}</div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
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
          <div className={styles.figure}>{rating}</div>
          <div className={styles.ratingIvi}>Рейтинг Иви</div>
        </div>
        <button className={styles.number}>ценить</button>
      </div>
      {isModalOpen && <RatingModal closeModal={closeModal} />}
    </>
  );
};
