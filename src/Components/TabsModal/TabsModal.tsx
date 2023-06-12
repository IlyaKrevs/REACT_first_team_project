import { useState } from 'react';
import styles from './styles.module.css';
import { AllPersons } from '../AllPersons/AllPersons';
import { Form } from '../Form/Form';
import { Link, Location, useLocation } from 'react-router-dom';

export const TabsModal = () => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState(getActiveTabFromUrl(location));
  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };
  function getActiveTabFromUrl(location: Location) {
    const searchParams = new URLSearchParams(location.search);
    return searchParams.get('tab') || 'Creators';
  }

  return (
    <div>
      <div className={styles.tabs}>
        <Link
          to={{ pathname: location.pathname, search: '?tab=Creators' }}
          className={`${styles.tab} ${activeTab === 'Creators' ? styles.active : ''}`}
          onClick={() => handleTabClick('Creators')}
        >
          Создатели
        </Link>
        <Link
          to={{ pathname: location.pathname, search: '?tab=Reviews' }}
          className={`${styles.tab} ${activeTab === 'Reviews' ? styles.active : ''}`}
          onClick={() => handleTabClick('Reviews')}
        >
          Отзывы
        </Link>
      </div>
      {activeTab === 'Creators' && <AllPersons />}
      {activeTab === 'Reviews' && <Form />}
    </div>
  );
};

