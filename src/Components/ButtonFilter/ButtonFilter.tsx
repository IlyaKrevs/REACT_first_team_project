import styles from './styles.module.css';
import React from 'react';

type FiltersProps = {
  value: number;
  onChangeFilter: (idx: number) => void;
  onResetFilters: () => void;
};

const filters = ['По подписке', 'На языке оригинала', 'Самые новые', 'Самые популярные'];

export const ButtonFilter: React.FC<FiltersProps> = React.memo(({ value, onChangeFilter, onResetFilters }) => (
  <section className={styles.filter}>
    <div className={styles.list}>
      <ul className={styles.list}>
        {filters.map((filterName, i) => (
          <li key={i} onClick={() => onChangeFilter(i)} className={`${value === i ? styles.active : styles.btn}`}>
          {filterName}
          </li>
        ))}
      </ul>
    </div>
    <button className={styles.wrapper} onClick={onResetFilters}>
       <div className={styles.cancel}/>
       <div className={styles.title}>Сбросить фильтры</div>
     </button>
  </section>
));


  