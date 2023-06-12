import { Link, generatePath } from 'react-router-dom';
import { FunctionComponent, useState } from 'react';
import { ROUTE } from '../../router';
import { RatingModal } from '../RatingModal/RatingModal';
import styles from './styles.module.css';
import { useAppSelector } from '../../store';
import { getText } from '../../store/selector';
import { Country, Genre, IMovieDetails, MovieDetailsMembers } from '../../store/types';
import { useSelector } from 'react-redux';

interface Props {
  id: number;
  nameRU: string;
  nameEN: string;
  year: number;
  ageRating: string;
  duration: number;
  imageName: string;
  rating: number;
  countRating: number;
  idCountry: number;
  idFilm: number;
  error: string | null;
  loading: boolean;
  movieDetails: IMovieDetails | null;
  country: Country;
  genres: Genre[];
  members: MovieDetailsMembers[] | null;
}

export const DescrMovie: FunctionComponent<Props> = (
  { nameRU,
    nameEN,
    year,
    duration,
    ageRating,
    rating,
    genres,
    country: {
      nameRU: countryNameRU,
      nameEN: countryNameEN,
    },
    members,
    imageName }) => {
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


  let isRussian = useSelector((state: any) => state.LanguageSwitch.isRussian);

  let ratingIviTextRU = 'Рейтинг Иви';
  let ratingIviTextEN = 'Rating ivi';

  let detailsTextRU = 'Детали о фильме';
  let detailsTextEN = 'Movie details';

  let imageSountTextRU = 'Изображение и звук.';
  let imageSountTextEN = 'Image and sound.';

  let factTextRU = 'Фактическое качество зависит от устройства и ограничений правообладателя.';
  let factTextEN = 'Actual quality may vary by device and copyright restrictions.';

  let collapseTextRU = 'Свернуть детали';
  let collapseTextEN = 'Collapse details';

  let estimateTextRU = 'Оценить';
  let estimateTextEN = 'Estimate';


  let currentIviText;
  let currentDetailsText;
  let currentImageSoundText;
  let currentFactText;
  let currentCollapseText;
  let currentEstimateText;

  if (isRussian) {
    currentIviText = ratingIviTextRU;
    currentDetailsText = detailsTextRU;
    currentImageSoundText = imageSountTextRU;
    currentFactText = factTextRU;
    currentCollapseText = collapseTextRU;
    currentEstimateText = estimateTextRU;
  } else {
    currentIviText = ratingIviTextEN;
    currentDetailsText = detailsTextEN;
    currentImageSoundText = imageSountTextEN;
    currentFactText = factTextEN;
    currentCollapseText = collapseTextEN;
    currentEstimateText = estimateTextEN;

  }




  return (
    <>
      <div className={styles.descr}>
        <h1 className={styles.title}>
          {isRussian ? nameRU : nameEN}
        </h1>
        <div className={styles.info}>
          <ul className={styles.list}>

            {[year, duration, ageRating].map((item) => (

              <li key={item} className={styles.item}>{item}&nbsp;</li>

            ))}
          </ul>
          <ul className={styles.list}>

            <li className={styles.item}>
              {isRussian ? countryNameRU : countryNameEN}&nbsp;
            </li>

            {genres && genres.map(({ id, nameRU, nameEN }) => {

              let currentText;
              if (isRussian) {
                currentText = nameRU;
              } else {
                currentText = nameEN;
              }
              currentText = currentText[0].toUpperCase() + currentText.slice(1)

              return <li key={id} className={styles.item}>{currentText}&nbsp;</li>
            }
            )}
          </ul>
          <ul className={styles.list}>
            <div className={styles.icons}>
              FullHD
            </div>
          </ul>
        </div>
        <div className={styles.wrapper}>


          <div className={styles.wrap}>

            <div className={styles.inner}>
              {Math.round(rating * 10) / 10}
            </div>

            <div className={styles.text}>
              {currentIviText}
            </div>
          </div>


          {members && members.slice(0, 4).map((
            { id,
              member: {
                imageName,
                nameRU,
                nameEN
              },
            }) => (
            <Link to={generatePath(`${ROUTE.HOME + ROUTE.PERSON}`, { id })}
              className={styles.link}>

              <div className={styles.inner}>
                <img className={styles.photo}
                  src={imageName}
                  alt='photo' />
              </div>

              <div className={styles.name}>
                {isRussian ? nameRU : nameEN}
              </div>

            </Link>
          ))}
        </div>
      </div>


      <div className={styles.descrFilm}>

        <div className={styles.film}>
          <p>{text}</p>


          {!showDetails && (
            <div className={styles.toggle}
              onClick={toggleDetails}>
              {currentDetailsText}
            </div>
          )}


          {showDetails && (
            <>
              <p>{text}</p>

              <div className={styles.component}>


                {[
                  {
                    title: isRussian ? 'Языки' : 'Languages',
                    value: isRussian ? 'Русский' : 'Russian',
                  },
                  {
                    title: (
                      <div className={styles.descrText}>
                        <span className={styles.film}>
                          {currentImageSoundText}
                        </span>
                        {currentFactText}
                      </div>
                    ),
                    icons: ['FullHD', 'HD', '1080', '720'],
                  },
                ].map((item, index) => (
                  <div key={index} className={styles.options}>

                    <div className={styles.film}>
                      {item.title}
                    </div>

                    {item.value && <div className={styles.values}>
                      {item.value}
                    </div>}


                    {item.icons && (
                      <div className={styles.badges}>

                        {item.icons.map((icon, index) => (
                          <div key={index} className={styles.icons}>
                            {icon}
                          </div>
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
          <div className={styles.toggle}
            onClick={toggleDetails}>
            {currentCollapseText}
          </div>
        )}


      </div>

      <div className={styles.rating}
        onClick={openModal}>

        <div className={styles.ratingWrap}>

          <div className={styles.figure}>
            {rating}
          </div>

          <div className={styles.ratingIvi}>
            {currentIviText}
          </div>
        </div>

        <button className={styles.number}>
          {currentEstimateText}
        </button>
      </div>



      {isModalOpen && <RatingModal closeModal={closeModal} />}
    </>
  );
};
