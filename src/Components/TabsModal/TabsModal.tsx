import { useState } from 'react';
import styles from './styles.module.css';
import { AllPersons } from '../AllPersons/AllPersons';
import { Form } from '../Form/Form';

export const TabsModal = () => {
  const [activeTab, setActiveTab] = useState('Creators');
  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <div>
      <div className={styles.tabs}>
        <div
          className={`${styles.tab} ${activeTab === 'Creators' ? styles.active : ''}`}
          onClick={() => handleTabClick('Creators')}
        >
          Создатели
        </div>
        <div
          className={`${styles.tab} ${activeTab === 'Reviews' ? styles.active : ''}`}
          onClick={() => handleTabClick('Reviews')}
        >
          Отзывы
        </div>
      </div>

      {activeTab === 'Creators' && <AllPersons />}
      {activeTab === 'Reviews' && <Form/>}
    </div>
  );
};

