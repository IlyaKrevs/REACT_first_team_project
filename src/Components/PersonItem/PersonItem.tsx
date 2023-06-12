import { Link, generatePath } from 'react-router-dom';
import { ROUTE } from '../../router';
import styles from './styles.module.css';
import { MovieDetailsMembers } from '../../store/types';
import { useSelector } from 'react-redux';

interface IProps {
  member: MovieDetailsMembers;
}

export const PersonItem = ({ member }: IProps) => {

  let isRussian = useSelector((state: any) => state.LanguageSwitch.isRussian)

  return (
    <div className={styles.person}>
      <Link to={generatePath(`${ROUTE.HOME + ROUTE.PERSON}`, { id: member.id })}>

        <img className={styles.photo} src={member.member.imageName} />

        <div className={styles.descr}>

          <div className={styles.name}>
            {isRussian ? member.member.nameRU : member.member.nameEN}
          </div>
          <div className={styles.subtitle}>
            {isRussian ? member.profession.nameRU : member.profession.nameEN}
          </div>
        </div>
      </Link>
    </div>
  )
}