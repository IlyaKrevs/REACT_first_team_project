import { DescrMovie, VideoPlayer, Wrapper } from 'components';
import styles from './styles.module.css';

export const WatchPage = () => {
  const videoUrl = 'https://www.youtube.com/watch?v=di-VTrW7Kr0';

  return (
    <div className={styles.descr}>
      <Wrapper>
        <div className={styles.wrapper}>
          <VideoPlayer videoUrl={videoUrl} />
          <DescrMovie />
        </div>
      </Wrapper>
    </div>
  )
}