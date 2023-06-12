import styles from './styles.module.css';
import { useAppSelector } from '../../store';
import { getMovieMembers } from '../../store/selector';
import { useSelector } from 'react-redux';

export const Person = () => {
  const members = useAppSelector(getMovieMembers);

  let isRussian = useSelector((state: any) => state.LanguageSwitch.isRussian)


  return (
    <div className={styles.personList}>
      <div className={styles.list}>


        {members && members.map((member) => (

          <div key={member.id} className={styles.person}>
            <div className={styles.image}>

              <img className={styles.photo}
                src={member.member.imageName}
                alt='photo' />
            </div>


            <div className={styles.text}>
              <div className={styles.title}>
                {isRussian ? member.member.nameRU : member.member.nameEN}
              </div>
              <div className={styles.extra}>
                {isRussian ? member.profession.nameRU : member.profession.nameEN}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
