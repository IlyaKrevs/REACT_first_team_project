import { DescrMovie, VideoPlayer, Wrapper } from 'components';
import styles from './styles.module.css';
import Carousel from 'components/UI/Carousel';
import { Link } from 'react-router-dom';
import { ROUTE } from 'router';

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
          <h2 className={styles.title}>С фильмом «Идеальная жена» смотрят</h2>
          <Carousel />
        </div>
        <div className={styles.person}>
          <Link to={ROUTE.PERSON}>
            <h2 className={styles.title}>Актёры и создатели</h2>
          </Link>

        </div>
      </Wrapper>
    </div>
  )
}