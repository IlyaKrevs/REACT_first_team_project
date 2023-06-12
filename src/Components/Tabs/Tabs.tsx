import { useState } from 'react';
import styles from './styles.module.css';
import { useSelector } from 'react-redux';

export const Tabs = () => {
  const [activeTab, setActiveTab] = useState('all');

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  let isRussian = useSelector((state: any) => state.LanguageSwitch.isRussian);

  let allTextRU = 'Все';
  let allTextEN = 'All';

  let actorTextRU = 'Актёр';
  let actorTextEN = 'Actor';

  let directorTextRU = 'Режиссёр';
  let directorTextEN = 'Director';

  let currentAllText;
  let currentActorText;
  let currentDirectorText;

  if (isRussian) {
    currentAllText = allTextRU;
    currentActorText = actorTextRU;
    currentDirectorText = directorTextRU;
  } else {
    currentAllText = allTextEN;
    currentActorText = actorTextEN;
    currentDirectorText = directorTextEN;
  }


  return (
    <div>
      <div className={styles.tabs}>
        <div
          className={`${styles.tab} ${activeTab === 'all' ? styles.active : ''}`}
          onClick={() => handleTabClick('all')}
        >
          {currentAllText}
        </div>
        <div
          className={`${styles.tab} ${activeTab === 'actor' ? styles.active : ''}`}
          onClick={() => handleTabClick('actor')}
        >
          {currentActorText}
        </div>
        <div
          className={`${styles.tab} ${activeTab === 'director' ? styles.active : ''}`}
          onClick={() => handleTabClick('director')}
        >
          {currentDirectorText}
        </div>
      </div>

      {/* Вывод контента в зависимости от активного таба */}
      {activeTab === 'all' && <div></div>}
      {activeTab === 'actor' && <div></div>}
      {activeTab === 'director' && <div></div>}
    </div>
  );
};

