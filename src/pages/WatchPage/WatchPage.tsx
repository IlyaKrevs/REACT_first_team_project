import { Link, generatePath, useLocation, useParams } from 'react-router-dom';
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
import { Modal } from '../../Components/Modal/Modal';
import { selectComments } from '../../store/selector/commentsSelector';

export const WatchPage = () => {
  const dispatch = useAppDispatch();
  const location = useLocation();
  const { id } = useParams();
  const trailer = useAppSelector(getTrailer);
  const movie = useAppSelector(getMovie);
  const members = useAppSelector(getMovieMembers);
  const comments = useAppSelector(selectComments);
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
                  nameEN: '',
                  createdAt: '',
                  updatedAt: ''
                }}
              />
            }
          </div>
        </div>
        <div className={styles.carousel}>
          <h2 className={styles.titleMov}>С фильмом «Идеальная жена» смотрят</h2>
          <MoviesCarousel />
        </div>
        <div className={styles.person}>
          <h2 className={styles.title}>
            <Link to={generatePath(`${ROUTE.HOME + ROUTE.PERSON}`, { id })} className={styles.linkTitle}>
              Актёры и создатели
            </Link>
          </h2>
          {members &&
            <div className={styles.more}>
              <Link to={generatePath(`${ROUTE.HOME + ROUTE.PERSON}`, { id })} className={styles.linkTitle}>
                <Person />
              </Link>
              <div className={styles.more_text} onClick={openModal}>
                <div className={styles.txt}>Ещё</div>
              </div>
              {isModalOpen && movie && <Modal closeModal={closeModal} />}
            </div>}
        </div>
        <div className={styles.person}>
          <h2 className={styles.title}>
            <Link to={ROUTE.PERSON} className={styles.linkTitle}>
              <span className={styles.linkTitle}>Трейлеры</span>
            </Link> и доп. материалы
          </h2>
          {movie && <Trailer image={movie.imageName} />}
        </div>
        <div className={styles.person}>
          <h2 className={styles.title}>Фильм в подборках</h2>
          <SelectionCarousel />
        </div>
        <div className={styles.person}>
          <div className={styles.wrap}>
            <h2 className={styles.title}>Сюжет</h2>
            <FontAwesomeIcon icon={faCircleInfo} className={styles.icon} />
            <div className={styles.text}>Осторожно, спойлеры</div>
          </div>
          <PlotMovie />
        </div>
        <div className={styles.person}>
          <Link
            to={{ pathname: location.pathname, search: '?tab=Reviews' }} className={styles.linkTitle}>
            <div className={styles.list}>
              <div className={styles.wrap}>
                <h2 className={styles.title}>
                  <span className={styles.linkTitle} onClick={openModal}>Отзывы</span>
                  {isModalOpen && movie && <Modal closeModal={closeModal} />}
                </h2>
                <div className={styles.quantity}>12</div>
              </div>
              <button className={styles.btn} onClick={openModal}>Оставить отзыв</button>
              {isModalOpen && movie && <Modal closeModal={closeModal} />}
            </div>
            <div className={styles.subtitle}>о фильме</div>
            {comments.map((comment) => (
              <Comments comment={comment} key={comment.id} />
            ))}
          </Link>
        </div>
        <div className={styles.person}>
          <div className={styles.list}>
            <div className={styles.wrap}>
              <h2 className={styles.title}>
                <Link to={ROUTE.PERSON} className={styles.linkTitle}>
                  <span className={styles.linkTitle}>Рецензии</span>
                </Link>
                <div className={styles.quantity}>1</div>
              </h2>
            </div>
            <Link to={ROUTE.COMMENTS} className={styles.linkTitle}>
              <button className={styles.btn}>Написать рецензию</button>
            </Link>
          </div>
          <Reviews />
        </div>
        <AllDevices />
      </Wrapper>
    </div>
  )
}