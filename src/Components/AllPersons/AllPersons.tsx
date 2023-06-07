import { Person } from "../Person/Person"
import styles from './styles.module.css';

export const AllPersons = () => {
    return (
        <div className={styles.all}>
            <div className={styles.professions}>
                <span className={styles.prof}>Режиссёр</span>
                <Person />
            </div>
            <div className={styles.professions}>
                <span className={styles.prof}>Актёры</span>
                <Person />
            </div>
            <div className={styles.professions}>
                <span className={styles.prof}>Продюсеры</span>
                <Person />
            </div>
            <div className={styles.professions}>
                <span className={styles.prof}>Оператор</span>
                <Person />
            </div>
            <div className={styles.professions}>
                <span className={styles.prof}>Художники</span>
                <Person />
            </div>
            <div className={styles.professions}>
                <span className={styles.prof}>Сценарист</span>
                <Person />
            </div>
            <div className={styles.professions}>
                <span className={styles.prof}>Композитор</span>
                <Person />
            </div>
        </div>
    )
}