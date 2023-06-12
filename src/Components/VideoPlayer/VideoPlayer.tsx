import ReactPlayer from 'react-player';
import styles from './styles.module.css';
import { FunctionComponent } from 'react';
import { useSelector } from 'react-redux';

interface Props {
  url: string;
}

export const VideoPlayer: FunctionComponent<Props> = ({ url }) => {

  let isRussian = useSelector((state: any) => state.LanguageSwitch.isRussian)

  let textRU = 'Трейлер';
  let textEN = 'Trailer';

  let currentText;

  if (isRussian) {
    currentText = textRU;
  } else {
    currentText = textEN;
  }

  return (
    <div className={styles.video}>
      <ReactPlayer url={url} controls={true} width="700px" />
      <div className={styles.userButtons}>
        <div className={styles.wrapper}>
          <div className={styles.trailer}>
            <button className={styles.btn} />
            {currentText}
          </div>
          <div className={styles.favorite}></div>
          <div className={styles.download}></div>
        </div>
      </div>
    </div>
  );
};
