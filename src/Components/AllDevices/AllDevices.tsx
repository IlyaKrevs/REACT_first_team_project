import { Link } from 'react-router-dom';
import styles from './styles.module.css';
import { ipad, poster, tv } from '../../assets';

export const AllDevices = () => {
    return (
        <div className={styles.all_devices}>
            <div className={styles.wrapper}>
             <h2 className={styles.title}>Cмотреть «[4K] Арктика. Рискованная экспедиция» на всех устройствах</h2>
             <p className={styles.subtitle}>Приложение доступно для скачивания на iOS, Android, SmartTV и приставках</p>
             <Link to={'https://www.ivi.tv/devices'}>
                <div className={styles.text}>
                Подключить устройство
                </div>
             </Link>
            </div>
            <div className={styles.devices}>
              <img className={styles.tv} src={tv} alt='tv'/>
              <img className={styles.ipad} src={ipad} alt='ipad'/>
              <img className={styles.poster_tv} src={poster} alt='poster'/>
              <img className={styles.poster_ipad} src={poster} alt='poster'/>
            </div>

        </div>
    )
}