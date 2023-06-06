import { Link, generatePath } from 'react-router-dom';
import { ROUTE } from '../../router';
import styles from './styles.module.css';
import { useAppSelector } from '../../store';
import { getMovieMembers } from '../../store/selector';

export const Person = () => {
  const members = useAppSelector(getMovieMembers);

  return (
    <div className={styles.personList}>
      <div className={styles.list}>
      {members && members.map((member) => (
        <div key={member.id} className={styles.person}>
            <div className={styles.image}>
              <img className={styles.photo} src={`http://localhost:12120/api/members/images/${member.member.imageName}`} alt='photo' />
            </div>
            <div className={styles.text}>
              <div className={styles.title}>{member.member.nameRU}</div>
              <div className={styles.extra}>{member.profession.nameRU}</div>
            </div>
        </div>
      ))}
      </div>
      <div className={styles.more}>
        <Link to={ROUTE.PERSON}>
          <div className={styles.more_text}>Ещё</div>
        </Link>
      </div>
    </div>
  );
};
