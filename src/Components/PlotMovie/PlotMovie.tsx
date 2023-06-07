import { useState } from "react";
import styles from './styles.module.css';
import { useAppSelector } from "../../store";
import { getText } from "../../store/selector";

export const PlotMovie = () => {
    const description = useAppSelector(getText);
    const [showDetails, setShowDetails] = useState(false);

    const toggleDetails = () => {
        setShowDetails(!showDetails);
    };

    return (
        <div className={styles.plot}>
            <div className={styles.description}>
              <p className={showDetails ? styles.description : styles.clamped}>{description}</p>
              {!showDetails && (
                <div className={styles.toggle} onClick={toggleDetails}>
                  Читать дальше
                </div>
              )}
              {showDetails && (
                <div className={styles.toggle} onClick={toggleDetails}>
                  Свернуть
                </div>
              )}
            </div>
          </div>
    )
}
