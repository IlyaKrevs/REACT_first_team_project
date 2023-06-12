import { Link, generatePath, useParams } from 'react-router-dom';
import { AllDevices, Comments, DescrMovie, Person, PlotMovie, Reviews, SelectionCarousel, Trailer, VideoPlayer } from '../../Components';
import { ROUTE } from '../../router';
import styles from './styles.module.css';
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import { getAllMovies, getMovieDetails, getMovieInfo, useAppDispatch, useAppSelector } from '../../store';
import { Wrapper } from '../../Components/Wrapper/Wrapper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { getMovie, getMovieMembers, getTrailer } from '../../store/selector';
import { getMovieDetailsMembers } from '../../store/actions/members';
import { MoviesCarousel } from '../../Components/MoviesCarousel/MoviesCarousel';
import { ModalPage } from '../ModalPage/ModalPage';
import { useSelector } from 'react-redux';

export const WatchPage = () => {
  const dispatch = useAppDispatch();
  const { id } = useParams();
  const trailer = useAppSelector(getTrailer);
  const movie = useAppSelector(getMovie);
  const members = useAppSelector(getMovieMembers);
  const [isModalOpen, setModalOpen] = useState(false);
  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  useEffect(() => {
    if (id) {
      const movieId = parseInt(id, 10);
      dispatch(getMovieDetails(movieId));
      dispatch(getMovieInfo(movieId));
      dispatch(getMovieDetailsMembers(movieId));
      dispatch(getAllMovies(1));
    }
  }, [dispatch, id]);

  let test = 'asdasd';


  let isRussian = useSelector((state: any) => state.LanguageSwitch.isRussian)

  let topTitleTextRU = 'С фильмом смотрят';
  let topTitleTextEN = 'Watching with a movie';

  let actorsTextRU = 'Актёры и создатели';
  let actorsTextEN = 'Actors and creators';


  let trailerTextRU = 'Трейлеры';
  let trailerTextEN = 'Trailers';
  let trailerSubTextRU = 'и доп. материалы';
  let trailerSubTextEN = 'and additional materials';


  let filmTextRU = 'Фильм в подборках';
  let filmTextEN = 'Film in collections';

  let storyTextRU = 'Сюжет';
  let storyTextEN = 'Story';

  let spoilerTextRU = 'Осторожно, спойлеры';
  let spoilerTextEN = 'Beware, spoilers';

  let reviewsTextRU = 'Отзывы';
  let reviewsTextEN = 'Reviews';

  let feedbackTextRU = 'Оставить отзыв';
  let feedbackTextEN = 'Leave feedback';

  let aboutFilmTextRU = 'о фильме';
  let aboutFilmTextEN = 'about film';

  let critiqueTextRU = 'Рецензии';
  let critiqueTextEN = 'Critique';

  let writeCritiqueTextRU = 'Написать рецензию';
  let writeCritiqueTextEN = 'Write a critique';

  let currentTopTitleText;
  let currentActorsText;
  let currentTrailerText;
  let currentSubText;
  let currentFilmText;
  let currentStoryText;
  let currentSpoilerText;
  let currentReviewsText;
  let currentFeedbackText;
  let currentAboutFilmText;
  let currentCritiqueText;
  let currentWriteCritiqueText;

  if (isRussian) {
    currentTopTitleText = topTitleTextRU;
    currentActorsText = actorsTextRU;
    currentTrailerText = trailerTextRU;
    currentSubText = trailerSubTextRU;
    currentFilmText = filmTextRU;
    currentStoryText = storyTextRU;
    currentSpoilerText = spoilerTextRU;
    currentReviewsText = reviewsTextRU;
    currentFeedbackText = feedbackTextRU;
    currentAboutFilmText = aboutFilmTextRU;
    currentCritiqueText = critiqueTextRU;
    currentWriteCritiqueText = writeCritiqueTextRU;
  } else {
    currentTopTitleText = topTitleTextEN;
    currentActorsText = actorsTextEN;
    currentTrailerText = trailerTextEN;
    currentSubText = trailerSubTextEN;
    currentFilmText = filmTextEN;
    currentStoryText = storyTextEN;
    currentSpoilerText = spoilerTextEN;
    currentReviewsText = reviewsTextEN;
    currentFeedbackText = feedbackTextEN;
    currentAboutFilmText = aboutFilmTextEN;
    currentCritiqueText = critiqueTextEN;
    currentWriteCritiqueText = writeCritiqueTextEN;

  }




  return (
    <div className={styles.descr}>
      <Wrapper>
        <div className={styles.wrapper}>

          <div className={styles.videoPlayerContainer}>
            {trailer && <VideoPlayer url={trailer} />}
          </div>

          <div className={styles.descriptionContainer}>
            {movie &&
              <DescrMovie
                members={members}
                {...movie}
                country={{
                  id: 0,
                  nameRU: movie.country?.nameRU || '',
                  nameEN: movie.country?.nameEN || '',
                  createdAt: '',
                  updatedAt: ''
                }}
              />
            }
          </div>
        </div>

        <div className={styles.carousel}>

          <h2 className={styles.titleMov}>
            {currentTopTitleText}
          </h2>

          <MoviesCarousel />
        </div>

        <div className={styles.person}>
          <h2 className={styles.title}>
            <Link to={generatePath(`${ROUTE.HOME + ROUTE.PERSON}`, { id })} className={styles.linkTitle}>
              {currentActorsText}
            </Link>
          </h2>






          {members &&
            <div className={styles.more}>
              <Link to={generatePath(`${ROUTE.HOME + ROUTE.PERSON}`, { id })} className={styles.linkTitle}>
                <Person />
              </Link>

              <div className={styles.more_text} onClick={openModal}>
                <div className={styles.txt}>{isRussian ? 'Ещё' : 'More'}</div>
              </div>

              {isModalOpen && movie && <ModalPage closeModal={closeModal} movie={movie} />}
            </div>}
        </div>







        <div className={styles.person}>

          <h2 className={styles.title}>

            <Link to={ROUTE.PERSON} className={styles.linkTitle}>
              <span className={styles.linkTitle}>
                {currentTrailerText}
              </span>
            </Link>

            {currentSubText}
          </h2>

          {movie && <Trailer image={movie.imageName} />}
        </div>



        <div className={styles.person}>
          <h2 className={styles.title}>
            {currentFilmText}
          </h2>
          <SelectionCarousel />
        </div>



        <div className={styles.person}>
          <div className={styles.wrap}>
            <h2 className={styles.title}>{currentStoryText}</h2>
            <FontAwesomeIcon icon={faCircleInfo} className={styles.icon} />
            <div className={styles.text}>
              {currentSpoilerText}
            </div>
          </div>
          <PlotMovie />
        </div>



        <div className={styles.person}>
          <div className={styles.list}>
            <div className={styles.wrap}>
              <h2 className={styles.title}>


                <Link to={ROUTE.PERSON} className={styles.linkTitle}>
                  <span className={styles.linkTitle}>
                    {currentReviewsText}
                  </span>
                </Link>

              </h2>

              <div className={styles.quantity}>
                12
              </div>

            </div>

            <Link to={ROUTE.COMMENTS} className={styles.linkTitle}>
              <button className={styles.btn}>
                {currentFeedbackText}
              </button>
            </Link>

          </div>

          <div className={styles.subtitle}>
            {currentAboutFilmText}
          </div>

          <Comments />
        </div>



        <div className={styles.person}>
          <div className={styles.list}>

            <div className={styles.wrap}>
              <h2 className={styles.title}>

                <Link to={ROUTE.PERSON} className={styles.linkTitle}>

                  <span className={styles.linkTitle}>
                    {currentCritiqueText}
                  </span>

                </Link>

                <div className={styles.quantity}>
                  1
                </div>

              </h2>
            </div>

            <Link to={ROUTE.COMMENTS} className={styles.linkTitle}>
              <button className={styles.btn}>{currentWriteCritiqueText}</button>
            </Link>

          </div>
          <Reviews />
        </div>



        <AllDevices />
      </Wrapper>
    </div>
  )
}
