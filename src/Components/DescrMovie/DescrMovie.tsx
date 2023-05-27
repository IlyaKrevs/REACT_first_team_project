import { Link } from 'react-router-dom';
import { useState } from 'react';
import { ROUTE } from '../../router';
import { RatingModal } from '../RatingModal/RatingModal';
import { actor } from '../../assets';
import styles from './styles.module.css';
import { getMovie, useAppSelector } from '../../store';

interface IProps {
  nameRU: string,
  year: number,
  duration: number,
  ageRating: string,
  idCountry: number,
  rating: number,
  text: string,
}

export const DescrMovie = ({nameRU, year, duration, ageRating, idCountry, rating, text}: IProps) => {
  const [showDetails, setShowDetails] = useState(false);
  const movie = useAppSelector(getMovie); 

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
          <p>Вожатые Кайрат, Болат и Дастан воссоединяются, чтобы возобновить работу детского лагеря после пандемии.
            Их планам мешает дочь инвестора Жанна, которая хочет продать «Ауыл Кэмп», не приносящий прибыли.
            Душевная комедия для всей семьи.
          </p>
          {!showDetails && (
            <div className={styles.toggle} onClick={toggleDetails}>
              Детали о фильме
            </div>
          )}
          {showDetails && (
            <>
              <p>Летний лагерь «Ауыл Кэмп» всегда был любимым местом отдыха детей из Казахстана, но после пандемии коронавируса учреждение почти не приносит прибыли.
                Жанна, дочь инвестора, хочет закрыть лагерь, но троица вожатых убеждает её повременить с решением. Кайрат, Болат и Дастан намерены вернуть месту былую славу.
                Друзьям предстоит объединить разобщённых детей, приехавших отдохнуть, и спасти «Ауыл Кэмп».
              </p>
              <p>Чтобы узнать, как будут развиваться события, смотри онлайн на Иви «Каникулы off-line 3».
              </p>
              <p>Приглашаем посмотреть фильм «Каникулы off-line 3 (на казахском языке с русскими субтитрами)»
                в нашем онлайн-кинотеатре в хорошем HD качестве. Приятного просмотра!
              </p>
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
