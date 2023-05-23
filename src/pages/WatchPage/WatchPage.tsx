import { Link } from 'react-router-dom';
import { DescrMovie, MovieCarousel, Person, PlotMovie, Trailer, VideoPlayer } from '../../Components';
import { ROUTE } from '../../router';
import { Wrapper } from '../../Components/Wrapper/Wrapper';
import Carousel from '../../Components/aKrevs/Carousel/Carousel';
import styles from './styles.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';

export const WatchPage = () => {
  const videoUrl = 'https://www.youtube.com/watch?v=di-VTrW7Kr0';
 
  return (
    <div className={styles.descr}>
      <Wrapper>
        <div className={styles.wrapper}>
          <VideoPlayer videoUrl={videoUrl} />
          <DescrMovie />
        </div>
        <div className={styles.carousel}>
          <h2 className={styles.titleMov}>С фильмом «Идеальная жена» смотрят</h2>
          <Carousel />
        </div>
        <div className={styles.person}>
          <h2 className={styles.title}>
            <Link to={ROUTE.PERSON} className={styles.linkTitle}>
              Актёры и создатели
            </Link>
          </h2>
          <Link to={ROUTE.PERSON}>
            <Person />
          </Link>
        </div>
        <div className={styles.person}>
          <h2 className={styles.title}>
            <Link to={ROUTE.PERSON} className={styles.linkTitle}>
              <span className={styles.linkTitle}>Трейлеры</span>
            </Link> и доп. материалы
          </h2>
          <Trailer videoId={''} />
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
      </Wrapper>
    </div>
  )
}