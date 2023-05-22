import { Link } from 'react-router-dom';
import { ROUTE } from '../../router';
import styles from './styles.module.css';
import { personPhoto } from '../../assets';


export const Person = () => {
    return (
        <div className={styles.person}>
            <Link to={ROUTE.PERSON}>
             <div className={styles.image}>
                <img className={styles.photo} src={personPhoto} alt='photo'></img>
             </div>
             <div className={styles.text}>
                <div className={styles.title}>Юрий</div>
                <div className={styles.secondTitle}>Быков</div>
                <div className={styles.extra}>режиссёр</div>
             </div> 
            </Link>
        </div>
    )
}