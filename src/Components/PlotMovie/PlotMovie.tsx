import { useState } from "react";
import styles from './styles.module.css';
import { useAppSelector } from "../../store";
import { getText } from "../../store/selector";
import { useSelector } from "react-redux";

export const PlotMovie = () => {
  const description = useAppSelector(getText);
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };


  let isRussian = useSelector((state: any) => state.LanguageSwitch.isRussian);

  let readMoreRU = 'Читать дальше';
  let readMoreEN = 'Read more';

  let collapseRU = 'Свернуть';
  let collapseEN = 'Collapse';

  let currentReadMoreText;
  let currentCollapse;

  if (isRussian) {
    currentReadMoreText = readMoreRU;
    currentCollapse = collapseRU;
  } else {
    currentReadMoreText = readMoreEN;
    currentCollapse = collapseEN;

  }

  return (
    <div className={styles.plot}>
      <div className={styles.description}>


        <p className={showDetails ? styles.description : styles.clamped}>
          {description}
        </p>
        {!showDetails && (
          <div className={styles.toggle} onClick={toggleDetails}>
            {currentReadMoreText}
          </div>
        )}
        {showDetails && (
          <div className={styles.toggle} onClick={toggleDetails}>
            {currentCollapse}
          </div>
        )}
      </div>
    </div>
  )
}
