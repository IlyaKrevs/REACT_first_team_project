import ReactPlayer from 'react-player';
import styles from './styles.module.css';
import { FunctionComponent } from 'react';

interface Props {
  url: string;
}

export const VideoPlayer: FunctionComponent<Props> = ({url}) => {
  return (
    <div className={styles.video}>
      <ReactPlayer url={url} controls={true} width="700px" />
      <div className={styles.userButtons}>
        <div className={styles.wrapper}>
          <div className={styles.trailer}>
            <button className={styles.btn} />
            Трейлер
          </div>
          <div className={styles.favorite}></div>
          <div className={styles.download}></div>
        </div>
      </div>
    </div>
  );
};
