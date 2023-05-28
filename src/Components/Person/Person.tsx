import { Link } from 'react-router-dom';
import { ROUTE } from '../../router';
import styles from './styles.module.css';
import { personPhoto } from '../../assets';
import { useState } from 'react';

export const Person = () => {
  const actors = [
    { id: 1, name: 'Юрий', lastName: 'Быков', role: 'режиссёр' },
    { id: 2, name: 'Юрий', lastName: 'Быков', role: 'режиссёр' },
    { id: 3, name: 'Юрий', lastName: 'Быков', role: 'режиссёр' },
    { id: 4, name: 'Юрий', lastName: 'Быков', role: 'режиссёр' },
    { id: 5, name: 'Юрий', lastName: 'Быков', role: 'режиссёр' },
    { id: 6, name: 'Юрий', lastName: 'Быков', role: 'режиссёр' },
    { id: 7, name: 'Юрий', lastName: 'Быков', role: 'режиссёр' },
    { id: 8, name: 'Юрий', lastName: 'Быков', role: 'режиссёр' },
    { id: 9, name: 'Юрий', lastName: 'Быков', role: 'режиссёр' },
    { id: 10, name: 'Юрий', lastName: 'Быков', role: 'режиссёр' },
  ];

  return (
    <div className={styles.personList}>
      {actors.map((actor, index) => {
        if (index === actors.length - 1) {
          return (
            <div key={actor.id} className={styles.more}>
              <div className={styles.more_text}>Ещё</div>
            </div>
          );
        } else {
          return (
            <div key={actor.id} className={styles.person}>
              <Link to={ROUTE.PERSON}>
                <div className={styles.image}>
                  <img className={styles.photo} src={personPhoto} alt='photo' />
                </div>
                <div className={styles.text}>
                  <div className={styles.title}>{actor.name}</div>
                  <div className={styles.secondTitle}>{actor.lastName}</div>
                  <div className={styles.extra}>{actor.role}</div>
                </div>
              </Link>
            </div>
          );
        }
      })}
    </div>
  );
};