import { Link, generatePath } from 'react-router-dom';
import { ROUTE } from '../../router';
import styles from './styles.module.css';
import { MovieDetailsMembers } from '../../store/types';

interface IProps {
  member: MovieDetailsMembers;
}

export const PersonItem = ({ member}: IProps) => {

  return (
    <div className={styles.person}>
      <Link to={generatePath(`${ROUTE.HOME + ROUTE.PERSON}`, { id: member.id })}>
        <img className={styles.photo} src={`http://localhost:12120/api/members/images/${member.member.imageName}`} />
        <div className={styles.descr}>
          <div className={styles.name}>{member.member.nameRU}</div>
          <div className={styles.subtitle}>{member.profession.nameRU}</div>
        </div>
      </Link>
    </div>
  )
}