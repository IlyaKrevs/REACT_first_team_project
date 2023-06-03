import { Link } from 'react-router-dom';
import { ROUTE } from '../../router';
import styles from './styles.module.css';
import { useAppSelector } from '../../store';
import { getMovieMembers } from '../../store/selector';

interface IProps {
  nameRU: string;
  text: string;
  //imageName: string;

}

export const PersonItem = ({  }: IProps) => {
  const member = useAppSelector(getMovieMembers);

  return (
    <div className={styles.person}>
      <h2 className={styles.title}>Популярные персоны</h2>
      <Link to={ROUTE.PERSON}>
        <img className={styles.photo} src={`http://localhost:12120/api/films/images/`} />
        <div className={styles.descr}>
          <div className={styles.title}>{}</div>
          <div className={styles.subtitle}>{}</div>
        </div>
      </Link>
    </div>
  )
}