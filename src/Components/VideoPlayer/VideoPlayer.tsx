import ReactPlayer from 'react-player';
import styles from './styles.module.css';

interface IProps {
  videoUrl: string;
}

export const VideoPlayer = ({ videoUrl }: IProps) => {
  return (
    <div className={styles.video}>
      <ReactPlayer url={videoUrl} controls={true} />
    </div>
  );
};


