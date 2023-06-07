import { useState } from 'react';
import styles from './styles.module.css';

export const Tabs = () => {
  const [activeTab, setActiveTab] = useState('all');

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <div>
      <div className={styles.tabs}>
        <div
          className={`${styles.tab} ${activeTab === 'all' ? styles.active : ''}`}
          onClick={() => handleTabClick('all')}
        >
          Все
        </div>
        <div
          className={`${styles.tab} ${activeTab === 'actor' ? styles.active : ''}`}
          onClick={() => handleTabClick('actor')}
        >
          Актёр
        </div>
        <div
          className={`${styles.tab} ${activeTab === 'director' ? styles.active : ''}`}
          onClick={() => handleTabClick('director')}
        >
          Режиссёр
        </div>
      </div>

      {/* Вывод контента в зависимости от активного таба */}
      {activeTab === 'all' && <div></div>}
      {activeTab === 'actor' && <div></div>}
      {activeTab === 'director' && <div></div>}
    </div>
  );
};

