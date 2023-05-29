import { Link, useParams } from 'react-router-dom';
import { AllDevices, Comments, DescrMovie, MovieCarousel, Person, PlotMovie, Reviews, Trailer, VideoPlayer } from '../../Components';
import { ROUTE } from '../../router';
import styles from './styles.module.css';
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import { useEffect } from 'react';
import { getMovie, getMovieDetails, useAppDispatch, useAppSelector } from '../../store';
import { Wrapper } from '../../Components/Wrapper/Wrapper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Gallery from '../../Components/aKrevs/Gallery/Gallery';

export const WatchPage = () => {
  const dispatch = useAppDispatch();
  const { id } = useParams();
  const movie = useAppSelector(getMovie);

  useEffect(() => {
    if (id) {
      const movieId = parseInt(id, 10);
      dispatch(getMovieDetails(movieId));
    }
  }, [dispatch, id]);

  return (
    <div className={styles.descr}>
      <Wrapper>
        <div className={styles.wrapper}>
          <div className={styles.videoPlayerContainer}>
            <VideoPlayer />
          </div>
          <div className={styles.descriptionContainer}>
            <DescrMovie nameRU={''} year={0} duration={0} ageRating={''} idCountry={0} rating={0} text={''} />
          </div>
        </div>
        <div className={styles.carousel}>
          <h2 className={styles.titleMov}>С фильмом «Идеальная жена» смотрят</h2>
          <Gallery />
        </div>
        <div className={styles.person}>
          <h2 className={styles.title}>
            <Link to={ROUTE.PERSON} className={styles.linkTitle}>
              Актёры и создатели
            </Link>
          </h2>
          <Person />
        </div>
        <div className={styles.person}>
          <h2 className={styles.title}>
            <Link to={ROUTE.PERSON} className={styles.linkTitle}>
              <span className={styles.linkTitle}>Трейлеры</span>
            </Link> и доп. материалы
          </h2>
          <Trailer videoId={''}/>
        </div>
        <div className={styles.person}>
          <h2 className={styles.title}>Фильм в подборках</h2>
          <MovieCarousel />
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
          <div className={styles.list}>
            <div className={styles.wrap}>
              <h2 className={styles.title}>
                <Link to={ROUTE.PERSON} className={styles.linkTitle}>
                  <span className={styles.linkTitle}>Отзывы</span>
                </Link>
              </h2>
              <div className={styles.quantity}>12</div>
            </div>
            <Link to={ROUTE.COMMENTS} className={styles.linkTitle}>
              <button className={styles.btn}>Оставить отзыв</button>
            </Link>
          </div>
          <div className={styles.subtitle}>о фильме</div>
          <Comments />
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