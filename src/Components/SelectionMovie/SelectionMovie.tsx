import { FunctionComponent } from 'react';
import styles from './styles.module.css';

export const SelectionMovie = () => {

    return (
        <div className={styles.selection}>
            <div className={styles.container}>
                    <img
                        className={styles.picture}
                        src={`https://thumbs.dfs.ivi.ru/storage6/contents/2/d/48739c662594e29cc5a5ac2ba6589c.jpg/784x440/?q=85`}
                        alt=""
                    />
                    <div className={styles.title}>
                        Dramma
                    </div>
            </div>
        </div>
     )}

