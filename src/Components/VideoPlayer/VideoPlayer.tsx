import ReactPlayer from 'react-player';
import styles from './styles.module.css';

interface IProps {
  videoUrl: string;
}

export const VideoPlayer = ({ videoUrl }: IProps) => {
  return (
    <div className={styles.video}>
      <ReactPlayer url={videoUrl} controls={true} />
      <div className={styles.userButtons}>
        <div className={styles.wrapper}>
          <div className={styles.trailer}>
            <button className={styles.btn} />
            Трейлер
          </div>
          <div className={styles.favorite}></div>
          <div className={styles.download}></div>
        </div>
        {/*<div className={styles.freeMovies}>
          <a className={styles.link}/>
          Бесплатные фильмы
         </div>*/}
      </div>
    </div>
  );
};


