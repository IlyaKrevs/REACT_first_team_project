import { Link } from 'react-router-dom';
import { ROUTE } from '../../router';
import styles from './styles.module.css';
import { personPhoto } from '../../assets';
import { useAppSelector } from '../../store';
import { getMovieMembers } from '../../store/selector';

export const Person = () => {
  const members = useAppSelector(getMovieMembers);
  console.log(members)
  return (
    <div className={styles.personList}>
      {members && members.map((member, index) => {
        if (index === members.length - 1) {
          return (
            <div key={member.id} className={styles.more}>
              <div className={styles.more_text}>Ещё</div>
            </div>
          );
        } else {
          return (
            <div key={member.id} className={styles.person}>
              <Link to={ROUTE.PERSON}>
                <div className={styles.image}>
                  <img className={styles.photo} src={personPhoto} alt='photo' />
                </div>
                <div className={styles.text}>
                <div className={styles.title}>{member.member.nameRU}</div>
                  <div className={styles.secondTitle}>{member.member.nameEN}</div>
                  <div className={styles.extra}>{member.profession.nameRU}</div>
                </div>
              </Link>
            </div>
          );
        }
      })}
    </div>
  );
};
