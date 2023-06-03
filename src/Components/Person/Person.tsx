import { Link } from 'react-router-dom';
import { ROUTE } from '../../router';
import styles from './styles.module.css';
import { useAppSelector } from '../../store';
import { getMovieMembers } from '../../store/selector';

export const Person = () => {
  const members = useAppSelector(getMovieMembers);

  return (
    <div className={styles.personList}>
      {members && members.map((member) => (
        <div key={member.id} className={styles.person}>
          <Link to={ROUTE.PERSON}>
            <div className={styles.image}>
            <img className={styles.photo} src={`http://localhost:12120/api/members/images/${member.member.imageName}`} alt='photo' />
            </div>
            <div className={styles.text}>
              <div className={styles.title}>{member.member.nameRU}</div>
              <div className={styles.extra}>{member.profession.nameRU}</div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};
