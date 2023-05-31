import Gallery from '../aKrevs/Gallery/Gallery';
import styles from './styles.module.css';

export const MainMovies = () => {
  return (
    <div className={styles.main}>
      <div className={styles.title}>Главные фильмы</div>
      <Gallery children={[]} titleText={{
        id: 0,
        nameRU: '',
        nameEN: ''
      }}/>
    </div>
  )
}