import { Link } from 'react-router-dom';
import { ROUTE } from '../../router';
import styles from './styles.module.css';
import { getMovie, useAppSelector } from '../../store';

interface IProps {
    image: string;
    name: string;

}

export const PersonItem = ({ image, name }:IProps) => {
    const movie = useAppSelector(getMovie);
  return (
    <div className={styles.person}>
        <h2 className={styles.title}>Популярные персоны</h2>
        <Link to={ROUTE.PERSON}>
          <img className={styles.photo} src={`http://localhost:12120/api/films/images/${image}`}/>
          <div className={styles.descr}>
            <div className={styles.title}>{}</div>
            <div className={styles.subtitle}></div>
          </div>
        </Link>
    </div>
 )
}